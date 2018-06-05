const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './App/main.js',
    output: {
        filename: './bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {test: /\.js$/, use: ['babel-loader']},
            {test: /\.css$/, use: ['style-loader','css-loader']},
            {test: /\.html$/, use: ['html-loader']},
            {test: /\.(jpg|png|gif)$/, use: ['url-loader']},
            {test: /\.(woff|ttf|svg|eot)$/, use: ['url-loader']},
            {test: /\.vue$/, use: ['vue-loader']}
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: __dirname,
        port: 8080,
        hot: true,
        open: true,
        setup (app) {
            app.get('/before', (req, res) => {
                let data = require('./App/Data/data.json')
                res.json(data)
            })
        }
    },
    devtool: 'eval'
}