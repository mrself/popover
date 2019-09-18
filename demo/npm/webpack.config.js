const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};