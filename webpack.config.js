const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        test: './src/js/test.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
                exclude: /node_modules/,
            },
            {
                test: /\.svg$/,
                use: ['file-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },{
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        host: '0.0.0.0'
    }
}