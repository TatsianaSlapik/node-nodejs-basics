import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";

export const decompress = async () => {
  const pathFileToDecompress = "./src/zip/files/fileToCompress.txt";
  const pathFileGz = "./src/zip/files/archive.gz";

  const fileContents = createReadStream(pathFileGz);
  const writeStream = createWriteStream(pathFileToDecompress);
  const unzip = createGunzip();

  fileContents.pipe(unzip).pipe(writeStream);
  console.log("File decompressed");
};
decompress();
