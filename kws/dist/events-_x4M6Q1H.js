import { defineInvokeEventa } from "@moeru/eventa";

//#region src/worker/events.ts
const initialize = defineInvokeEventa("sherpaw:kws:initialize");
const setKeywords = defineInvokeEventa("sherpaw:kws:keywords");
const processAudio = defineInvokeEventa("sherpaw:kws:audio");
const reset = defineInvokeEventa("sherpaw:kws:reset");

//#endregion
export { setKeywords as i, processAudio as n, reset as r, initialize as t };