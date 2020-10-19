const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
    UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let webpackConfig = {
    plugins: [
        // new UglifyJsPlugin()
    ]
}

module.exports = webpackConfig;