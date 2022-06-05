import { access, writeFile } from "node:fs";

export const create = async () => {
  const pathFresh = "./src/fs/files/fresh.txt";
  const textInFile = "I am fresh and young";

  return access(pathFresh, function (err) {
    if (err) {
      writeFile(pathFresh, textInFile, () => {
        console.log("File is created.");
      });
    } else {
      throw Error("FS operation failed");
    }
  });
};

create();
