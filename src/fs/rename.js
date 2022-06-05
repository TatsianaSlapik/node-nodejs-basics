import * as fs from "node:fs";

export const rename = async () => {
  const pathRenameFile = "./src/fs/files/wrongFilename.txt";
  const newNameFile = "./src/fs/files/properFilename.md";

  fs.rename(pathRenameFile, newNameFile, (err) => {
    if (err) throw Error("FS operation failed");
    console.log("File renamed");
  });
};
rename();
