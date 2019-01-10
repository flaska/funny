const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './server/serverBuild/index.js',
    target: 'node',
    output: {
        path: path.resolve('build-server'),
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