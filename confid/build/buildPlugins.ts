import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins(options: BuildOptions): Configuration["plugins"] {
  const devPlugins = [new webpack.ProgressPlugin()];

  const prodPlugins = [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ];

  const somePlugins = [
    new HtmlWebpackPlugin({
      template: options.paths.html,
    }),

    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: options.analyzer ?? false,
    }),
  ];

  return [...somePlugins, ...devPlugins, ...prodPlugins].filter(Boolean);
}
