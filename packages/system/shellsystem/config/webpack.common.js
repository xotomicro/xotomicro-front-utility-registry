const HtmlWebpackPlugin = require("html-webpack-plugin")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
;

module.exports = {
    resolve: {
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
        new TsconfigPathsPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
