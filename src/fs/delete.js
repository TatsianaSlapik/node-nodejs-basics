import { unlink } from "node:fs";

export const remove = async () => {
  const pathFileDelete = "./src/fs/files/fileToRemove.txt";

  return unlink(pathFileDelete, (err) => {
    if (err) throw Error("FS operation failed");
    console.log("File delete");
  });
};

remove();
