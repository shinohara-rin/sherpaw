import "./events-_x4M6Q1H.js";
import { t as createWorkerSpotter } from "./client-Rmr6GOcr.js";
import { createContext } from "@moeru/eventa/adapters/worker-threads";
import { Worker } from "node:worker_threads";

//#region src/node/index.ts
/** Node counterpart of the browser factory; model loading and inference run in a worker thread. */
async function createKeywordSpotter(config) {
	const worker = new Worker(new URL("./node-worker.js", import.meta.url));
	const { context } = createContext(worker);
	/** Triggering workflow: worker exit -> onExit -> context.abort rejects operations if the thread stops unexpectedly. */
	function onExit(code) {
		context.abort(/* @__PURE__ */ new Error(`Keyword Worker exited unexpectedly (${code})`));
	}
	worker.once("exit", onExit);
	return createWorkerSpotter(context, config, () => {
		worker.off("exit", onExit);
		worker.terminate();
	});
}

//#endregion
export { createKeywordSpotter };