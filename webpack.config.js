const webpack = require('webpack')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const BabiliPlugin = require("babili-webpack-plugin");
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
                            // modules: true,
                            // minimize: true,
                            // localIdentName: '[path][name]__[local]-[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                // require('autoprefixer')(),
                                require('postcss-cssnext')()
                            ]
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            })
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }
    ]
    },
    plugins: [
        new ExtractTextWebpackPlugin({
            filename: '[name].min.css',
            allChunks: true // true 提取所有的 css 文件, false (默认)只提取初始化时候引入的 css 文件
        }),
        new webpack.optimize.UglifyJsPlugin()
        // new BabiliPlugin()
    ]
}