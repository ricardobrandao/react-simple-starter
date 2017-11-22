const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	target: 'web',
	devtool: 'source-map',
	entry: './index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'index_bundle.js'
	},
	resolve: {
		alias: {
			'~': path.resolve(__dirname, 'src')
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'env',
							'react'
						]
					}
				}
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	],

	devServer: {
		compress: true,
		hot: true,
		open: true,
		overlay: true
	}
};
