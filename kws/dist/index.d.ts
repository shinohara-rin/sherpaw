import { a as KeywordMatch, c as KeywordUpdateOptions, i as KeywordEntry, o as KeywordSpotter, r as KWSModelPack, s as KeywordSpotterConfig, t as Detection } from "./types-CJJaz_NF.js";

//#region src/web/worker.d.ts

/**
 * Creates an isolated detector. A supplied Worker entry may import @sherpaw/kws/worker.
 * Ownership of that Worker transfers to this detector, including termination on failure/disposal.
 */
declare function createKeywordSpotter(config: KeywordSpotterConfig, options?: {
  worker?: Worker;
}): Promise<KeywordSpotter>;
//#endregion
export { type Detection, type KWSModelPack, type KeywordEntry, type KeywordMatch, type KeywordSpotter, type KeywordSpotterConfig, type KeywordUpdateOptions, createKeywordSpotter };