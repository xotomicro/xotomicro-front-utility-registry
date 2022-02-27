const {EnvironmentPlugin} = require("webpack")
const {merge} = require("webpack-merge")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const commonConfig = require("./webpack.common")
var path = require("path")
const deps = require("../package.json").dependencies
require("dotenv").config({path: "node_modules/@xotomicro-utilities/src/.env"})
require("dotenv").config()

// eslint-disable-next-line no-undef
__webpack_base_uri__ = `http://${process.env.SERVICE_URL}:${process.env.SERVICE_PORT}`

const devConfig = {
    mode: "development",
    entry: path.resolve(process.cwd(), "src/index.ts"),

    devServer: {
        port: process.env.SERVICE_PORT,
        historyApiFallback: {
            index: "index.html",
        },
    },

    plugins: [
        new EnvironmentPlugin({
            ...process.env,
        }),
        new ModuleFederationPlugin({
            name: "rootshell",
            filename: "remoteEntry.js",
            remotes: {
                webevent: `webevent@http://${process.env.SERVICE_URL}:7071/remoteEntry.js`,
                weborder: `weborder@http://${process.env.SERVICE_URL}:7072/remoteEntry.js`,
                webproduct: `webproduct@http://${process.env.SERVICE_URL}:7073/remoteEntry.js`,
                webuser: `webuser@http://${process.env.SERVICE_URL}:7074/remoteEntry.js`,
                webauth: `webauth@http://${process.env.SERVICE_URL}:7075/remoteEntry.js`,
                designsystem: `designsystem@http://${process.env.SERVICE_URL}:7076/remoteEntry.js`,
            },
            shared: [
                {
                    ...deps,
                },
            ],
        }),
    ],
}

module.exports = merge(commonConfig, devConfig)
