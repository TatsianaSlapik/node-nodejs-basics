import { Transform } from "node:stream";

export const transform = async () => {
  const transformText = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });
  process.stdin.pipe(transformText).pipe(process.stdout);
};
transform();
