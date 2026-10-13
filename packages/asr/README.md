# @sherpaw/asr

A WebAssembly (WASM) wrapper for ASR-related features.

> [**Sherpaw**](https://github.com/sumimakito/sherpaw) (the "w" stands for "WASM") is a WebAssembly (WASM) wrapper for [Sherpa-ONNX](https://github.com/k2-fsa/sherpa-onnx)—a framework for speech-related tasks (ASR, VAD, TTS, STT, SD, etc.) using onnxruntime **purely locally**.

## Quick start

> [!NOTE]
> This section may be subject to change as the API is still stabilizing.

## Install dependencies

```bash
npm i @sherpaw/asr @sherpaw/preloader
# or with pnpm
pnpm add @sherpaw/asr @sherpaw/preloader
# or with yarn
yarn add @sherpaw/asr @sherpaw/preloader
```

### Set up a recognizer

```ts
import type { OnlineRecognizer } from '@sherpaw/asr'
import type { DataMetadata } from '@sherpaw/preloader'

import { createOnlineRecognizer, initASRModule } from '@sherpaw/asr'
import asrWASMFile from '@sherpaw/asr/module.wasm?url'
import { loadData } from '@sherpaw/preloader'

async function setupRecognizer(): OnlineRecognizer {
  // Load model metadata and data with @sherpaw/preloader
  const metadata = await (await fetch('/models/my-asr/metadata.json')).json() as DataMetadata
  const data = await (await fetch('/models/my-asr/data.bin')).arrayBuffer()

  // Provide the path to the WASM file and initialize the ASR module
  const asr = await initASRModule({ locateFile: () => asrWASMFile })
  loadData({
    module: asr,
    metadata,
    data,
  })

  // Create an online recognizer
  return createOnlineRecognizer(asr)
}
```

### Create a stream, feed audio samples, and get the transcription

```ts
import type { OnlineRecognizer, OnlineStream } from '@sherpaw/asr'

const lines: string[] = ['']
let stream: OnlineStream | undefined

function processSamples(recognizer: OnlineRecognizer, samples: Float32Array) {
  if (!stream) {
    stream = recognizer.createStream()
  }

  stream.acceptWaveform(16000, samples) // Sample rate at 16 kHz
  while (recognizer.isReady(stream)) {
    recognizer.decode(stream)
  }

  const { text } = recognizer.getResult(stream)
  // Update the current transcription line
  lines[lines.length - 1] = text

  if (recognizer.isEndpoint(stream)) {
    // Start a new transcription line
    lines.push('')
    recognizer.reset(stream)
  }
}
```

### Decode several streams in one batch

Streams of one recognizer can share each model call. `decodeReadyStreams` decodes the ready streams as one batch, and repeats until no stream is ready. Pass a WebGPU backend as the third argument to run the batches on the GPU.

```ts
import type { OnlineRecognizer, OnlineStream } from '@sherpaw/asr'

import { decodeReadyStreams } from '@sherpaw/asr'

async function processCopies(recognizer: OnlineRecognizer, streams: OnlineStream[], copies: Float32Array[]) {
  streams.forEach((stream, index) => stream.acceptWaveform(16000, copies[index]))
  await decodeReadyStreams(recognizer, streams)
  return streams.map(stream => recognizer.getResult(stream).text)
}
```

A batch gives the same result as one stream alone only when the model does not quantize activations per batch. INT8 models that use `DynamicQuantizeLinear` compute one scale for the whole batch, so each stream's result depends on the other streams. FP32 models give the same result.

### Measure recognizer uncertainty with rollouts

A rollout decodes the same encoder output as its stream, with Gaussian noise added. Where the rollouts disagree with the stream, the recognizer is unsure. The encoder runs once for the stream and all its rollouts, so each rollout costs only a decoder and joiner pass. Rollouts need a transducer recognizer.

```ts
import type { OnlineRecognizer } from '@sherpaw/asr'

function transcribeWithRollouts(recognizer: OnlineRecognizer, samples: Float32Array) {
  const stream = recognizer.createStream()
  // Attach before the first decode. sigma scales the noise by the encoder output's standard deviation.
  recognizer.attachRollouts(stream, { count: 12, sigma: 1, seed: 1 })
  stream.acceptWaveform(16000, samples)
  stream.inputFinished()
  while (recognizer.isReady(stream))
    recognizer.decode(stream)

  const result = recognizer.getResult(stream)
  // One result per rollout, with tokens and timestamps on the stream's clock.
  const rollouts = recognizer.getRolloutResults(stream)
  stream.free() // Also frees the rollouts.
  return { result, rollouts }
}
```

`reset` also resets the rollouts, so they follow endpoints. The same seed and input repeat the same rollouts. A sigma of about 1 works for X-ASR. At 2 or more, the noise breaks confident tokens too. Measured in WASM on one core, 12 rollouts add about a third to the decode time of a clip, and 48 rollouts about double it. An input-noise Monte Carlo probe with 12 copies costs 12 decodes.

The rollouts of one stream run as one batch. INT8 joiners that use `DynamicQuantizeLinear` share one scale across the batch, as described above.

## License

```
Copyright 2025 Makito

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
