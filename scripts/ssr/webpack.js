const path = require('path');
const nodeExternals = require('webpack-node-externals');

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