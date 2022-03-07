const HtmlWebpackPlugin = require("html-webpack-plugin")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const {getAliasConfig} = require("@xotomicro/utility/lib/config/webpack.shared")

module.exports = {
    resolve: {
        alias: getAliasConfig(),
        extensions: [".js", ".tsx", ".jsx", ".ts"],
        plugins: [new TsconfigPathsPlugin()],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            },
            {
                test: /\.tsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
}
