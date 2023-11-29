import { BuildOptions } from "./types/types";

export function buildDevServer(options: BuildOptions) {
  return {
    port: options.port ?? 8888,
    open: false,
    // если раздавать статику через nginx То надо делать проксирование на Index.html
    historyApiFallback: true,
    hot: true,
  };
}
