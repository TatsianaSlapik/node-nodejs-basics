import { createReadStream } from "node:fs";

export const read = async () => {
  const pathFileToRead = "./src/streams/files/fileToRead.txt";

  createReadStream(pathFileToRead).pipe(process.stdout);
};
read();
