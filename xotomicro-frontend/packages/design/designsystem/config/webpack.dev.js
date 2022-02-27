const {EnvironmentPlugin} = require("webpack")
const {merge} = require("webpack-merge")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const commonConfig = require("./webpack.common")
const deps = require("../package.json").dependencies
require("dotenv").config({path: "node_modules/@xotomicro-utilities/src/.env"})
require("dotenv").config()

// eslint-disable-next-line no-undef
__webpack_base_uri__ = `http://${process.env.SERVICE_URL}:${process.env.SERVICE_PORT}`

const devConfig = {
    mode: "development",

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
            name: "designsystem",
            filename: "remoteEntry.js",
            exposes: {
                "./App": "./src/App",
            },
            shared: [
                {
                    ...deps,
                    react: {
                        singleton: true,
                        requiredVersion: deps.react,
                    },
                    "react-dom": {
                        singleton: true,
                        requiredVersion: deps["react-dom"],
                    },
                },
            ],
        }),
    ],
}

module.exports = merge(commonConfig, devConfig)
