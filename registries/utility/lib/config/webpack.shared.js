// @ts-check
const path = require("path")

/**
 * Alias Config
 */

module.exports.getAliasConfig = () => {
    return {
        "@app": path.resolve(process.cwd(), "src/app"),
        "@model": path.resolve(process.cwd(), "src/model"),
        "@services": path.resolve(process.cwd(), "src/services"),
        "@store": path.resolve(process.cwd(), "src/store"),
        "@style": path.resolve(process.cwd(), "src/style"),
        "@events": path.resolve(process.cwd(), "src/events"),
        "@utils": path.resolve(process.cwd(), "src/utils"),
        "@components": path.resolve(process.cwd(), "src/components"),
    }
}

/**
 * Module rules
 */

module.exports.getModuleRulesConfig = () => {
    return [
        {
            test: /\.tsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
        },
        {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
        },
    ]
}

/**
 * Plugins
 */

module.exports.getMicrofrontendPluginsConfig = ({packageName, packageDependencies, entryFile, HtmlWebpackPlugin, EnvironmentPlugin, ModuleFederationPlugin}) => {
    return [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new EnvironmentPlugin({
            ...process.env,
        }),
        new ModuleFederationPlugin({
            name: packageName,
            filename: "remoteEntry.js",
            exposes: {
                "./ApplicationPage": entryFile || "./src/App.tsx",
            },
            shared: [
                {
                    ...packageDependencies,
                    react: packageDependencies.react
                        ? {
                              singleton: true,
                              requiredVersion: packageDependencies.react,
                          }
                        : null,
                    "react-dom": packageDependencies["react-dom"]
                        ? {
                              singleton: true,
                              requiredVersion: packageDependencies["react-dom"],
                          }
                        : null,
                },
            ],
        }),
    ]
}

/**
 * Dev Server
 */

module.exports.getMicrofrontendDevServerConfig = () => {
    return {
        port: process.env.SERVICE_PORT,
        historyApiFallback: {
            index: "index.html",
        },
    }
}

/**
 * Output
 */

module.exports.getMicrofrontendOutputConfig = ({buildDir}) => {
    return {
        publicPath: "auto",
        path: path.resolve(process.cwd(), buildDir || "build"),
        filename: "[name].[contenthash].js",
    }
}
