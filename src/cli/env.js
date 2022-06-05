import { env } from "node:process";

export const parseEnv = () => {
  const variablesPrefix = "RSS_";

  return Object.keys(env)
    .filter((val) => val.startsWith(variablesPrefix))
    .forEach((val) => {
      console.log(`${val}=${process.env[val]};`);
    });
};
parseEnv();
