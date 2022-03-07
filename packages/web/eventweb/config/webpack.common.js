const packageDependencies = require("../package.json").dependencies
const {getAliasConfig, getModuleRulesConfig, getMicrofrontendPluginsConfig} = require("@xotomicro/utility/lib/config/webpack.shared")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {EnvironmentPlugin} = require("webpack")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    resolve: {
        alias: getAliasConfig(),
        extensions: [".js", ".tsx", ".jsx", ".ts"],
    },
    module: {
        rules: getModuleRulesConfig(),
    },
    plugins: getMicrofrontendPluginsConfig({packageName: "eventweb", packageDependencies, HtmlWebpackPlugin, EnvironmentPlugin, ModuleFederationPlugin}),
}
