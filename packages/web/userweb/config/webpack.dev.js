const {merge} = require("webpack-merge")
const commonConfig = require("./webpack.common")
const path = require("path")
require("dotenv").config({path: "node_modules/@xotomicro/utility/lib/global.env"})
require("dotenv").config()
const {getMicrofrontendDevServerConfig} = require("@xotomicro/utility/lib/config/webpack.shared")

// eslint-disable-next-line no-undef
__webpack_base_uri__ = `http://${process.env.SERVICE_URL}:${process.env.SERVICE_PORT}`

const devConfig = {
    entry: path.resolve(process.cwd(), "src/App.tsx"),
    mode: "development",

    devServer: getMicrofrontendDevServerConfig(),
}

module.exports = merge(commonConfig, devConfig)
