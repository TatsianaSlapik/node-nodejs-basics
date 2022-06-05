import { access, readdir, copyFile, mkdir } from "node:fs";

export const copy = async () => {
  const pathCopyFolder = "./src/fs/files";
  const pathAddedFolder = "./src/fs/files_copy";

  access(pathCopyFolder, (err) => {
    if (err) throw Error("FS operation failed");
  });

  access(pathAddedFolder, (err) => {
    if (!err) throw Error("FS operation failed");
  });

  mkdir(pathAddedFolder, { recursive: true }, () => {
    readdir(pathCopyFolder, (err, content) => {
      content.forEach((element) => {
        copyFile(
          `${pathCopyFolder}/${element}`,
          `${pathAddedFolder}/${element}`,
          (err) => {
            if (err) throw Error("FS operation failed");
          }
        );
      });
      console.log("Folder was copy");
    });
  });
};

copy();
