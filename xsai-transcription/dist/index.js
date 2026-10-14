import { t as streamTranscription } from "./stream-transcription-B9AiiYl5.js";
import { OnlineRecognizerTypes, createOnlineRecognizer, initASRModule, timedTokens } from "@sherpaw/asr";
import { loadData } from "@sherpaw/preloader";
import { createContext, defineEventa, defineInvoke, defineInvokeEventa } from "@moeru/eventa";
import { createContext as createContext$1 } from "@moeru/eventa/adapters/webworkers";
import { errorMessageFrom } from "@moeru/std";

//#region src/events.ts
const streamTranscriptionEvent = defineEventa("sherpaw:stream-transcription:event");
const streamTranscriptionInitInvoke = defineInvokeEventa("sherpaw:stream-transcription:init");
const streamTranscriptionPushInvoke = defineInvokeEventa("sherpaw:stream-transcription:push");
const streamTranscriptionFinishInvoke = defineInvokeEventa("sherpaw:stream-transcription:finish");
const streamTranscriptionResetInvoke = defineInvokeEventa("sherpaw:stream-transcription:reset");
const streamTranscriptionDisposeInvoke = defineInvokeEventa("sherpaw:stream-transcription:dispose");

//#endregion
//#region src/session.ts
const DEFAULT_SAMPLE_RATE = 16e3;
function extractText(result) {
	if (!result || typeof result !== "object") return "";
	const text = result.text;
	return typeof text === "string" ? text : "";
}
var StreamingTranscriptionSession = class {
	eventContext = createContext();
	recognizer;
	stream;
	sampleRate;
	sentenceIndex = 1;
	currentText = "";
	started = false;
	constructor(module, options) {
		this.recognizer = createOnlineRecognizer(module, options?.recognizerConfig);
		this.stream = this.recognizer.createStream();
		this.sampleRate = options?.sampleRate ?? DEFAULT_SAMPLE_RATE;
	}
	on(type, handler) {
		return this.eventContext.on(streamTranscriptionEvent, ({ body }) => {
			if (body.type === type) handler(body);
		});
	}
	pushAudio(samples, options) {
		const sampleRate = options?.sampleRate ?? this.sampleRate;
		this.stream.acceptWaveform(sampleRate, samples);
		while (this.recognizer.isReady(this.stream)) this.recognizer.decode(this.stream);
		const result = this.recognizer.getResult(this.stream);
		const text = extractText(result);
		const isEndpoint = this.recognizer.isEndpoint(this.stream);
		this.emitProgress(text, result);
		if (isEndpoint) {
			this.recognizer.reset(this.stream);
			this.currentText = "";
			this.sentenceIndex++;
		}
		return {
			text,
			isEndpoint
		};
	}
	finish() {
		this.stream.inputFinished();
		while (this.recognizer.isReady(this.stream)) this.recognizer.decode(this.stream);
		const result = this.recognizer.getResult(this.stream);
		const text = extractText(result);
		this.emitProgress(text, result);
		if (this.started) this.eventContext.emit(streamTranscriptionEvent, { type: "transcription.completed" });
		const sentenceCount = text.length > 0 ? this.sentenceIndex : Math.max(0, this.sentenceIndex - 1);
		this.reset();
		return {
			text,
			sentenceCount
		};
	}
	reset() {
		this.recognizer.reset(this.stream);
		this.currentText = "";
		this.sentenceIndex = 1;
		this.started = false;
	}
	dispose() {
		this.stream.free();
		this.recognizer.free();
		this.eventContext.off(streamTranscriptionEvent);
	}
	emitProgress(text, result) {
		if (!this.started) {
			this.started = true;
			this.eventContext.emit(streamTranscriptionEvent, { type: "transcription.started" });
		}
		if (text.length === 0 || text === this.currentText) return;
		this.eventContext.emit(streamTranscriptionEvent, {
			type: "transcription.partial",
			index: this.sentenceIndex,
			text,
			tokens: timedTokens(result)
		});
		this.currentText = text;
	}
};

//#endregion
//#region src/stream-transcription/resolve.ts
function isBlobLike(value) {
	return typeof Blob !== "undefined" && value instanceof Blob;
}
function isArrayBufferLike(value) {
	return value instanceof ArrayBuffer;
}
function isUint8Array(value) {
	return value instanceof Uint8Array;
}
function isRemoteUrlSource(value) {
	return !!value && typeof value === "object" && value.kind === "remote-url" && "url" in value;
}
function resolveFetch(fetcher) {
	const target = fetcher ?? globalThis.fetch;
	if (!target) throw new TypeError("fetch is required to resolve remote model sources.");
	return target;
}
async function fetchRemote(remote, fetcher) {
	const response = await resolveFetch(fetcher)(remote.url, remote.init);
	if (!response.ok) throw new Error(`Failed to fetch remote model source: ${response.status} ${response.statusText}`.trim());
	return response;
}
async function resolveBinary(source, fetcher) {
	if (isArrayBufferLike(source)) return source;
	if (isUint8Array(source)) {
		const copy = new Uint8Array(source.byteLength);
		copy.set(source);
		return copy.buffer;
	}
	if (isBlobLike(source)) return await source.arrayBuffer();
	if (isRemoteUrlSource(source)) return await (await fetchRemote(source, fetcher)).arrayBuffer();
	throw new TypeError("Unsupported binary source.");
}
async function resolveMetadata(source, fetcher) {
	if (typeof source === "string") return JSON.parse(source);
	if (isBlobLike(source)) {
		const text = await source.text();
		return JSON.parse(text);
	}
	if (isArrayBufferLike(source) || isUint8Array(source)) {
		const text = new TextDecoder().decode(await resolveBinary(source, fetcher));
		return JSON.parse(text);
	}
	if (isRemoteUrlSource(source)) {
		const text = await (await fetchRemote(source, fetcher)).text();
		return JSON.parse(text);
	}
	return source;
}

//#endregion
//#region src/core.ts
function asRemoteUrl(url, init) {
	return {
		kind: "remote-url",
		init,
		url
	};
}
function pcm16ToFloat32(input) {
	const pcm = input instanceof Int16Array ? input : new Int16Array(input);
	const output = new Float32Array(pcm.length);
	for (let i = 0; i < pcm.length; i++) output[i] = pcm[i] / 32768;
	return output;
}
async function initTranscriptionModule() {
	return await initASRModule();
}
async function loadModelFiles(module, sources) {
	loadData({
		module,
		metadata: await resolveMetadata(sources.metadata),
		data: await resolveBinary(sources.data)
	});
}
async function createStreamingTranscriptionSession(options) {
	const module = options.module ?? await initTranscriptionModule();
	await loadModelFiles(module, options);
	return {
		module,
		session: new StreamingTranscriptionSession(module, {
			recognizerConfig: options.recognizerConfig,
			sampleRate: options.sampleRate
		})
	};
}
function createSession(module, options) {
	return new StreamingTranscriptionSession(module, options);
}
async function transcribeOnce(options) {
	const { session } = await createStreamingTranscriptionSession(options);
	const sentences = [];
	try {
		const sampleRate = options.sampleRate ?? 16e3;
		const chunkSize = options.chunkSize ?? sampleRate / 10;
		const samples = options.audio instanceof Float32Array ? options.audio : pcm16ToFloat32(options.audio);
		for (let i = 0; i < samples.length; i += chunkSize) {
			const result = session.pushAudio(samples.subarray(i, i + chunkSize), { sampleRate });
			if (result.isEndpoint && result.text.length > 0) sentences.push(result.text);
		}
		const finished = session.finish();
		if (finished.text.length > 0) sentences.push(finished.text);
		return {
			text: sentences.join(" ").trim() || finished.text,
			sentences
		};
	} finally {
		session.dispose();
	}
}

//#endregion
//#region src/provider.ts
function createTransportResponse(payload) {
	return new Response(JSON.stringify(payload), { headers: { "content-type": "application/json" } });
}
function createEventChannel() {
	const controllers = /* @__PURE__ */ new Set();
	const stream = new ReadableStream({
		start(controller) {
			controllers.add(controller);
		},
		cancel() {
			const controller = controllers.values().next().value;
			if (controller) controllers.delete(controller);
		}
	});
	const emit = (event) => {
		for (const controller of controllers) try {
			controller.enqueue(event);
		} catch {
			controllers.delete(controller);
		}
	};
	const close = () => {
		for (const controller of controllers) try {
			controller.close();
		} catch {}
		controllers.clear();
	};
	return {
		stream,
		emit,
		close
	};
}
function isPushAudioInvokeRequest(value) {
	if (!value || typeof value !== "object") return false;
	const payload = value;
	if (!Array.isArray(payload.samples) || !payload.samples.every((sample) => typeof sample === "number")) return false;
	return payload.sampleRate === void 0 || typeof payload.sampleRate === "number";
}
async function parseInvokeRequest(init) {
	const raw = init?.body;
	if (!raw || typeof raw !== "string") throw new TypeError("Request body must be a JSON string.");
	const parsed = JSON.parse(raw);
	if (!parsed || typeof parsed !== "object" || !("invoke" in parsed)) throw new TypeError("Invalid stream transcription invoke request.");
	if (typeof parsed.invoke !== "string") throw new TypeError("Invalid stream transcription invoke request.");
	return parsed;
}
function resolveWorkerURL(options) {
	if (options.workerURL instanceof URL) return options.workerURL.toString();
	if (typeof options.workerURL === "string" && options.workerURL.length > 0) return options.workerURL;
	if (typeof options.baseURL === "string" && options.baseURL.length > 0) {
		const workerURL = new URL(options.baseURL).searchParams.get("worker-url");
		if (workerURL) return workerURL;
	}
	throw new TypeError("worker or workerURL is required");
}
function createSherpawProvider(options = {}) {
	return { speech(model) {
		let resolvedModelPromise = null;
		let workerRef = options.worker ?? null;
		let workerInvokes = null;
		let stopEventListener = null;
		let disposed = false;
		let loaded = false;
		let collectingFetchEvents = false;
		const eventQueue = [];
		const eventChannel = createEventChannel();
		let invokeChain = Promise.resolve();
		function runInInvokeOrder(fn) {
			const job = invokeChain.then(fn);
			invokeChain = job.then(() => void 0, () => void 0);
			return job;
		}
		function takeEvents() {
			return eventQueue.splice(0);
		}
		function teardownWorker() {
			eventQueue.length = 0;
			stopEventListener?.();
			stopEventListener = null;
			workerInvokes = null;
			loaded = false;
			if (workerRef && options.worker !== workerRef) workerRef.terminate();
			workerRef = options.worker ?? null;
		}
		function ensureWorkerInvokes() {
			if (workerInvokes) return workerInvokes;
			const worker = workerRef ?? new Worker(resolveWorkerURL(options), { type: "module" });
			workerRef = worker;
			const workerContext = createContext$1(worker).context;
			stopEventListener = workerContext.on(streamTranscriptionEvent, ({ body }) => {
				if (collectingFetchEvents) eventQueue.push(body);
				eventChannel.emit(body);
			});
			workerInvokes = {
				dispose: defineInvoke(workerContext, streamTranscriptionDisposeInvoke),
				finish: defineInvoke(workerContext, streamTranscriptionFinishInvoke),
				init: defineInvoke(workerContext, streamTranscriptionInitInvoke),
				push: defineInvoke(workerContext, streamTranscriptionPushInvoke),
				reset: defineInvoke(workerContext, streamTranscriptionResetInvoke)
			};
			return workerInvokes;
		}
		function getFetcher() {
			return options.fetch ?? globalThis.fetch;
		}
		async function resolveModel() {
			if (!resolvedModelPromise) resolvedModelPromise = Promise.all([resolveMetadata(model.metadata, getFetcher()), resolveBinary(model.data, getFetcher())]).then(([metadata, data]) => ({
				data,
				metadata,
				module: model.module,
				recognizerConfig: model.recognizerConfig,
				sampleRate: model.sampleRate
			}));
			return await resolvedModelPromise;
		}
		async function createInitPayload() {
			const resolvedModel = await resolveModel();
			return {
				...resolvedModel,
				data: resolvedModel.data.slice(0)
			};
		}
		async function loadWorker() {
			if (loaded) return;
			const invokes = ensureWorkerInvokes();
			const resolvedModel = await createInitPayload();
			await invokes.init(resolvedModel, { transfer: [resolvedModel.data] });
			loaded = true;
			disposed = false;
		}
		async function runInvoke(invoke) {
			const invokes = ensureWorkerInvokes();
			switch (invoke.invoke) {
				case streamTranscriptionInitInvoke.sendEvent.id: return await loadWorker();
				case streamTranscriptionPushInvoke.sendEvent.id:
					if (!isPushAudioInvokeRequest(invoke.payload)) throw new TypeError("Invalid push invoke payload.");
					return await invokes.push(invoke.payload);
				case streamTranscriptionFinishInvoke.sendEvent.id: return await invokes.finish();
				case streamTranscriptionResetInvoke.sendEvent.id: return await invokes.reset();
				case streamTranscriptionDisposeInvoke.sendEvent.id: return await invokes.dispose();
				default: throw new TypeError("Invalid stream transcription invoke ID.");
			}
		}
		const transportFetch = async (_input, init) => {
			try {
				const invoke = await parseInvokeRequest(init);
				eventQueue.length = 0;
				collectingFetchEvents = true;
				const payload = await runInvoke(invoke);
				collectingFetchEvents = false;
				return createTransportResponse({
					ok: true,
					payload,
					events: takeEvents()
				});
			} catch (error) {
				collectingFetchEvents = false;
				return createTransportResponse({
					ok: false,
					error: errorMessageFrom(error)
				});
			}
		};
		const transport = {
			baseURL: options.baseURL ?? "sherpaw://xsai-transcription/stream-transcription",
			fetch: transportFetch,
			inputSampleRate: model.sampleRate,
			events: eventChannel.stream,
			load: async () => {
				await runInInvokeOrder(async () => {
					await loadWorker();
				});
			},
			push: async (payload) => {
				return await runInInvokeOrder(async () => {
					return await ensureWorkerInvokes().push(payload);
				});
			},
			finish: async () => {
				return await runInInvokeOrder(async () => {
					return await ensureWorkerInvokes().finish();
				});
			},
			reset: async () => {
				await runInInvokeOrder(async () => {
					await ensureWorkerInvokes().reset();
				});
			},
			dispose: async () => {
				if (disposed) return;
				disposed = true;
				try {
					await runInInvokeOrder(async () => {
						if (!workerInvokes) return;
						await workerInvokes.dispose();
					});
				} finally {
					eventChannel.close();
					teardownWorker();
				}
			},
			loadSpeech: async () => {
				await transport.load();
			},
			terminateSpeech: () => {
				teardownWorker();
			}
		};
		return transport;
	} };
}

//#endregion
//#region src/recognizer.ts
function inferRecognizerType(metadata) {
	const filenames = (Array.isArray(metadata?.files) ? metadata.files : []).map((file) => String(file.filename ?? "").toLowerCase()).filter(Boolean);
	if (filenames.some((filename) => filename.endsWith("/joiner.onnx") || filename === "joiner.onnx")) return OnlineRecognizerTypes.Transducer;
	if (filenames.some((filename) => filename.endsWith("/nemo-ctc.onnx") || filename === "nemo-ctc.onnx")) return OnlineRecognizerTypes.NemoCTC;
	if (filenames.some((filename) => filename.endsWith("/tone-ctc.onnx") || filename === "tone-ctc.onnx")) return OnlineRecognizerTypes.ToneCTC;
	if (filenames.some((filename) => filename.endsWith("/decoder.onnx") || filename === "decoder.onnx")) return OnlineRecognizerTypes.Paraformer;
	if (filenames.some((filename) => filename.endsWith("/encoder.onnx") || filename === "encoder.onnx")) return OnlineRecognizerTypes.Zipformer2CTC;
	return null;
}

//#endregion
export { StreamingTranscriptionSession, asRemoteUrl, createSession, createSherpawProvider, createStreamingTranscriptionSession, inferRecognizerType, initTranscriptionModule, loadModelFiles, pcm16ToFloat32, streamTranscription, transcribeOnce };