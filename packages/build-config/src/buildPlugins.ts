import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { DefinePlugin } from "webpack";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import path from "path";

export function buildPlugins(options: BuildOptions): Configuration["plugins"] {
  const devPlugins = [
    new webpack.ProgressPlugin(),
    // new ForkTsCheckerWebpackPlugin(),
    new ReactRefreshWebpackPlugin(),
  ];

  const prodPlugins = [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),

    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(options.paths.public, "locales"),
          to: path.resolve(options.paths.output, "locales"),
        },
      ],
    }),
  ];

  const somePlugins = [
    new HtmlWebpackPlugin({
      template: options.paths.html,
      favicon: path.resolve(options.paths.public, "react.svg"),
      publicPath: "/",
    }),

    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: options.analyzer ?? false,
    }),

    new DefinePlugin({
      PLATFORM: JSON.stringify(options.platform),
      ENV: JSON.stringify(options.mode),
    }),
  ];

  return [...somePlugins, ...devPlugins, ...prodPlugins].filter(Boolean);
}
