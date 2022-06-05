import { createHash } from "node:crypto";

export const calculateHash = async () => {
  const pathHashFile = "src/hash/files/fileToCalculateHashFor.txt";
  const typeHash = "sha256";
  const typeReturned = "hex";

  return console.log(
    createHash(typeHash).update(pathHashFile).digest(typeReturned)
  );
};
calculateHash();
