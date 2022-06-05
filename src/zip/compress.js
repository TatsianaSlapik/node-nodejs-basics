import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";

export const compress = async () => {
  const pathFileToCompress = "./src/zip/files/fileToCompress.txt";
  const pathFileGz = "./src/zip/files/archive.gz";

  const readStream = createReadStream(pathFileToCompress);
  const zip = createGzip();
  const writeStream = createWriteStream(pathFileGz);

  readStream.pipe(zip).pipe(writeStream);
  console.log("File in zip");
};
compress();
