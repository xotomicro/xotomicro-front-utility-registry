const {EnvironmentPlugin} = require("webpack")
const {merge} = require("webpack-merge")
var path = require("path")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const commonConfig = require("./webpack.common")
const deps = require("../package.json").dependencies
require("dotenv").config({path: "node_modules/@xotomicro/utility/lib/global.env"})
require("dotenv").config()

// eslint-disable-next-line no-undef
__webpack_base_uri__ = `http://${process.env.SERVICE_URL}:${process.env.SERVICE_PORT}`

const prodConfig = {
    mode: "production",
    entry: path.resolve(process.cwd(), "src/index.ts"),

    output: {
        publicPath: "auto",
        path: path.resolve(process.cwd(), "build"),
        filename: "[name].[contenthash].js",
    },

    plugins: [
        new EnvironmentPlugin({
            ...process.env,
        }),
        new CleanWebpackPlugin(),
        new ModuleFederationPlugin({
            name: "shellsystem",
            filename: "remoteEntry.js",
            remotes: {
                eventweb: `eventweb@http://${process.env.SERVICE_URL}:7071/remoteEntry.js`,
                orderweb: `orderweb@http://${process.env.SERVICE_URL}:7072/remoteEntry.js`,
                productweb: `productweb@http://${process.env.SERVICE_URL}:7073/remoteEntry.js`,
                userweb: `userweb@http://${process.env.SERVICE_URL}:7074/remoteEntry.js`,
                authweb: `authweb@http://${process.env.SERVICE_URL}:7075/remoteEntry.js`,
                hooksystem: `hooksystem@http://${process.env.SERVICE_URL}:7076/remoteEntry.js`,
            },
            shared: [
                {
                    ...deps,
                },
            ],
        }),
    ],
}

module.exports = merge(commonConfig, prodConfig)
