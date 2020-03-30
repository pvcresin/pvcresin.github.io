const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
	mode: isProd ? 'production' : 'development',
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
	plugins: isProd ? [new BundleAnalyzerPlugin()] : []
}
