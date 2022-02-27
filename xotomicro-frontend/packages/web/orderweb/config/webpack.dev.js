const {EnvironmentPlugin} = require("webpack")
const {merge} = require("webpack-merge")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const commonConfig = require("./webpack.common")
const deps = require("../package.json").dependencies
const path = require("path")
require("dotenv").config({path: "node_modules/@xotomicro-utility/src/.env"})
require("dotenv").config()

// eslint-disable-next-line no-undef
__webpack_base_uri__ = `http://${process.env.SERVICE_URL}:${process.env.SERVICE_PORT}`

const devConfig = {
    entry: path.resolve(process.cwd(), "src/App.tsx"),
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
            name: "orderweb",
            filename: "remoteEntry.js",
            exposes: {
                "./ApplicationPage": "./src/App",
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
