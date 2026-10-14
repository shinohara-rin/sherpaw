import { i as setKeywords, n as processAudio, r as reset, t as initialize } from "./events-_x4M6Q1H.js";
import { defineInvoke } from "@moeru/eventa";

//#region src/worker/client.ts
/** Shares detector lifetime and audio backpressure across Eventa's browser and Node adapters. */
async function createWorkerSpotter(context, config, terminate) {
	const { signal, maxPendingAudio = 4 } = config;
	const initialize$1 = defineInvoke(context, initialize);
	const setKeywords$1 = defineInvoke(context, setKeywords);
	const processAudio$1 = defineInvoke(context, processAudio);
	const reset$1 = defineInvoke(context, reset);
	let audioPending = 0;
	/** Triggering workflow: Eventa context abort (dispose / Worker failure / config.signal) -> release -> terminate. */
	function release() {
		signal?.removeEventListener("abort", abort);
		terminate();
	}
	/** Triggering workflow: config.signal abort -> abort -> context.abort cancels initialization and queued work. */
	function abort() {
		context.abort(signal?.reason instanceof Error ? signal.reason : new DOMException("Keyword spotter aborted", "AbortError"));
	}
	/** Triggering workflow: public dispose / initialization failure -> dispose -> context.abort rejects pending invokes and releases the Worker. */
	function dispose() {
		context.abort(/* @__PURE__ */ new Error("Keyword spotter has been disposed"));
	}
	context.signal.addEventListener("abort", release, { once: true });
	signal?.addEventListener("abort", abort, { once: true });
	try {
		signal?.throwIfAborted();
		if (!Number.isSafeInteger(maxPendingAudio) || maxPendingAudio < 1) throw new RangeError("maxPendingAudio must be a positive safe integer");
		const source = config.model.data;
		if (!(source instanceof ArrayBuffer) && !(source instanceof Uint8Array)) throw new TypeError("Model data must be an ArrayBuffer or Uint8Array");
		const data = new Uint8Array(source instanceof ArrayBuffer ? new Uint8Array(source) : source);
		await initialize$1({
			model: {
				...config.model,
				data
			},
			keywords: config.keywords,
			maxActivePaths: config.maxActivePaths
		}, { transfer: [data.buffer] });
		context.signal.throwIfAborted();
	} catch (error) {
		dispose();
		throw error;
	}
	return {
		setKeywords: (keywords, options) => setKeywords$1({
			keywords,
			options
		}),
		async processAudio(samples, sampleRate) {
			context.signal.throwIfAborted();
			if (!(samples instanceof Float32Array)) throw new TypeError("samples must be a Float32Array");
			if (audioPending >= maxPendingAudio) throw new Error("Keyword spotter audio queue is full");
			audioPending++;
			try {
				const copy = new Float32Array(samples);
				return await processAudio$1({
					samples: copy,
					sampleRate
				}, { transfer: [copy.buffer] });
			} finally {
				audioPending--;
			}
		},
		reset: reset$1,
		dispose
	};
}

//#endregion
export { createWorkerSpotter as t };