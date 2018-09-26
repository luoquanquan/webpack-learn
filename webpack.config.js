const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist/',
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_moudles/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', { targets: { browsers: ['> 50%'] }}]
                        ]
                    }
                }
            }
        ]
    }
    
}