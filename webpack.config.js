const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const IS_DEVELOPMENT = process.env.NODE_ENV === "dev";

const dirApp = path.join(__dirname, "app");
const dirAssets = path.join(__dirname, "assets");
const dirFonts = path.join(__dirname, "fonts");
const dirStyles = path.join(__dirname, "styles");
const dirNode = "node_modules";

module.exports = {
  entry: [path.join(dirApp, "index.js"), path.join(dirStyles, "index.scss")],
  resolve: {
    modules: [dirApp, dirAssets, dirFonts, dirStyles, dirNode],
  },
  ignoreWarnings: [
    /sass-loader/,
    /Dart Sass/,
    /Deprecation/,
    /legacy JS API/,
    /repetitive deprecation warnings/,
  ],
  stats: {
    warnings: false,
  },
  performance: {
    hints: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEVELOPMENT,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./assets",
          to: "",
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
            options: {
              api: "modern",
              sassOptions: {
                quietDeps: true,
                silenceDeprecations: [
                  "legacy-js-api",
                  "import",
                  "global-builtin",
                  "color-functions",
                  "if-function",
                  "abs-percent",
                  "slash-div",
                ],
                logger: {
                  warn(message, options) {},
                  debug(message) {},
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|woff2?|fnt|webp)$/,
        loader: "file-loader",
        options: {
          name(file) {
            return "[hash].[ext]";
          },
        },
      },
      {
        test: /\.(glsl|frag|vert)$/,
        loader: "raw-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(glsl|frag|vert)$/,
        loader: "glslify-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
