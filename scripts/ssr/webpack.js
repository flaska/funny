const path = require('path');
const nodeExternals = require('webpack-node-externals');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;


module.exports = {
    entry: './scripts/ssr/webServer.js',
    target: 'node',
    output: {
        path: path.resolve('build-server-static'),
        filename: 'index.js',
    },
    devtool: 'source-map', // disable to get more production ready
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    }
};