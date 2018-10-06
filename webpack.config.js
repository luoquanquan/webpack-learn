const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        app: './src/app.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: [
                    {
                        loader: 'style-loader/useable'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    }
}