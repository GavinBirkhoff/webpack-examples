const path = require("path");

module.exports = {
  entry: {
    app: "./main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](jquery)[\\/]/,
          name: "vendor",
        },
      },
    },
  },
};
