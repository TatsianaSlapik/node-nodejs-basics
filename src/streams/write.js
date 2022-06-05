import { createWriteStream } from "node:fs";

export const write = async () => {
  const pathFileToWrite = "./src/streams/files/fileToWrite.txt";

  process.stdin.pipe(createWriteStream(pathFileToWrite));
};
write();
