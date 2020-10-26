const path = require('path'),
	webpackConfig = require('./webpack.config.js'),
	outputDir = 'dist'

const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
module.exports = {
	publicPath: './',
	outputDir: outputDir,
	assetsDir: 'assets',
	pages: {
		index: {
			entry: 'src/main.js',
			template: 'public/index.html',
			filename: 'index.html',
		},
	},
	productionSourceMap: false,
	chainWebpack: (config) => {
		config.output.filename('[name].[hash].js').end()
	},
	// configureWebpack: {
	// 	// devtool: "source-map",
	// 	devtool: 'cheap-module-eval-source-map',
	// 	resolve: {
	// 		extensions: ['.js', '.json', '.vue', '.scss', '.css'],
	// 		alias: {
	// 			vue$: 'vue/dist/vue.esm.js',
	// 			'@': path.join(__dirname, 'src'),
	// 			'@assets': path.join(__dirname, 'src/assets'),
	// 		},
	// 	},
	// 	plugins: [...webpackConfig.plugins],
	// },
	configureWebpack: {
		resolve: {
			extensions: ['.js', '.json', '.vue', '.scss', '.css'],
			alias: {
				vue$: 'vue/dist/vue.esm.js',
				'@': path.join(__dirname, 'src'),
				'@assets': path.join(__dirname, 'src/assets'),
			},
		},
		plugins: [
			new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

			// 下面是下载的插件的配置
			new CompressionWebpackPlugin({
				algorithm: 'gzip',
				test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
				threshold: 10240,
				minRatio: 0.8,
			}),
			new webpack.optimize.LimitChunkCountPlugin({
				maxChunks: 5,
				minChunkSize: 100,
			}),
		],
	},
	// 本地服务
	devServer: {
		disableHostCheck: true,
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		host: "0.0.0.0",
		port: 8000,
		hot: true,
		open: true,
		proxy: '',
	},
	lintOnSave: false,
}
