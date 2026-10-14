import { i as setKeywords, n as processAudio, r as reset, t as initialize } from "./events-_x4M6Q1H.js";
import { n as createKeywordSpotter, t as initKWSModule } from "./wasm-CP0rq9dg.js";
import { defineInvokeHandler } from "@moeru/eventa";
import { createContext } from "@moeru/eventa/adapters/worker-threads/worker";
import { loadData } from "@sherpaw/preloader";

//#region src/worker/runtime.ts
/** Loads one detector and preserves invocation order across Eventa handlers. */
function registerWorkerHandlers(context$1) {
	let spotter;
	let queue = Promise.resolve();
	function enqueue(operation) {
		const result = queue.then(operation);
		queue = result.then(() => {}, () => {});
		return result;
	}
	/** Triggering workflow: events.initialize -> defineInvokeHandler -> enqueue -> initialize mounts the model and creates the SDK detector. */
	async function initialize$1(config) {
		const module = await initKWSModule();
		const model = config.model.paths ?? {
			encoder: "encoder.onnx",
			decoder: "decoder.onnx",
			joiner: "joiner.onnx",
			tokens: "tokens.txt"
		};
		loadData({
			module,
			data: config.model.data,
			metadata: config.model.metadata
		});
		spotter = createKeywordSpotter(module, {
			model,
			keywords: config.keywords,
			maxActivePaths: config.maxActivePaths
		});
	}
	defineInvokeHandler(context$1, initialize, (config) => enqueue(() => initialize$1(config)));
	/** Triggering workflow: events.setKeywords -> defineInvokeHandler -> enqueue -> spotter.setKeywords replaces the vocabulary and search settings. */
	defineInvokeHandler(context$1, setKeywords, ({ keywords, options }) => enqueue(() => spotter.setKeywords(keywords, options)));
	/** Triggering workflow: events.processAudio -> defineInvokeHandler -> enqueue -> spotter.processAudio -> detections returned by Eventa. */
	defineInvokeHandler(context$1, processAudio, ({ samples, sampleRate }) => enqueue(() => spotter.processAudio(samples, sampleRate)));
	/** Triggering workflow: events.reset -> defineInvokeHandler -> enqueue -> spotter.reset starts a fresh audio stream. */
	defineInvokeHandler(context$1, reset, () => enqueue(() => spotter.reset()));
}

//#endregion
//#region src/node/entry.ts
const { context } = createContext();
registerWorkerHandlers(context);

//#endregion
export {  };