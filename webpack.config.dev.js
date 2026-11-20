const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.config.js");

module.exports = merge(config, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  stats: {
    warnings: false,
  },
  output: {
    path: path.resolve(__dirname, "public"),
  },
});
