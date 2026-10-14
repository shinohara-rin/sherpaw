import { TimedToken } from "@sherpaw/asr";

//#region src/stream-transcription/types.d.ts
interface TranscriptionStartedEvent {
  type: 'transcription.started';
}
interface PartialEvent {
  type: 'transcription.partial';
  index: number;
  text: string;
  /**
   * The tokens of `text`, with times from the first pushed sample. Empty when the model reports no
   * timestamps, for example Paraformer.
   */
  tokens?: TimedToken[];
}
interface CompletedEvent {
  type: 'transcription.completed';
}
type RuntimeTranscriptionEvent = CompletedEvent | PartialEvent | TranscriptionStartedEvent;
interface StreamTranscriptionDelta {
  delta: string;
  type: StreamTranscriptionDeltaType;
}
type StreamTranscriptionDeltaType = 'transcript.text.delta' | 'transcript.text.done';
type TranscriptionEvent = StreamTranscriptionDelta;
interface PushAudioOptions {
  sampleRate?: number;
}
interface PushAudioResult {
  text: string;
  isEndpoint: boolean;
}
interface FinishResult {
  text: string;
  sentenceCount: number;
}
interface PushAudioInvokeRequest {
  samples: number[];
  sampleRate?: number;
}
interface Request<E extends {
  type: string;
} = RuntimeTranscriptionEvent, TFinish = FinishResult> {
  inputSampleRate?: number;
  events?: ReadableStream<E>;
  load: () => Promise<void>;
  push: (payload: PushAudioInvokeRequest) => Promise<unknown>;
  finish: () => Promise<TFinish>;
  reset?: () => Promise<void>;
  dispose: () => Promise<void>;
}
interface TranscriptionResult<TFinish = FinishResult> {
  input: WritableStream<Float32Array>;
  done: Promise<TFinish>;
  dispose: () => Promise<void>;
  fullStream: ReadableStream<StreamTranscriptionDelta>;
  text: Promise<string>;
  textStream: ReadableStream<string>;
}
//#endregion
//#region src/stream-transcription/execute.d.ts
declare function streamTranscription<E extends {
  type: string;
} = RuntimeTranscriptionEvent, TFinish = unknown>(request: Request<E, TFinish>): TranscriptionResult<TFinish>;
//#endregion
export { PushAudioResult as a, StreamTranscriptionDelta as c, TranscriptionResult as d, PushAudioOptions as i, StreamTranscriptionDeltaType as l, FinishResult as n, Request as o, PushAudioInvokeRequest as r, RuntimeTranscriptionEvent as s, streamTranscription as t, TranscriptionEvent as u };