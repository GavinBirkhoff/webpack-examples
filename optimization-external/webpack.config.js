const path = require("path");

module.exports = {
  entry: {
    app: "./main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  externals:{
    jquery: 'jQuery',
  }
};
