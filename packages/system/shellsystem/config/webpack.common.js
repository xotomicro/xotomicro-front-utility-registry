const HtmlWebpackPlugin = require("html-webpack-plugin")
const packageDependencies = require("../package.json").dependencies
const {EnvironmentPlugin} = require("webpack")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const {getAliasConfig} = require("@xotomicro/utility/lib/config/webpack.shared")

module.exports = {
    resolve: {
        alias: getAliasConfig(),
        extensions: [".js", ".tsx", ".jsx", ".ts"],
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new EnvironmentPlugin({
            ...process.env,
        }),
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
                    ...packageDependencies,
                },
            ],
        }),
    ],
}
