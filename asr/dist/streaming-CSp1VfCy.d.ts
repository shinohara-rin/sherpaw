import { t as TimedToken } from "./tokens-BKroEbW8.js";
import { WebAssemblyModule } from "@sherpaw/shared";

//#region src/asr.d.ts
interface FeatureConfig {
  sampleRate?: number;
  featureDim?: number;
}
interface TransducerModelConfig {
  encoder?: string;
  decoder?: string;
  joiner?: string;
}
interface ParaformerModelConfig {
  encoder?: string;
  decoder?: string;
}
interface OfflineParaformerModelConfig {
  model?: string;
}
interface SimpleModelConfig {
  model?: string;
}
interface OnlineModelConfig {
  transducer?: TransducerModelConfig;
  paraformer?: ParaformerModelConfig;
  zipformer2Ctc?: SimpleModelConfig;
  nemoCtc?: SimpleModelConfig;
  toneCtc?: SimpleModelConfig;
  tokens?: string;
  numThreads?: number;
  provider?: string;
  debug?: number;
  modelType?: string;
  modelingUnit?: string;
  bpeVocab?: string;
  tokensBuf?: string;
  tokensBufSize?: number;
}
interface CtcFstDecoderConfig {
  graph?: string;
  maxActive?: number;
}
interface HomophoneReplacerConfig {
  lexicon?: string;
  ruleFsts?: string;
}
interface OnlineRecognizerConfig {
  featConfig?: FeatureConfig;
  modelConfig?: OnlineModelConfig;
  decodingMethod?: string;
  maxActivePaths?: number;
  enableEndpoint?: number;
  rule1MinTrailingSilence?: number;
  rule2MinTrailingSilence?: number;
  rule3MinUtteranceLength?: number;
  hotwordsFile?: string;
  hotwordsScore?: number;
  ctcFstDecoderConfig?: CtcFstDecoderConfig;
  ruleFsts?: string;
  ruleFars?: string;
  blankPenalty?: number;
  hotwordsBuf?: string;
  hotwordsBufSize?: number;
  hr?: HomophoneReplacerConfig;
}
interface OfflineLMConfig {
  model?: string;
  scale?: number;
}
interface WhisperModelConfig {
  encoder?: string;
  decoder?: string;
  language?: string;
  task?: string;
  tailPaddings?: number;
  enableTokenTimestamps?: number;
  enableSegmentTimestamps?: number;
}
interface CanaryModelConfig {
  encoder?: string;
  decoder?: string;
  srcLang?: string;
  tgtLang?: string;
  usePnc?: number;
}
interface MoonshineModelConfig {
  preprocessor?: string;
  encoder?: string;
  uncachedDecoder?: string;
  cachedDecoder?: string;
  mergedDecoder?: string;
}
interface SenseVoiceModelConfig {
  model?: string;
  language?: string;
  useInverseTextNormalization?: number;
}
interface FireRedAsrModelConfig {
  encoder?: string;
  decoder?: string;
}
interface DolphinModelConfig {
  model?: string;
}
interface ZipformerCtcModelConfig {
  model?: string;
}
interface WenetCtcModelConfig {
  model?: string;
}
interface OfflineOmnilingualAsrCtcModelConfig {
  model?: string;
}
interface OfflineMedAsrCtcModelConfig {
  model?: string;
}
interface OfflineFireRedAsrCtcModelConfig {
  model?: string;
}
interface OfflineFunAsrNanoModelConfig {
  encoderAdaptor?: string;
  llm?: string;
  embedding?: string;
  tokenizer?: string;
  systemPrompt?: string;
  userPrompt?: string;
  maxNewTokens?: number;
  temperature?: number;
  topP?: number;
  seed?: number;
  language?: string;
  itn?: number;
  hotwords?: string;
}
interface OfflineQwen3AsrModelConfig {
  convFrontend?: string;
  encoder?: string;
  decoder?: string;
  tokenizer?: string;
  maxTotalLen?: number;
  maxNewTokens?: number;
  temperature?: number;
  topP?: number;
  seed?: number;
  hotwords?: string;
}
interface OfflineCohereTranscribeModelConfig {
  encoder?: string;
  decoder?: string;
  language?: string;
  usePunct?: number;
  useItn?: number;
}
interface TdnnModelConfig {
  model?: string;
}
interface OfflineModelConfig extends OnlineModelConfig {
  paraformer?: OfflineParaformerModelConfig;
  // offline-specific optional models
  whisper?: WhisperModelConfig;
  canary?: CanaryModelConfig;
  moonshine?: MoonshineModelConfig;
  senseVoice?: SenseVoiceModelConfig;
  fireRedAsr?: FireRedAsrModelConfig;
  dolphin?: DolphinModelConfig;
  zipformerCtc?: ZipformerCtcModelConfig;
  wenetCtc?: WenetCtcModelConfig;
  omnilingual?: OfflineOmnilingualAsrCtcModelConfig;
  medasr?: OfflineMedAsrCtcModelConfig;
  fireRedAsrCtc?: OfflineFireRedAsrCtcModelConfig;
  funasrNano?: OfflineFunAsrNanoModelConfig;
  qwen3Asr?: OfflineQwen3AsrModelConfig;
  cohereTranscribe?: OfflineCohereTranscribeModelConfig;
  tdnn?: TdnnModelConfig;
  teleSpeechCtc?: string;
  // other optional offline-specific entries are represented by SimpleModelConfig above
}
interface OfflineRecognizerConfig {
  featConfig?: FeatureConfig;
  modelConfig?: OfflineModelConfig;
  lmConfig?: OfflineLMConfig;
  decodingMethod?: string;
  maxActivePaths?: number;
  hotwordsFile?: string;
  hotwordsScore?: number;
  ruleFsts?: string;
  ruleFars?: string;
  blankPenalty?: number;
  hr?: HomophoneReplacerConfig;
}
/** Represents a stream used by the offline recognizer. */
declare class OfflineStream {
  handle: number | null;
  Module: any;
  constructor(handle: number, Module: any);
  free(): void;
  /** Append audio samples (Float32Array, range [-1, 1]) */
  acceptWaveform(sampleRate: number, samples: Float32Array): void;
  setOption(key: string, value: string): void;
  getOption(key: string): string;
}
/** Offline recognizer class. */
declare class OfflineRecognizer {
  config: OfflineRecognizerConfig;
  handle: number;
  Module: any;
  constructor(configObj: OfflineRecognizerConfig, Module: any);
  setConfig(configObj: OfflineRecognizerConfig): void;
  free(): void;
  createStream(): OfflineStream;
  decode(stream: OfflineStream): void;
  /** Returns the parsed JSON result for the given stream. */
  getResult(stream: OfflineStream): any;
}
/** Represents a stream used by the online recognizer. */
declare class OnlineStream {
  handle: number | null;
  pointer: number | null;
  n: number;
  Module: any;
  constructor(handle: number, Module: any);
  free(): void;
  acceptWaveform(sampleRate: number, samples: Float32Array): void;
  inputFinished(): void;
  setOption(key: string, value: string): void;
  getOption(key: string): string;
}
/** Online recognizer class (not exported from the JS module directly, but used/returned). */
declare class OnlineRecognizer {
  config: OnlineRecognizerConfig;
  handle: number;
  Module: any;
  constructor(configObj: OnlineRecognizerConfig, Module: any);
  free(): void;
  createStream(): OnlineStream;
  isReady(stream: OnlineStream): boolean;
  decode(stream: OnlineStream): void;
  /**
   * Decodes the next chunk of every stream in one model call. Every stream must be ready.
   * Use `decodeReadyStreams` to decode only the ready streams until none is left.
   */
  decodeStreams(streams: readonly OnlineStream[]): void;
  isEndpoint(stream: OnlineStream): boolean;
  /** Resets the stream and its rollouts. */
  reset(stream: OnlineStream): void;
  getResult(stream: OnlineStream): any;
  /**
   * Attaches encoder-output noise rollouts to a transducer stream before its first decode.
   * Each decode of the stream also decodes every rollout from the same encoder output, with
   * Gaussian noise of `sigma` times the standard deviation of that output added. The noise
   * fades out in frames near the noise floor of the input, so rollouts do not invent speech in
   * silence. The encoder runs once, so a rollout costs one decoder and joiner pass. Replaces
   * earlier rollouts.
   * Freeing the stream frees its rollouts.
   */
  attachRollouts(stream: OnlineStream, options: RolloutOptions): void;
  /** Frees the rollouts of a stream. The stream keeps decoding. */
  detachRollouts(stream: OnlineStream): void;
  /** One result per rollout, in the shape of `getResult`. Empty without rollouts. */
  getRolloutResults(stream: OnlineStream): any[];
}
interface RolloutOptions {
  /** Number of rollouts. At least 1. */
  count: number;
  /** Noise level as a multiple of the encoder output's standard deviation. Defaults to 1. */
  sigma?: number;
  /** Seeds the noise, so the same input and seed repeat the same rollouts. Defaults to 0. */
  seed?: number;
}
interface InitResult {
  buffer?: number;
  ptr: number;
  len: number;
  [key: string]: any;
}
type Config = OnlineModelConfig | OnlineRecognizerConfig | OfflineModelConfig | OfflineRecognizerConfig;
declare function freeConfig(config: Config, Module: any): void;
declare function initSherpaOnnxOnlineTransducerModelConfig(config: TransducerModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOnlineParaformerModelConfig(config: ParaformerModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOnlineZipformer2CtcModelConfig(config: SimpleModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOnlineNemoCtcModelConfig(config: SimpleModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOnlineToneCtcModelConfig(config: SimpleModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOnlineModelConfig(config: OnlineModelConfig, Module: any): InitResult;
declare function initSherpaOnnxFeatureConfig(config: FeatureConfig, Module: any): InitResult;
declare function initSherpaOnnxHomophoneReplacerConfig(config: HomophoneReplacerConfig, Module: any): InitResult;
declare function initSherpaOnnxOnlineCtcFstDecoderConfig(config: CtcFstDecoderConfig, Module: any): InitResult;
declare function initSherpaOnnxOnlineRecognizerConfig(config: OnlineRecognizerConfig, Module: any): InitResult;
declare function initSherpaOnnxOfflineTransducerModelConfig(config: TransducerModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOfflineParaformerModelConfig(config: OfflineParaformerModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOfflineNemoEncDecCtcModelConfig(config: SimpleModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOfflineDolphinModelConfig(config: SimpleModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOfflineZipformerCtcModelConfig(config: SimpleModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOfflineWenetCtcModelConfig(config: SimpleModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOfflineOmnilingualAsrCtcModelConfig(config: OfflineOmnilingualAsrCtcModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOfflineMedAsrCtcModelConfig(config: OfflineMedAsrCtcModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOfflineFireRedAsrCtcModelConfig(config: OfflineFireRedAsrCtcModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOfflineFunAsrNanoModelConfig(config: OfflineFunAsrNanoModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOfflineQwen3AsrModelConfig(config: OfflineQwen3AsrModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOfflineCohereTranscribeModelConfig(config: OfflineCohereTranscribeModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOfflineWhisperModelConfig(config: WhisperModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOfflineCanaryModelConfig(config: CanaryModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOfflineMoonshineModelConfig(config: MoonshineModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOfflineFireRedAsrModelConfig(config: FireRedAsrModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOfflineTdnnModelConfig(config: TdnnModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOfflineSenseVoiceModelConfig(config: SenseVoiceModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOfflineLMConfig(config: OfflineLMConfig, Module: any): InitResult;
declare function initSherpaOnnxOfflineModelConfig(config: OfflineModelConfig, Module: any): InitResult;
declare function initSherpaOnnxOfflineRecognizerConfig(config: OfflineRecognizerConfig, Module: any): InitResult;
declare const OnlineRecognizerTypes: {
  readonly Transducer: 0;
  readonly Paraformer: 1;
  readonly Zipformer2CTC: 2;
  readonly NemoCTC: 3;
  readonly ToneCTC: 4;
};
type OnlineRecognizerType = typeof OnlineRecognizerTypes[keyof typeof OnlineRecognizerTypes];
declare function createOnlineRecognizerConfig(type?: OnlineRecognizerType, overrides?: OnlineRecognizerConfig & {
  type?: OnlineRecognizerType;
}): OnlineRecognizerConfig & {
  type: OnlineRecognizerType;
};
declare function createOnlineRecognizer(Module: WebAssemblyModule, myConfig?: OnlineRecognizerConfig & {
  type?: OnlineRecognizerType;
}): OnlineRecognizer;
//#endregion
//#region src/streaming.d.ts
/** Optional execution backend. Ownership transfers to createStreamingRecognizer, including on initialization failure. */
interface StreamingBackend {
  decode: (recognizer: OnlineRecognizer, stream: OnlineStream) => Promise<void>;
  /** Decodes the next chunk of every stream in one model call. Every stream must be ready. */
  decodeStreams: (recognizer: OnlineRecognizer, streams: readonly OnlineStream[]) => Promise<void>;
  dispose: () => Promise<void>;
}
/**
 * Decodes the ready streams of one recognizer until none is ready.
 * Each round runs the model once for all ready streams, so the streams share each model call.
 * Endpoints and resets stay with the caller.
 */
declare function decodeReadyStreams(recognizer: OnlineRecognizer, streams: readonly OnlineStream[], backend?: StreamingBackend): Promise<void>;
interface StreamingRecognizer {
  /** Mono PCM at the configured sample rate. Keep samples unchanged until this promise resolves. */
  accept: (samples: Float32Array) => Promise<string>;
  finish: () => Promise<string>;
  /**
   * The tokens of the text after the last `accept` or `finish`, in order. Empty for models without
   * timestamps, such as Paraformer.
   */
  tokens: () => readonly TimedToken[];
  /**
   * Samples taken so far at the configured sample rate, including the silence that `finish` adds.
   * Token times count from the first of them.
   */
  received: () => number;
  dispose: () => Promise<void>;
}
/**
 * One recording, using the existing Sherpa recognizer/stream bindings.
 * Calls are serialized so asynchronous inference cannot overlap finish or disposal.
 * The caller owns the module and model files; use a dedicated module for WebGPU.
 */
declare function createStreamingRecognizer(module: WebAssemblyModule, config?: OnlineRecognizerConfig & {
  type?: OnlineRecognizerType;
}, backend?: StreamingBackend): Promise<StreamingRecognizer>;
//#endregion
export { initSherpaOnnxOfflineMedAsrCtcModelConfig as $, OnlineRecognizerTypes as A, ZipformerCtcModelConfig as B, OfflineRecognizer as C, OnlineRecognizer as D, OnlineModelConfig as E, SimpleModelConfig as F, initSherpaOnnxHomophoneReplacerConfig as G, createOnlineRecognizerConfig as H, TdnnModelConfig as I, initSherpaOnnxOfflineDolphinModelConfig as J, initSherpaOnnxOfflineCanaryModelConfig as K, TransducerModelConfig as L, ParaformerModelConfig as M, RolloutOptions as N, OnlineRecognizerConfig as O, SenseVoiceModelConfig as P, initSherpaOnnxOfflineLMConfig as Q, WenetCtcModelConfig as R, OfflineQwen3AsrModelConfig as S, OfflineStream as T, freeConfig as U, createOnlineRecognizer as V, initSherpaOnnxFeatureConfig as W, initSherpaOnnxOfflineFireRedAsrModelConfig as X, initSherpaOnnxOfflineFireRedAsrCtcModelConfig as Y, initSherpaOnnxOfflineFunAsrNanoModelConfig as Z, OfflineLMConfig as _, initSherpaOnnxOnlineRecognizerConfig as _t, CanaryModelConfig as a, initSherpaOnnxOfflineQwen3AsrModelConfig as at, OfflineOmnilingualAsrCtcModelConfig as b, initSherpaOnnxOnlineZipformer2CtcModelConfig as bt, DolphinModelConfig as c, initSherpaOnnxOfflineTdnnModelConfig as ct, HomophoneReplacerConfig as d, initSherpaOnnxOfflineWhisperModelConfig as dt, initSherpaOnnxOfflineModelConfig as et, InitResult as f, initSherpaOnnxOfflineZipformerCtcModelConfig as ft, OfflineFunAsrNanoModelConfig as g, initSherpaOnnxOnlineParaformerModelConfig as gt, OfflineFireRedAsrCtcModelConfig as h, initSherpaOnnxOnlineNemoCtcModelConfig as ht, decodeReadyStreams as i, initSherpaOnnxOfflineParaformerModelConfig as it, OnlineStream as j, OnlineRecognizerType as k, FeatureConfig as l, initSherpaOnnxOfflineTransducerModelConfig as lt, OfflineCohereTranscribeModelConfig as m, initSherpaOnnxOnlineModelConfig as mt, StreamingRecognizer as n, initSherpaOnnxOfflineNemoEncDecCtcModelConfig as nt, Config as o, initSherpaOnnxOfflineRecognizerConfig as ot, MoonshineModelConfig as p, initSherpaOnnxOnlineCtcFstDecoderConfig as pt, initSherpaOnnxOfflineCohereTranscribeModelConfig as q, createStreamingRecognizer as r, initSherpaOnnxOfflineOmnilingualAsrCtcModelConfig as rt, CtcFstDecoderConfig as s, initSherpaOnnxOfflineSenseVoiceModelConfig as st, StreamingBackend as t, initSherpaOnnxOfflineMoonshineModelConfig as tt, FireRedAsrModelConfig as u, initSherpaOnnxOfflineWenetCtcModelConfig as ut, OfflineMedAsrCtcModelConfig as v, initSherpaOnnxOnlineToneCtcModelConfig as vt, OfflineRecognizerConfig as w, OfflineParaformerModelConfig as x, OfflineModelConfig as y, initSherpaOnnxOnlineTransducerModelConfig as yt, WhisperModelConfig as z };