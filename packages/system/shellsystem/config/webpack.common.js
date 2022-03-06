const HtmlWebpackPlugin = require("html-webpack-plugin")
var path = require("path")

module.exports = {
    resolve: {
        alias: {
            "@app": path.resolve(process.cwd(), "src/app"),
            "@model": path.resolve(process.cwd(), "src/model"),
            "@services": path.resolve(process.cwd(), "src/services"),
            "@store": path.resolve(process.cwd(), "src/store"),
            "@style": path.resolve(process.cwd(), "src/style"),
            "@events": path.resolve(process.cwd(), "src/events"),
            "@utils": path.resolve(process.cwd(), "src/utils"),
            "@components": path.resolve(process.cwd(), "src/components"),
        },
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
    ],
}
