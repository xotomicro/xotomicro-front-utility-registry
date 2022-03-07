const {merge} = require("webpack-merge")
var path = require("path")
require("dotenv").config({path: "node_modules/@xotomicro/utility/lib/global.env"})
require("dotenv").config()
const commonConfig = require("./webpack.common")
const {getMicrofrontendDevServerConfig} = require("@xotomicro/utility/lib/config/webpack.shared")

// eslint-disable-next-line no-undef
__webpack_base_uri__ = `http://${process.env.SERVICE_URL}:${process.env.SERVICE_PORT}`

const devConfig = {
    mode: "development",
    entry: path.resolve(process.cwd(), "src/index.ts"),

    devServer: getMicrofrontendDevServerConfig(),
}

module.exports = merge(commonConfig, devConfig)
