import { BuildOptions } from "./types/types";

export function buildDevServer(options: BuildOptions) {
  return {
    static: "./build",
    compress: true,
    port: options.port ?? 8888,
    open: false,
    historyApiFallback: true,
  };
}
