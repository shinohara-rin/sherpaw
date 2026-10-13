import { loadVirtualData } from '@sherpaw/preloader'
import { expect, it } from 'vitest'

import { createOnlineRecognizer, decodeReadyStreams, initASRModule } from '../src'
import { decodeWavPcm16, encodeWavPcm16 } from './helpers/wav'

async function fetchBytes(url: URL): Promise<Uint8Array> {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url.toString()}: ${res.status} ${res.statusText}`)
  }
  return new Uint8Array(await res.arrayBuffer())
}

it('runs in a browser context', () => {
  expect(window).toBeDefined()
})

it('encodes and decodes wav pcm16 data', () => {
  const sampleRate = 16000
  const samples = new Float32Array([0, 0.5, -0.5, 1, -1, 0.25, -0.25])
  const buffer = encodeWavPcm16(samples, sampleRate)
  const decoded = decodeWavPcm16(buffer)

  expect(decoded.sampleRate).toBe(sampleRate)
  expect(decoded.samples.length).toBe(samples.length)
  expect(decoded.samples[1]).toBeCloseTo(samples[1], 2)
})

it('transcribes wav samples with the browser asr pipeline', async () => {
  const wav = await fetchBytes(new URL('./fixtures/0.wav', import.meta.url))
  const wavBuffer = wav.buffer.slice(wav.byteOffset, wav.byteOffset + wav.byteLength) as ArrayBuffer
  const wavData = decodeWavPcm16(wavBuffer)

  const asrModule = await initASRModule()
  if (!asrModule?.addRunDependency) {
    throw new Error('ASR module failed to initialize for browser test')
  }
  expect((asrModule as any)._SherpaOnnxCreateOfflineRecognizer).toBeTypeOf('function')
  expect((asrModule as any)._SherpaOnnxOnlineStreamGetOption).toBeTypeOf('function')
  expect((asrModule as any)._SherpaOnnxDecodeMultipleOnlineStreams).toBeTypeOf('function')
  expect((asrModule as any)._SherpaOnnxOfflineStreamGetOption).toBeTypeOf('function')

  const [encoder, decoder, tokens] = await Promise.all([
    fetchBytes(new URL('./model/encoder.onnx', import.meta.url)),
    fetchBytes(new URL('./model/decoder.onnx', import.meta.url)),
    fetchBytes(new URL('./model/tokens.txt', import.meta.url)),
  ])

  const filenames = loadVirtualData({
    module: asrModule,
    virtualData: {
      'encoder.onnx': encoder,
      'decoder.onnx': decoder,
      'tokens.txt': tokens,
    },
    dependencyId: 'asr-model',
  })

  const recognizer = createOnlineRecognizer(asrModule, {
    type: 1,
    featConfig: {
      sampleRate: 16000,
      featureDim: 80,
    },
    modelConfig: {
      paraformer: {
        encoder: filenames['encoder.onnx'],
        decoder: filenames['decoder.onnx'],
      },
      tokens: filenames['tokens.txt'],
      numThreads: 1,
      provider: 'cpu',
      debug: 0,
      modelType: '',
      modelingUnit: 'cjkchar',
      bpeVocab: '',
    },
    decodingMethod: 'greedy_search',
    maxActivePaths: 4,
    enableEndpoint: 1,
    rule1MinTrailingSilence: 2.4,
    rule2MinTrailingSilence: 1.2,
    rule3MinUtteranceLength: 20,
    hotwordsFile: '',
    hotwordsScore: 1.5,
    ctcFstDecoderConfig: {
      graph: '',
      maxActive: 3000,
    },
    ruleFsts: '',
    ruleFars: '',
  })

  const stream = recognizer.createStream()
  stream.setOption('is_final', '1')
  expect(stream.getOption('is_final')).toBe('1')
  stream.acceptWaveform(wavData.sampleRate, wavData.samples)
  stream.inputFinished()

  while (recognizer.isReady(stream)) {
    recognizer.decode(stream)
  }

  const result = recognizer.getResult(stream)
  const text = String(result?.text ?? '').trim()
  expect(text.length).toBeGreaterThan(0)

  // Two streams decoded as one batch give the same text as one stream alone.
  const pair = [recognizer.createStream(), recognizer.createStream()]
  for (const copy of pair) {
    copy.setOption('is_final', '1')
    copy.acceptWaveform(wavData.sampleRate, wavData.samples)
    copy.inputFinished()
  }
  await decodeReadyStreams(recognizer, pair)
  expect(pair.map(copy => String(recognizer.getResult(copy)?.text ?? '').trim())).toEqual([text, text])
}, 120000)

it('decodes encoder-output noise rollouts on the leader clock', async () => {
  const wav = await fetchBytes(new URL('./fixtures/en-0.wav', import.meta.url))
  const { sampleRate, samples } = decodeWavPcm16(wav.buffer.slice(wav.byteOffset, wav.byteOffset + wav.byteLength) as ArrayBuffer)

  const asrModule = await initASRModule()
  const [encoder, decoder, joiner, tokens] = await Promise.all(['encoder.onnx', 'decoder.onnx', 'joiner.onnx', 'tokens.txt']
    .map(name => fetchBytes(new URL(`./model-transducer/${name}`, import.meta.url))))
  const filenames = loadVirtualData({
    module: asrModule,
    virtualData: { 'transducer-encoder.onnx': encoder, 'transducer-decoder.onnx': decoder, 'transducer-joiner.onnx': joiner, 'transducer-tokens.txt': tokens },
    dependencyId: 'asr-transducer-model',
  })
  const recognizer = createOnlineRecognizer(asrModule, {
    type: 0,
    modelConfig: {
      transducer: {
        encoder: filenames['transducer-encoder.onnx'],
        decoder: filenames['transducer-decoder.onnx'],
        joiner: filenames['transducer-joiner.onnx'],
      },
      tokens: filenames['transducer-tokens.txt'],
      modelingUnit: '',
      debug: 0,
    },
  })

  function decodeWithRollouts(options: { count: number, sigma: number, seed?: number }, input: Float32Array) {
    const stream = recognizer.createStream()
    recognizer.attachRollouts(stream, options)
    const segments: { leader: any, rollouts: any[] }[] = []
    for (let start = 0; start < input.length; start += 1600) {
      stream.acceptWaveform(sampleRate, input.subarray(start, start + 1600))
      while (recognizer.isReady(stream))
        recognizer.decode(stream)
      if (recognizer.isEndpoint(stream)) {
        segments.push({ leader: recognizer.getResult(stream), rollouts: recognizer.getRolloutResults(stream) })
        recognizer.reset(stream)
      }
    }
    stream.acceptWaveform(sampleRate, new Float32Array(Math.round(sampleRate * 0.66)))
    stream.inputFinished()
    while (recognizer.isReady(stream))
      recognizer.decode(stream)
    segments.push({ leader: recognizer.getResult(stream), rollouts: recognizer.getRolloutResults(stream) })
    stream.free()
    return segments
  }

  // With almost no noise, every rollout is the leader, also across an endpoint reset.
  const twice = new Float32Array(samples.length * 2 + sampleRate * 3)
  twice.set(samples, 0)
  twice.set(samples, samples.length + sampleRate * 3)
  const quiet = decodeWithRollouts({ count: 2, sigma: 1e-7 }, twice)
  expect(quiet.length).toBeGreaterThan(1)
  for (const { leader, rollouts } of quiet) {
    expect(rollouts).toHaveLength(2)
    for (const rollout of rollouts) {
      expect(rollout.tokens).toEqual(leader.tokens)
      expect(rollout.timestamps).toEqual(leader.timestamps)
      expect(rollout.start_time).toBe(leader.start_time)
    }
  }

  // Noise changes rollouts, the seed repeats them, and the leader does not change.
  const noisy = decodeWithRollouts({ count: 4, sigma: 1, seed: 5 }, samples)
  expect(noisy[0].leader.text).toBe(decodeWithRollouts({ count: 1, sigma: 1e-7 }, samples)[0].leader.text)
  expect(noisy[0].rollouts.some(rollout => rollout.text !== noisy[0].leader.text)).toBe(true)
  expect(decodeWithRollouts({ count: 4, sigma: 1, seed: 5 }, samples)[0].rollouts.map(rollout => rollout.text))
    .toEqual(noisy[0].rollouts.map(rollout => rollout.text))
}, 120000)
