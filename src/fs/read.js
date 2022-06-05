import { readFile } from "node:fs";

export const read = async () => {
  const pathReadFile = "./src/fs/files/fileToRead.txt";
  const encoding = "utf8";

  return readFile(pathReadFile, encoding, (err, content) => {
    if (err) throw Error("FS operation failed");
    console.log(content);
  });
};
read();
