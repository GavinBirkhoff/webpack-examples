const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './public/index.html'), // 指定模板文件路径
    filename: 'index.html' // 设置生成的内存页面的名称
  })],
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
