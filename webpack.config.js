const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebPackPlugin({
            // path of the file which can be used as a template
            template: path.resolve(__dirname, 'public/index.html'),
            // name of the file which will be created by HtmlWebPackPlugin
            filename: 'index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }]
    },
    devServer: {
        host: 'localhost',
        port: "3001",
        hot: true
    }
};