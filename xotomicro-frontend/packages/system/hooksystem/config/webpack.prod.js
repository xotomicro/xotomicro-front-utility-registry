const {EnvironmentPlugin} = require("webpack")
const {merge} = require("webpack-merge")
const path = require("path")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const commonConfig = require("./webpack.common")
const deps = require("../package.json").dependencies
require("dotenv").config({path: "node_modules/@xotomicro-utility/src/.env"})
require("dotenv").config()

// eslint-disable-next-line no-undef
__webpack_base_uri__ = `http://${process.env.SERVICE_URL}:${process.env.SERVICE_PORT}`

const prodConfig = {
    mode: "production",
    entry: path.resolve(process.cwd(), "src/App.tsx"),

    output: {
        publicPath: path.resolve(process.cwd(), "build"),
        path: path.resolve(process.cwd(), "build"),
        filename: "[name].[contenthash].js",
    },

    plugins: [
        new EnvironmentPlugin({
            ...process.env,
        }),
        new CleanWebpackPlugin(),
        new ModuleFederationPlugin({
            name: "hooksystem",
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

module.exports = merge(commonConfig, prodConfig)
