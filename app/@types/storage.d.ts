declare module "Storage" {
    /**
     * Compacts the storage to minimize fragmentation.
     */
    function compact(): void;
  
    /**
     * Erases the file with the specified name.
     * @param name - The name of the file to erase.
     */
    function erase(name: string): void;
  
    /**
     * Erases all files in the storage.
     */
    function eraseAll(): void;
  
    /**
     * Gets the amount of free storage space in bytes.
     * @returns The amount of free storage space in bytes.
     */
    function getFree(): number;
  
    /**
     * Gets statistics about the storage.
     * @returns An object containing storage statistics.
     */
    function getStats(): StorageStats;
  
    /**
     * Computes the hash value of files matching the specified regular expression.
     * @param regex - The regular expression to match file names.
     * @returns The hash value of matched files.
     */
    function hash(regex: RegExp): number;
  
    /**
     * Lists files matching the specified regular expression and optional filter function.
     * @param regex - The regular expression to match file names.
     * @param filter - A filter function to further refine the file list (optional).
     * @returns An array of matched file names.
     */
    function list(regex: RegExp, filter?: (name: string) => boolean): string[];
  
    /**
     * Opens a storage file in the specified mode.
     * @param name - The name of the file to open.
     * @param mode - The mode to open the file in ("r" for reading, "w" for writing, "a" for appending).
     * @returns A `StorageFile` instance representing the opened file.
     */
    function open(name: string, mode: "r" | "w" | "a"): StorageFile;
  
    /**
     * Optimizes the storage for better performance.
     */
    function optimise(): void;
  
    /**
     * Reads data from a file at the specified offset and length.
     * @param name - The name of the file to read from.
     * @param offset - The offset within the file to start reading from.
     * @param length - The number of bytes to read.
     * @returns The read data as a string.
     */
    function read(name: string, offset: number, length: number): string;
  
    /**
     * Reads the contents of a file as an `ArrayBuffer`.
     * @param name - The name of the file to read.
     * @returns The contents of the file as an `ArrayBuffer`.
     */
    function readArrayBuffer(name: string): ArrayBuffer;
  
    /**
     * Reads the contents of a file and parses it as JSON.
     * @param name - The name of the file to read and parse.
     * @param noExceptions - Whether to suppress exceptions if the file is not valid JSON (optional, default: `false`).
     * @returns The parsed JSON object.
     */
    function readJSON(name: string, noExceptions?: boolean): any;
  
    /**
     * Writes data to a file at the specified offset and size.
     * @param name - The name of the file to write to.
     * @param data - The data to write.
     * @param offset - The offset within the file to start writing to (optional, default: `0`).
     * @param size - The number of bytes to write (optional, default: write the entire `data`).
     */
    function write(name: string, data: string, offset?: number, size?: number): void;

    /**
     * Writes an object as JSON to a file.
     * @param name - The name of the file to write to.
     * @param data - The object to write as JSON.
     */
    function writeJSON(name: string, data: any): void;
  
    /**
     * Represents statistics about the storage.
     */
    interface StorageStats {
      total: number;
      used: number;
    }
  
    /**
     * Represents a storage file opened with `Storage.open()`.
     */
    interface StorageFile {
      /**
       * Appends data to the file.
       * @param data - The data to append.
       */
      write(data: string): void;
  
      /**
       * Reads a line from the file.
       * @returns The read line as a string.
       */
      readline(): string;
  
      /**
       * Closes the file.
       */
      close(): void;
    }
}  
