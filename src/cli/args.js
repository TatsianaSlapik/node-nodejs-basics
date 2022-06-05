import { argv } from "node:process";

export const parseArgs = () => {
  const chunkSize = 2;
  for (let i = 0; i < argv.length; i += chunkSize) {
    const chunk = argv.slice(i, i + chunkSize);
    console.log(chunk[0].replace("--", "") + " is " + chunk[1]);
  }
};

parseArgs();
