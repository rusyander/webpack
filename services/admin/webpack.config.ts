import webpack from "webpack";
import path from "path";
import packageJson from "./package.json";

import { buildWebpack, BuildMode, BuildPlatform } from "@packages/build-config";

interface EvnVariables {
  mode: BuildMode;
  port: number;
  analyzer?: boolean;
  platform?: BuildPlatform;
}

export default (env: EvnVariables) => {
  const config: webpack.Configuration = buildWebpack({
    port: env.port || 8002,
    mode: env.mode,
    analyzer: env.analyzer,
    platform: env.platform ?? "desktop",
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      output: path.resolve(__dirname, "build"),
      html: path.resolve(__dirname, "public", "index.html"),
      public: path.resolve(__dirname, "public"),
      src: path.resolve(__dirname, "src"),
    },
  });

  config?.plugins?.push(
    new webpack.container.ModuleFederationPlugin({
      name: "admin",
      filename: "remoteEntry.js",
      exposes: {
        "./Router": "./src/router/Router.tsx",
      },
      shared: {
        ...packageJson.dependencies,
        react: {
          eager: true,
          requiredVersion: packageJson.dependencies["react"],
        },
        "react-router-dom": {
          eager: true,
          requiredVersion: packageJson.dependencies["react-router-dom"],
        },
        "react-dom": {
          eager: true,
          requiredVersion: packageJson.dependencies["react-dom"],
        },
      },
    })
  );

  return config;
};
