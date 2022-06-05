import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

export const spawnChildProcess = async (args) => {
  const nameFolder = "files";
  const nameFile = "script.js";

  const childProcess = spawn("node", [
    path.join(
      path.dirname(fileURLToPath(import.meta.url)),
      nameFolder,
      nameFile
    ),
    ...args.slice(2),
  ]);

  process.stdin.on("data", (data) => {
    console.log("it receive input from master process");
    childProcess.stdin.write(data);
  });

  childProcess.stdout.on("data", (data) => {
    process.stdout.write(`Received from the child process: ${data} \n ${data}`);
  });
};

spawnChildProcess(process.argv);
