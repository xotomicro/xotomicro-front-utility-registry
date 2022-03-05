const HtmlWebpackPlugin = require("html-webpack-plugin")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

module.exports = {
    resolve: {
        extensions: [".js", ".tsx", ".jsx", ".ts"],
    },

    module: {
        rules: [
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
        new TsconfigPathsPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
}
