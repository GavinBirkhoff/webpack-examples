const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
      filename: "index.html",
    }),
  ],
  devServer: {
    static: [
      {
        directory: path.join(__dirname, "assets"),
      },
      {
        directory: path.join(__dirname, "dist"),
      },
    ],
    port: 8080,
    hot: true,
    compress: true,
    client: {
      progress: true,
    },
    client: {
      reconnect: 5,
    },
  },
};
