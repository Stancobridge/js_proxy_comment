const path = require("path");


module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, 'bundle')
  },
  mode: "development"
}