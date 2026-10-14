//#region ../../node_modules/.pnpm/nanoid@5.1.6/node_modules/nanoid/non-secure/index.js
let urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let nanoid = (size = 21) => {
	let id = "";
	let i = size | 0;
	while (i--) id += urlAlphabet[Math.random() * 64 | 0];
	return id;
};

//#endregion
//#region src/index.ts
function dataToBytes(data) {
	if (data instanceof Uint8Array) return data;
	if (data instanceof ArrayBuffer) return new Uint8Array(data);
	return new TextEncoder().encode(String(data));
}
function loadData(options) {
	const { module, metadata, data, parent = "/", dependencyId = `load_data_${nanoid()}` } = options;
	function createDataFiles() {
		const bytes = dataToBytes(data);
		for (const { filename, start, end } of metadata.files) {
			const data$1 = bytes.subarray(start, end);
			module.FS_createDataFile(parent, filename, data$1, true, true, true);
		}
		module.removeRunDependency(dependencyId);
	}
	module.addRunDependency(dependencyId);
	if (module.calledRun) createDataFiles();
	else {
		if (!module.preRun) module.preRun = [];
		module.preRun.push(createDataFiles);
	}
}
/**
* Load "virtual" data without the need to pre-pack it with emsdk.
*/
function loadVirtualData(options) {
	const { module, virtualData, parent = "/", dependencyId = `load_virtual_data_${nanoid()}` } = options;
	function createDataFiles() {
		for (const [filename, data] of Object.entries(virtualData)) module.FS_createDataFile(parent, filename, dataToBytes(data), true, true, true);
		module.removeRunDependency(dependencyId);
	}
	module.addRunDependency(dependencyId);
	if (module.calledRun) createDataFiles();
	else {
		if (!module.preRun) module.preRun = [];
		module.preRun.push(createDataFiles);
	}
	return Object.keys(virtualData).reduce((filenames, filename) => {
		filenames[filename] = filename;
		return filenames;
	}, {});
}

//#endregion
export { loadData, loadVirtualData };