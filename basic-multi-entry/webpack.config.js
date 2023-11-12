const path = require("path");
module.exports = {
  entry: {
    main: "./main.js",
    vendor: "./vendor.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // filename: "[name].[contenthash].bundle.js", // production
    filename: "[name].bundle.js",
  },
};
