import { BuildOptions } from "../types/types";
import { removeDataTestIdBabelPlugin } from "./removeDataTestIdBabelPlugin";

export function buildBabelLoader(options: BuildOptions) {
  const isDev = options.mode === "development";
  const isProd = options.mode === "production";
  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-typescript",
          "@babel/preset-flow",
          [
            "@babel/preset-react",
            {
              runtime: isDev ? "automatic" : "classic",
            },
          ],
        ],
        plugins: [
          isProd && [removeDataTestIdBabelPlugin, { props: ["data-testid"] }],
        ],
      },
    },
  };
}
