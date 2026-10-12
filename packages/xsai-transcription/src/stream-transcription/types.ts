import type { TimedToken } from '@sherpaw/asr'

export interface TranscriptionStartedEvent {
  type: 'transcription.started'
}

export interface PartialEvent {
  type: 'transcription.partial'
  index: number
  text: string
  /**
   * The tokens of `text`, with times from the first pushed sample. Empty when the model reports no
   * timestamps, for example Paraformer.
   */
  tokens?: TimedToken[]
}

export interface CompletedEvent {
  type: 'transcription.completed'
}

export type RuntimeTranscriptionEvent
  = | CompletedEvent
    | PartialEvent
    | TranscriptionStartedEvent

export interface StreamTranscriptionDelta {
  delta: string
  type: StreamTranscriptionDeltaType
}

export type StreamTranscriptionDeltaType = 'transcript.text.delta' | 'transcript.text.done'

export type TranscriptionEvent
  = StreamTranscriptionDelta

export interface PushAudioOptions {
  sampleRate?: number
}

export interface PushAudioResult {
  text: string
  isEndpoint: boolean
}

export interface FinishResult {
  text: string
  sentenceCount: number
}

export interface PushAudioInvokeRequest {
  samples: number[]
  sampleRate?: number
}

export interface Request<E extends { type: string } = RuntimeTranscriptionEvent, TFinish = FinishResult> {
  inputSampleRate?: number
  events?: ReadableStream<E>
  load: () => Promise<void>
  push: (payload: PushAudioInvokeRequest) => Promise<unknown>
  finish: () => Promise<TFinish>
  reset?: () => Promise<void>
  dispose: () => Promise<void>
}

export type EventByType<TEvent extends { type: string }, TType extends string> = Extract<TEvent, { type: TType }>

export interface TranscriptionResult<TFinish = FinishResult> {
  input: WritableStream<Float32Array>
  done: Promise<TFinish>
  dispose: () => Promise<void>
  fullStream: ReadableStream<StreamTranscriptionDelta>
  text: Promise<string>
  textStream: ReadableStream<string>
}
