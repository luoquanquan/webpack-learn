const webpack = require('webpack')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
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
        rules: [{
            test: /\.less$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: {
                    loader: 'style-loader',
                    options: {
                        // insertInto: '#app',
                        singleton: true,
                        transform: './css.transform.js'
                    }
                },
                use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            minimize: true,
                            localIdentName: '[path][name]__[local]-[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            })
        }]
    },
    plugins: [
        new ExtractTextWebpackPlugin({
            filename: '[name].min.css'
        })
    ]
}