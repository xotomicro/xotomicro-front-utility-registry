const {merge} = require("webpack-merge")
const path = require("path")
require("dotenv").config({path: "node_modules/@xotomicro/utility/lib/global.env"})
require("dotenv").config()
const commonConfig = require("./webpack.common")
const {getMicrofrontendOutputConfig} = require("@xotomicro/utility/lib/config/webpack.shared")

// eslint-disable-next-line no-undef
__webpack_base_uri__ = `http://${process.env.SERVICE_URL}:${process.env.SERVICE_PORT}`

const prodConfig = {
    entry: path.resolve(process.cwd(), "src/App.tsx"),
    mode: "production",

    output: getMicrofrontendOutputConfig(),
}

module.exports = merge(commonConfig, prodConfig)
