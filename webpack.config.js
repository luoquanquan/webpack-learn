const webpack = require('webpack')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const PurifyCss = require('purifycss-webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const glob = require('glob-all')

const path = require('path')

module.exports = {
    entry: {
        app: './src/app.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
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
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/,
            // use: {
            //     loader: 'file-loader',
            //     options: {
            //         publicPath: 'images/',
            //         name: '[name]-[hash:4].[ext]',
            //         // useRelativePath: true,
            //         outputPath: 'images/'
            //     }
            // }
            use: {
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    publicPath: 'images/',
                    name: '[name]-[hash:4].[ext]',
                    // useRelativePath: true,
                    outputPath: 'images/'
                }
            }

        }
    ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextWebpackPlugin({
            filename: '[name].min.css',
            allChunks: true // true 提取所有的 css 文件, false (默认)只提取初始化时候引入的 css 文件
        }),
        // puriry 要在 EX 后边
        new PurifyCss({
            paths: glob.sync([
                path.join(__dirname, './index.html'),
                path.join(__dirname, './src/app.js'),
            ])
        }),
        new webpack.optimize.UglifyJsPlugin()
        // new BabiliPlugin()
    ]
}