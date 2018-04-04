const webpack = require('webpack')
const path = require('path')

module.exports = {
	context: path.resolve(__dirname, './src/js'),
	entry: {
		index: './index.js'
	},
	output: {
		path: path.join(__dirname, 'dist/'),
		filename: '[name].js'
	},
	module: {
		rules: [{
			test: /\.tag$/,
			enforce: 'pre',
			exclude: /node_modules/,
			use: {
				loader: 'riot-tag-loader',
				query: {
					hot: false,
					template: 'pug',
				}
			}
		}, {
			test: /\.js|\.tag$/,
			enforce: 'post',
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				query: {
					presets: ['es2015-riot']
				}
			}
		}]
	},
	resolve: {
		extensions: ['.js', '.tag']
	},
	plugins: [
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: {
		// 		warnings: false
		// 	},
		// 	mangle: true
		// })
	],
	devtool: 'inline-source-map',
}