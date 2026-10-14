import { a as PushAudioResult, c as StreamTranscriptionDelta, d as TranscriptionResult, i as PushAudioOptions, l as StreamTranscriptionDeltaType, n as FinishResult, o as Request, r as PushAudioInvokeRequest, s as RuntimeTranscriptionEvent, t as streamTranscription, u as TranscriptionEvent } from "./index-DewaaGFF.js";
import { ASRModule, OnlineRecognizerConfig, OnlineRecognizerType } from "@sherpaw/asr";
import { DataMetadata } from "@sherpaw/preloader";
import * as _moeru_eventa0 from "@moeru/eventa";

//#region src/types.d.ts
interface RemoteUrlSource {
  kind: 'remote-url';
  init?: RequestInit;
  url: string | URL;
}
type BinarySource = ArrayBuffer | Blob | File | RemoteUrlSource | Uint8Array;
type MetadataSource = BinarySource | DataMetadata | string;
interface LoadSources {
  metadata: MetadataSource;
  data: BinarySource;
}
interface InitTranscriptionOptions extends LoadSources {
  module?: ASRModule;
  recognizerConfig?: OnlineRecognizerConfig & {
    type?: OnlineRecognizerType;
  };
  sampleRate?: number;
}
type FetchLike = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
interface SherpawSpeechModel extends LoadSources {
  module?: ASRModule;
  recognizerConfig?: OnlineRecognizerConfig & {
    type?: OnlineRecognizerType;
  };
  sampleRate?: number;
}
interface SherpawProviderOptions {
  baseURL?: string;
  fetch?: FetchLike;
  worker?: Worker;
  workerURL?: string | URL;
}
interface ResolvedSherpawSpeechModel {
  data: ArrayBuffer;
  metadata: DataMetadata;
  module?: ASRModule;
  recognizerConfig?: OnlineRecognizerConfig & {
    type?: OnlineRecognizerType;
  };
  sampleRate?: number;
}
interface SherpawSpeechTransport extends Request<RuntimeTranscriptionEvent, FinishResult> {
  baseURL?: string;
  fetch?: FetchLike;
  loadSpeech: () => Promise<void>;
  terminateSpeech: () => void;
}
type TransportResponse<TEvent extends {
  type: string;
} = RuntimeTranscriptionEvent> = {
  ok: true;
  payload?: unknown;
  events?: TEvent[];
} | {
  ok: false;
  error: string;
};
//#endregion
//#region src/session.d.ts
declare class StreamingTranscriptionSession {
  readonly eventContext: _moeru_eventa0.EventContext<any, {
    raw?: any;
  }>;
  private recognizer;
  private stream;
  private sampleRate;
  private sentenceIndex;
  private currentText;
  private started;
  constructor(module: ASRModule, options?: {
    recognizerConfig?: OnlineRecognizerConfig & {
      type?: OnlineRecognizerType;
    };
    sampleRate?: number;
  });
  on<T extends RuntimeTranscriptionEvent['type']>(type: T, handler: (event: Extract<RuntimeTranscriptionEvent, {
    type: T;
  }>) => void): () => void;
  pushAudio(samples: Float32Array, options?: PushAudioOptions): PushAudioResult;
  finish(): FinishResult;
  reset(): void;
  dispose(): void;
  private emitProgress;
}
//#endregion
//#region src/core.d.ts
declare function asRemoteUrl(url: string | URL, init?: RequestInit): RemoteUrlSource;
declare function pcm16ToFloat32(input: ArrayBuffer | Int16Array): Float32Array;
declare function initTranscriptionModule(): Promise<ASRModule>;
declare function loadModelFiles(module: ASRModule, sources: InitTranscriptionOptions): Promise<void>;
declare function createStreamingTranscriptionSession(options: InitTranscriptionOptions): Promise<{
  module: ASRModule;
  session: StreamingTranscriptionSession;
}>;
declare function createSession(module: ASRModule, options?: {
  recognizerConfig?: ConstructorParameters<typeof StreamingTranscriptionSession>[1]['recognizerConfig'];
  sampleRate?: number;
}): StreamingTranscriptionSession;
declare function transcribeOnce(options: {
  module?: ASRModule;
  locateFile?: (path: string) => string;
  metadata: InitTranscriptionOptions['metadata'];
  data: InitTranscriptionOptions['data'];
  audio: Float32Array | Int16Array | ArrayBuffer;
  sampleRate?: number;
  chunkSize?: number;
  recognizerConfig?: ConstructorParameters<typeof StreamingTranscriptionSession>[1]['recognizerConfig'];
}): Promise<{
  text: string;
  sentences: string[];
}>;
//#endregion
//#region src/provider.d.ts
interface SherpawProvider {
  speech: (model: SherpawSpeechModel) => SherpawSpeechTransport;
}
declare function createSherpawProvider(options?: SherpawProviderOptions): SherpawProvider;
//#endregion
//#region src/recognizer.d.ts
declare function inferRecognizerType(metadata: DataMetadata | Record<string, unknown> | null | undefined): OnlineRecognizerType | null;
//#endregion
export { type BinarySource, type FetchLike, FinishResult, type InitTranscriptionOptions, type LoadSources, type MetadataSource, PushAudioInvokeRequest, PushAudioResult, type RemoteUrlSource, Request, type ResolvedSherpawSpeechModel, type SherpawProviderOptions, type SherpawSpeechModel, type SherpawSpeechTransport, StreamTranscriptionDelta, StreamTranscriptionDeltaType, type TransportResponse as StreamTranscriptionTransportResponse, StreamingTranscriptionSession, TranscriptionEvent, TranscriptionResult, asRemoteUrl, createSession, createSherpawProvider, createStreamingTranscriptionSession, inferRecognizerType, initTranscriptionModule, loadModelFiles, pcm16ToFloat32, streamTranscription, transcribeOnce };