const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	entry: './App/main.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist')
	},
	module: {
		rules: [
			{test: /\.js$/, use: ['babel-loader']},
			{test: /\.css$/, use: ['style-loader', 'css-loader']},
			{test: /\.(png|jpg|gif|svg|woff|eot|ttf)$/, use: ['url-loader']},
			{test: /\.html$/, use: ['html-loader']},
			{test: /\.vue$/, use: ['vue-loader']}
		]
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: __dirname,
		port: 8080,
		open: true,
		setup(app) {
			app.get('/list', (req, res) => {
				let data = require('./App/mock/data.json')
				res.json(data)
			})
		}
	}
}
