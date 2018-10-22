const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin

module.exports = {
	context: path.resolve(__dirname, './src/js'),
	entry: './index.js',
	output: {
		path: path.join(__dirname, './'),
		filename: 'index.js'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tag$/,
				enforce: 'pre',
				exclude: /node_modules/,
				use: {
					loader: 'riot-tag-loader',
					query: { hot: false, template: 'pug' }
				}
			},
			{
				test: /\.js|\.tag$/,
				enforce: 'post',
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					query: { presets: ['es2015-riot'] }
				}
			}
		]
	},
	resolve: { extensions: ['.js', '.tag'] },
	plugins: [
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
		new BundleAnalyzerPlugin()
	],
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				parallel: true,
				sourceMap: true,
				extractComments: true,
				uglifyOptions: {
					warnings: false,
					parse: {},
					compress: { drop_console: true },
					mangle: true,
					output: null,
					toplevel: false,
					nameCache: null,
					ie8: false,
					keep_fnames: false
				}
			})
		]
	}
}
