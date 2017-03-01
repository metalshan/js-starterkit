module.exports={
    entry: "./app/index.js",
    output: {
        filename: "bundle.js"
    },
    module:{
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["eslint-loader", "babel-loader"],
            }
        ]
    },
    devtool: "inline-source-map"
};