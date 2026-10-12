import type { ASRModule } from '@sherpaw/asr'

import { timedTokens } from '@sherpaw/asr'
import { expect, it, vi } from 'vitest'

import type { PartialEvent } from './stream-transcription/types'

import { StreamingTranscriptionSession } from './session'

const native = vi.hoisted(() => {
  const result = { text: 'hello', tokens: [' hel', 'lo'], timestamps: [0.2, 0.32], ys_probs: [-0.1, -2.5], start_time: 3 }
  return {
    result,
    tokens: [{ text: ' hel', time: 3.2, logProbability: -0.1 }, { text: 'lo', time: 3.32, logProbability: -2.5 }],
    recognizer: {
      createStream: () => ({ acceptWaveform: () => {}, inputFinished: () => {}, free: () => {} }),
      isReady: () => false,
      decode: () => {},
      getResult: () => result,
      isEndpoint: () => false,
      reset: () => {},
      free: () => {},
    },
  }
})

vi.mock('@sherpaw/asr', () => ({
  createOnlineRecognizer: () => native.recognizer,
  timedTokens: vi.fn(() => native.tokens),
}))

it('sends the timed tokens of the recognizer result with the partial text', () => {
  const session = new StreamingTranscriptionSession({} as ASRModule)
  const partials: PartialEvent[] = []
  session.on('transcription.partial', event => partials.push(event))

  session.pushAudio(new Float32Array(320))

  expect(timedTokens).toHaveBeenCalledWith(native.result)
  expect(partials).toEqual([{ type: 'transcription.partial', index: 1, text: 'hello', tokens: native.tokens }])
  session.dispose()
})
