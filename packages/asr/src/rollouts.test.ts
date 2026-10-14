import { describe, expect, it, vi } from 'vitest'

import { createOnlineRecognizer, initASRModule, OnlineRecognizerTypes } from './index'

/**
 * A real module whose recognizer and rollout calls are stubbed, so the wrapper runs without model files.
 * The C API returns rollout results as JSON strings in the WASM heap.
 */
async function stubbedModule() {
  const module = await initASRModule()
  const results = ['{"text":"a","tokens":["a"],"timestamps":[0.4]}', '{"text":"b","tokens":["b"],"timestamps":[0.44]}']
  const stub = module as unknown as Record<string, unknown>
  stub._SherpaOnnxCreateOnlineRecognizer = () => 1
  stub._SherpaOnnxDestroyOnlineStreamResultJson = vi.fn()
  stub._SherpawAttachRollouts = vi.fn(() => 0)
  stub._SherpawDetachRollouts = vi.fn()
  stub._SherpawRolloutCount = vi.fn(() => results.length)
  stub._SherpawGetRolloutResultAsJson = vi.fn((_stream: number, index: number) => {
    const size = module.lengthBytesUTF8(results[index]) + 1
    const pointer = module._malloc(size)
    module.stringToUTF8(results[index], pointer, size)
    return pointer
  })
  return { module, stub }
}

describe('rollouts', () => {
  it('are exported by the prebuilt ASR module', async () => {
    const module = await initASRModule() as unknown as Record<string, unknown>

    for (const name of ['_SherpawAttachRollouts', '_SherpawDetachRollouts', '_SherpawRolloutCount', '_SherpawGetRolloutResultAsJson'])
      expect(module[name]).toBeTypeOf('function')
  })

  it('attach with the given count, sigma, and seed, and read one result per rollout', async () => {
    const { module, stub } = await stubbedModule()
    const recognizer = createOnlineRecognizer(module, { type: OnlineRecognizerTypes.Transducer })
    const stream = { handle: 7 } as Parameters<typeof recognizer.attachRollouts>[0]

    recognizer.attachRollouts(stream, { count: 2, sigma: 1.5, seed: 3 })

    expect(stub._SherpawAttachRollouts).toHaveBeenCalledWith(1, 7, 2, 1.5, 3)
    expect(recognizer.getRolloutResults(stream).map(result => result.text)).toEqual(['a', 'b'])
    expect(stub._SherpaOnnxDestroyOnlineStreamResultJson).toHaveBeenCalledTimes(2)
  })

  it('default to sigma 1 and seed 0', async () => {
    const { module, stub } = await stubbedModule()
    const recognizer = createOnlineRecognizer(module)

    recognizer.attachRollouts({ handle: 7 } as Parameters<typeof recognizer.attachRollouts>[0], { count: 4 })

    expect(stub._SherpawAttachRollouts).toHaveBeenCalledWith(1, 7, 4, 1, 0)
  })

  it('reject recognizers that are not transducers', async () => {
    const { module } = await stubbedModule()
    const recognizer = createOnlineRecognizer(module, { type: OnlineRecognizerTypes.Paraformer })

    expect(() => recognizer.attachRollouts({ handle: 7 } as Parameters<typeof recognizer.attachRollouts>[0], { count: 2 }))
      .toThrow('Rollouts need a transducer recognizer.')
  })

  it('reject a count or sigma that the runtime refuses', async () => {
    const { module, stub } = await stubbedModule()
    stub._SherpawAttachRollouts = () => -1
    const recognizer = createOnlineRecognizer(module)

    expect(() => recognizer.attachRollouts({ handle: 7 } as Parameters<typeof recognizer.attachRollouts>[0], { count: 0 }))
      .toThrow('Rollouts need a positive count and a positive sigma.')
  })

  it('are freed with their stream', async () => {
    const { module, stub } = await stubbedModule()
    stub._SherpaOnnxCreateOnlineStream = () => 9
    stub._SherpaOnnxDestroyOnlineStream = vi.fn()
    const stream = createOnlineRecognizer(module).createStream()

    stream.free()

    expect(stub._SherpawDetachRollouts).toHaveBeenCalledWith(9)
    expect(stub._SherpaOnnxDestroyOnlineStream).toHaveBeenCalledWith(9)
  })
})
