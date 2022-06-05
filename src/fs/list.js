import { readdir } from "node:fs";

export const list = async () => {
  const pathFolder = "./src/fs/files";

  return readdir(pathFolder, (err, content) => {
    if (err) throw Error("FS operation failed");
    console.log(content);
  });
};
list();
