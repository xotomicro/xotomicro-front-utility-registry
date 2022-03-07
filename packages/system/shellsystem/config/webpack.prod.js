const {merge} = require("webpack-merge")
var path = require("path")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
require("dotenv").config({path: "node_modules/@xotomicro/utility/lib/global.env"})
require("dotenv").config()
const commonConfig = require("./webpack.common")
const {getMicrofrontendOutputConfig} = require("@xotomicro/utility/lib/config/webpack.shared")

// eslint-disable-next-line no-undef
__webpack_base_uri__ = `http://${process.env.SERVICE_URL}:${process.env.SERVICE_PORT}`

const prodConfig = {
    mode: "production",
    entry: path.resolve(process.cwd(), "src/index.ts"),

    output: getMicrofrontendOutputConfig(),

    plugins: [new CleanWebpackPlugin()],
}

module.exports = merge(commonConfig, prodConfig)
