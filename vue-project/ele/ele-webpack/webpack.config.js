const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	entry: {
		home: resolve('./src/components/home/home.js'),
		step: resolve('./src/components/step/step.js')
	},
	output: {
		path: resolve('/dist'),
		filename: './static/js/[name].js'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')]
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			},
			{
				test: /\.less$/,
				loader: ['style-loader', 'less-loader'],
				include: [resolve('src')]
			}
		]
	},
	devServer: {
		contentBase: './dist',
		port: 8081,
		open: true,
		hot: true,
		index: 'home.html',
		proxy: {
			'/api': {
				// 测试环境
				target: 'http://localhost:9000',
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			"$": "jquery",
			"jQuery": "jquery",
			"window.jQuery": "jquery"
		}),
		new HtmlWebpackPlugin({
			filename: './home.html',
			chunks: ['home'],
			template: './src/components/home/home.html',
			inject: true
		}),
		new HtmlWebpackPlugin({
			chunks: ['step'],
			filename: './step.html',
			template: './src/components/step/step.html',
			inject: true
		})
	]

}