import { defineConfig } from "rolldown";

export default defineConfig({
  input: "src/main.ts",
  platform: "node",
  treeshake: true,
  output: {
    file: "dist/server.js",
    format: "esm",
    minify: true,
    codeSplitting: false,
  },
});
