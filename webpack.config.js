/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    module: {
        rules: [
            {
                // Include ts, tsx, and js files.
                test: /\.(tsx?)|(js)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        proxy: {
            // Doing this so we feel like we are using a /static route when we actually aren't
            "/static": {
                target: "http://localhost:8080",
                pathRewrite: { "^/static": "" },
            },
        },
        compress: true,
        historyApiFallback: true,
    },
    plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],
};
