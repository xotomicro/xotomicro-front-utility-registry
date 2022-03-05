const HtmlWebpackPlugin = require("html-webpack-plugin")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
var path = require("path")

module.exports = {
    resolve: {
        alias: {
            "@app": path.resolve(__dirname, "src/app"),
            "@model": path.resolve(__dirname, "src/model"),
            "@services": path.resolve(__dirname, "src/services"),
            "@store": path.resolve(__dirname, "src/store"),
            "@style": path.resolve(__dirname, "src/style"),
            "@events": path.resolve(__dirname, "src/events"),
            "@utils": path.resolve(__dirname, "src/utils"),         
   "@components": path.resolve(__dirname, "src/components")
        },
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
