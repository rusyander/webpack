import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import ReactRefreshTypeScript from "react-refresh-typescript";
import { buildBabelLoader } from "./babel/buildBabelLoader";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const svgrLoader = {
    test: /\.svg$/i,
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
  };

  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
      },
    },
  };

  const scssLoader = {
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
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };
  // {
  //     test: /\.s[ac]ss$/i,
  //     use: [
  //         // Creates `style` nodes from JS strings
  //         isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
  //         // Translates CSS into CommonJS
  //         cssLoaderWithModules,
  //         // Compiles Sass to CSS
  //         "sass-loader",
  //     ],
  // }

  const tsLoader = {
    // ts-loader умеет работать с JSX
    // Если б мы не использовали тайпскрипт: нужен был бы babel-loader
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: [
      {
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
        },
      },
    ],
  };

  // const babelLoader = buildBabelLoader(options);

  return [
    assetLoader,
    scssLoader,
    tsLoader,
    // babelLoader,
    svgrLoader,
  ];
}
