import webpack from "webpack";
import path from "path";

import { buildWebpack } from "./confid/build/buildWebpack";
import { BuildMode } from "./confid/build/types/types";

interface EvnVariables {
  mode: BuildMode;
  port: number;
  analyzer?: boolean;
}

export default (env: EvnVariables) => {
  const config: webpack.Configuration = buildWebpack({
    port: env.port,
    mode: env.mode,
    analyzer: env.analyzer,
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      output: path.resolve(__dirname, "build"),
      html: path.resolve(__dirname, "public", "index.html"),
      src: path.resolve(__dirname, "src"),
    },
  });

  return config;
};