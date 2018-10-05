const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        pageA: './src/pageA.js',
        pageB: './src/pageB.js',
        vender: ['lodash']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            async: 'async-common',
            children: true,
            minChunks: 2
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vender', 'manifest'],
            minChunks: Infinity
        })
    ]
}