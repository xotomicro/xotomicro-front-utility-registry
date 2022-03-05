const {merge} = require("webpack-merge")
const path = require("path")
const commonConfig = require("./webpack.common")

__webpack_base_uri__ = "http://localhost:8080"

const devConfig = {
    mode: "development",

    entry: "./src/start.ts",
    output: {
        path: path.resolve(process.cwd(), "dist"),
        filename: "index.js",
    },

    devServer: {
        port: process.env.SERVICE_PORT,
        historyApiFallback: {
            index: "index.html",
        },
    },

    plugins: [],
}

module.exports = merge(commonConfig, devConfig)
