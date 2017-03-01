var devConfig = require("./webpack.config.js");

var prodConfig = devConfig;

prodConfig.output = {
    path: "dist",
    filename: "bundle.js"
}

module.exports = prodConfig;