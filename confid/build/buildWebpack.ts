import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildDevServer } from "./buildDevServer";
import { buildPlugins } from "./buildPlugins";
import { buildLoader } from "./buildLoaders";
import { buildResolve } from "./buildResolve";
import { BuildOptions } from "./types/types";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;
  const isDev = mode === "development";

  return {
    mode: mode ?? "development",

    entry: paths.entry,

    output: {
      filename: "[name].[contenthash].js",
      path: paths.output,
      clean: true,
    },

    devtool: isDev ? "eval-cheap-module-source-map" : "source-map",

    devServer: isDev ? buildDevServer(options) : undefined,

    plugins: buildPlugins(options),

    module: {
      rules: buildLoader(options),
    },

    resolve: buildResolve(options),

    optimization: {
      runtimeChunk: "single",
    },
  };
}
