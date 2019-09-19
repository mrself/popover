const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        javascript: './javascript-demo.js',
        typescript: './typescript-demo.ts'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.js$/,
                loader: 'ts-loader',
                options: {
                    allowTsInNodeModules: true
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};