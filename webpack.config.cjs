var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
module.exports = {
    devtool: 'source-map',
    entry: {
        app: './source/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public', 'static'),
        filename: '[name]-bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/preset-react', '@babel/preset-env']
            }
        },{
            test: /\.[s]?css$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: {
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    }
                }
            ]
        }]
    },
}