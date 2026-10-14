import { ASRModule, OnlineRecognizerConfig, OnlineRecognizerType } from "@sherpaw/asr";
import { DataMetadata } from "@sherpaw/preloader";

//#region src/stream-transcription/types.d.ts

interface PushAudioInvokeRequest {
  samples: number[];
  sampleRate?: number;
}
//#endregion
//#region src/types.d.ts

interface ResolvedSherpawSpeechModel {
  data: ArrayBuffer;
  metadata: DataMetadata;
  module?: ASRModule;
  recognizerConfig?: OnlineRecognizerConfig & {
    type?: OnlineRecognizerType;
  };
  sampleRate?: number;
}
//#endregion
//#region src/worker/index.d.ts
type WorkerInvokeCommand = keyof WorkerInvokePayloadMap;
interface WorkerInvokePayloadMap {
  load: ResolvedSherpawSpeechModel;
  push: PushAudioInvokeRequest;
  finish: void;
  reset: void;
  dispose: void;
}
//#endregion
export { WorkerInvokeCommand };