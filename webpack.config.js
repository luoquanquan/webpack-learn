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
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_moudles/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: 2,
            chunks: ['pageA', 'pageB']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vender', 'manifest'],
            minChunks: Infinity
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'manifest', // 这个名字要用 entry 里边没有的名字
        //     minChunks: Infinity
        // }),
    ]
}