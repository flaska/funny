const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './server/serverBuild/index.js',
    target: 'node',
    // externals: [nodeExternals()],
    output: {
        path: path.resolve('build-server'),
        filename: 'index.js',
        // globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    }
};