import { a as KeywordMatch, c as KeywordUpdateOptions, i as KeywordEntry, o as KeywordSpotter, r as KWSModelPack, s as KeywordSpotterConfig, t as Detection } from "./types-CJJaz_NF.js";

//#region src/node/index.d.ts
/** Node counterpart of the browser factory; model loading and inference run in a worker thread. */
declare function createKeywordSpotter(config: KeywordSpotterConfig): Promise<KeywordSpotter>;
//#endregion
export { type Detection, type KWSModelPack, type KeywordEntry, type KeywordMatch, type KeywordSpotter, type KeywordSpotterConfig, type KeywordUpdateOptions, createKeywordSpotter };