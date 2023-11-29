import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";

export function buildLoader(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";
  return [
    {
      // test: /\.css$/i, // css
      test: /\.s[ac]ss$/i, // sass
      use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        // Creates `style` nodes from JS strings
        // "style-loader",
        // Translates CSS into CommonJS
        // "css-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: isDev
                ? "[path][name]__[local]"
                : "[hash:base64:8]",
            },
          },
        },
        // Compiles Sass to CSS
        "sass-loader",
      ],
    },
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },

    {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: "asset/resource",
    },

    {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
            svgoConfig: {
              plugins: [
                {
                  name: "convertColors",
                  params: {
                    currentColor: true,
                  },
                },
              ],
            },
          },
        },
      ],
    },
  ];
}
