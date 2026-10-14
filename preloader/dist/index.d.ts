import { WebAssemblyModule } from "@sherpaw/shared";

//#region src/types.d.ts
type Filename = string;
type Data = ArrayBuffer | Uint8Array | string;
interface FileMetadata {
  filename: string;
  start: number;
  end: number;
}
interface DataMetadata {
  files: FileMetadata[];
  remote_package_size: number;
}
interface BaseLoadDataOptions {
  module: WebAssemblyModule;
  parent?: string | FS.FSNode;
  dependencyId?: string;
}
interface LoadDataOptions extends BaseLoadDataOptions {
  metadata: DataMetadata;
  data: Data;
}
interface LoadVirtualDataOptions<T extends Record<Filename, Data> = Record<Filename, Data>> extends BaseLoadDataOptions {
  /**
   * - **Filename**: Filename or relative path under `parent` (e.g. `model.onnx` or `subdir/model.onnx`)
   * - **Data**: Content of the file. Can be ArrayBuffer, Uint8Array or a string (will be UTF-8 encoded).
   */
  virtualData: T;
}
//#endregion
//#region src/index.d.ts
declare function loadData(options: LoadDataOptions): void;
/**
 * Load "virtual" data without the need to pre-pack it with emsdk.
 */
declare function loadVirtualData<T extends Record<Filename, Data> = Record<Filename, Data>>(options: LoadVirtualDataOptions<T>): Record<keyof T, keyof T>;
//#endregion
export { Data, DataMetadata, FileMetadata, Filename, LoadDataOptions, LoadVirtualDataOptions, loadData, loadVirtualData };