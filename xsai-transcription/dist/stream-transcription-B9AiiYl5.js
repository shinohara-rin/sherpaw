import { errorMessageFrom } from "@moeru/std";

//#region src/stream-transcription/execute.ts
function createEventStreams() {
	const xsaiFullControllers = /* @__PURE__ */ new Set();
	const xsaiTextControllers = /* @__PURE__ */ new Set();
	const lastPartialByIndex = /* @__PURE__ */ new Map();
	let text = "";
	const createBranch = (controllers) => {
		let currentController = null;
		return new ReadableStream({
			start(controller) {
				currentController = controller;
				controllers.add(controller);
			},
			cancel() {
				if (currentController) {
					controllers.delete(currentController);
					currentController = null;
				}
			}
		});
	};
	const safeEnqueue = (controllers, payload) => {
		for (const controller of controllers) try {
			controller.enqueue(payload);
		} catch {
			controllers.delete(controller);
		}
	};
	const closeAll = () => {
		for (const controllers of [xsaiFullControllers, xsaiTextControllers]) {
			for (const controller of controllers) try {
				controller.close();
			} catch {}
			controllers.clear();
		}
	};
	const errorAll = (error) => {
		for (const controllers of [xsaiFullControllers, xsaiTextControllers]) {
			for (const controller of controllers) try {
				controller.error(error);
			} catch {}
			controllers.clear();
		}
	};
	const emitXsaiDelta = (delta) => {
		if (delta.length === 0) return;
		text += delta;
		safeEnqueue(xsaiTextControllers, delta);
		safeEnqueue(xsaiFullControllers, {
			type: "transcript.text.delta",
			delta
		});
	};
	const emitXsaiDone = () => {
		safeEnqueue(xsaiFullControllers, {
			type: "transcript.text.done",
			delta: ""
		});
	};
	const emitXsaiFromPartial = (event) => {
		const partial = event;
		if (typeof partial.index !== "number" || typeof partial.text !== "string") return;
		const previous = lastPartialByIndex.get(partial.index) ?? "";
		const delta = partial.text.startsWith(previous) ? partial.text.slice(previous.length) : partial.text;
		lastPartialByIndex.set(partial.index, partial.text);
		emitXsaiDelta(delta);
	};
	return {
		xsai: {
			fullStream: createBranch(xsaiFullControllers),
			getText: () => text,
			textStream: createBranch(xsaiTextControllers)
		},
		emit: (event) => {
			if (event.type === "transcription.partial") emitXsaiFromPartial(event);
			else if (event.type === "transcription.completed") emitXsaiDone();
		},
		errorAll,
		closeAll
	};
}
function getFinishText(result) {
	if (!result || typeof result !== "object") return "";
	const text = result.text;
	return typeof text === "string" ? text : "";
}
function streamTranscription(request) {
	const eventStreams = createEventStreams();
	let disposed = false;
	let responsePump = null;
	let commandChain = Promise.resolve();
	let resolveDone;
	let rejectDone;
	const done = new Promise((resolve, reject) => {
		resolveDone = resolve;
		rejectDone = reject;
	});
	let resolveText;
	let rejectText;
	const text = new Promise((resolve, reject) => {
		resolveText = resolve;
		rejectText = reject;
	});
	if (request.events) responsePump = (async () => {
		const reader = request.events.getReader();
		try {
			while (true) {
				const { done: streamDone, value } = await reader.read();
				if (streamDone) break;
				eventStreams.emit(value);
			}
		} catch (error) {
			const eventError = new Error(errorMessageFrom(error));
			eventStreams.errorAll(eventError);
			rejectDone(eventError);
			rejectText(eventError);
			throw error;
		}
	})();
	const runInCommandOrder = async (fn) => {
		const job = commandChain.then(fn);
		commandChain = job.then(() => void 0, () => void 0);
		return await job;
	};
	const runOrFail = async (fn) => {
		try {
			return await runInCommandOrder(fn);
		} catch (error) {
			const commandError = new Error(errorMessageFrom(error));
			eventStreams.errorAll(commandError);
			rejectDone(commandError);
			rejectText(commandError);
			throw commandError;
		}
	};
	const dispose = async () => {
		if (disposed) return;
		disposed = true;
		try {
			await runInCommandOrder(async () => await request.dispose());
		} finally {
			if (responsePump) await responsePump;
			eventStreams.closeAll();
		}
	};
	const input = new WritableStream({
		async start() {
			await runOrFail(async () => await request.load());
		},
		async write(chunk) {
			await runOrFail(async () => {
				await request.push({
					sampleRate: request.inputSampleRate,
					samples: Array.from(chunk)
				});
			});
		},
		async close() {
			try {
				const result = await runOrFail(async () => {
					return await request.finish();
				});
				resolveText(eventStreams.xsai.getText() || getFinishText(result));
				resolveDone(result);
			} finally {
				await dispose();
			}
		},
		async abort(reason) {
			const abortError = new Error(errorMessageFrom(reason));
			eventStreams.errorAll(abortError);
			rejectDone(abortError);
			rejectText(abortError);
			await dispose();
		}
	});
	return {
		dispose,
		done,
		fullStream: eventStreams.xsai.fullStream,
		input,
		text,
		textStream: eventStreams.xsai.textStream
	};
}

//#endregion
export { streamTranscription as t };