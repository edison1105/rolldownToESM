import { rolldown } from "rolldown";

const configs = [
  {
    input: "./packages/foo/src/foo.js",
    output: {
      file: "./packages/foo/dist/foo.js",
      format: "cjs",
      esModule: true,
    },
    external: ["bar"],
  },
  {
    input: "./packages/bar/src/bar.js",
    output: {
      file: "./packages/bar/dist/bar.js",
      format: "cjs",
      esModule: true,
    },
  },
];

async function run() {
  await Promise.all(
    configs.map((c) => {
      return rolldown(c).then((bundle) => {
        return bundle.write(c.output).then(() => {
          return c.output.file;
        });
      });
    })
  ).then((files) => {
    files.forEach((f) => {
      console.log("built: " + f);
    });
  });
}

run();
