import "./events-_x4M6Q1H.js";
import { t as createWorkerSpotter } from "./client-Rmr6GOcr.js";
import { createContext } from "@moeru/eventa/adapters/webworkers";

//#region src/web/worker.ts
/**
* Creates an isolated detector. A supplied Worker entry may import @sherpaw/kws/worker.
* Ownership of that Worker transfers to this detector, including termination on failure/disposal.
*/
async function createKeywordSpotter(config, options = {}) {
	const worker = options.worker ?? new Worker(new URL("./worker-entry.js", import.meta.url), { type: "module" });
	const { context } = createContext(worker);
	return createWorkerSpotter(context, config, () => {
		worker.onmessage = null;
		worker.onerror = null;
		worker.onmessageerror = null;
		worker.terminate();
	});
}

//#endregion
export { createKeywordSpotter };