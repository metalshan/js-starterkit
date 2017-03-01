var devConfig = require("./webpack.config.js");

var prodConfig = devConfig;

prodConfig.output = {
    path: "dist",
    filename: "bundle.js"
};
delete prodConfig.devtool;

module.exports = prodConfig;