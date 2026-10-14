import { a as KeywordMatch, c as KeywordUpdateOptions, i as KeywordEntry, n as KWSModel, o as KeywordSpotter, t as Detection } from "./types-CJJaz_NF.js";
import { WebAssemblyModule } from "@sherpaw/shared";

//#region src/wasm.d.ts
/** Exports of the standalone KWS runtime. Compatible with @sherpaw/preloader. */
interface KWSModule extends WebAssemblyModule {
  FS: typeof FS;
  _SherpawCreateKeywordSpotter: (encoder: number, decoder: number, joiner: number, tokens: number, keywords: number, maxActivePaths: number) => number;
  _SherpaOnnxCreateKeywordStream: (spotter: number) => number;
  _SherpaOnnxIsKeywordStreamReady: (spotter: number, stream: number) => number;
  _SherpaOnnxDecodeKeywordStream: (spotter: number, stream: number) => void;
  _SherpaOnnxResetKeywordStream: (spotter: number, stream: number) => void;
  _SherpaOnnxGetKeywordResult: (spotter: number, stream: number) => number;
  _SherpaOnnxDestroyKeywordResult: (result: number) => void;
  _SherpawKeywordResultKeyword: (result: number) => number;
  _SherpawKeywordResultCount: (result: number) => number;
  _SherpawKeywordResultToken: (result: number, index: number) => number;
  _SherpawKeywordResultTimestamp: (result: number, index: number) => number;
  _SherpawKeywordResultStartTime: (result: number) => number;
}
declare function initKWSModule(): Promise<KWSModule>;
//#endregion
//#region src/spotter.d.ts
interface NativeKeywordSpotterConfig extends KeywordUpdateOptions {
  model: KWSModel;
  /** Must contain at least one entry at creation. */
  keywords: readonly KeywordEntry[];
}
interface NativeKeywordSpotter extends Omit<KeywordSpotter, 'processAudio' | 'reset'> {
  /** Consume mono PCM and decode synchronously on the calling thread. */
  processAudio: (samples: Float32Array, sampleRate: number) => Detection[];
  /** Discard buffered audio and reset sample-rate tracking. */
  reset: () => void;
  /** Releases the native detector and stream, leaving model files available for reuse. */
  dispose: () => void;
}
/** Owns the native detector, stream and temporary allocations, but not model files. */
declare function createKeywordSpotter(module: KWSModule, config: NativeKeywordSpotterConfig): NativeKeywordSpotter;
//#endregion
export { type Detection, type KWSModel, type KWSModule, type KeywordEntry, type KeywordMatch, type NativeKeywordSpotter as KeywordSpotter, type NativeKeywordSpotterConfig as KeywordSpotterConfig, type KeywordUpdateOptions, createKeywordSpotter, initKWSModule };