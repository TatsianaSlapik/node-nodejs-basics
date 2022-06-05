import { createServer } from "node:http";
import { release, version } from "node:os";
import { path, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import a from "./files/a.json";
import b from "./files/b.json";
import c from "./files/c";

export let unknownObject = Math.random() > 0.5 ? a : b;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createServer((_, res) => {
  res.end("Request accepted");
});
