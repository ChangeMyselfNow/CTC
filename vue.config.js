const path = require("path"),
    webpackConfig = require("./webpack.config.js"),
    outputDir = "dist";


module.exports = {
    publicPath: "/",
    outputDir: outputDir,
    assetsDir: "assets",
    pages: {
        index: {
            entry: "src/main.js",
            template: "public/index.html",
            filename: "index.html"
        }
    },
    productionSourceMap: false,
    chainWebpack: config => {
        config.output.filename("[name].[hash].js").end();
    },
    configureWebpack: {
        // devtool: "source-map",
        devtool: "cheap-module-eval-source-map",
        resolve: {
            extensions: [".js", ".json", ".vue", ".scss", ".css"],
            alias: {
                vue$: "vue/dist/vue.esm.js",
                "@": path.join(__dirname, "src"),
                "@assets": path.join(__dirname, "src/assets")
            }
        },
        plugins: [...webpackConfig.plugins]
    },
    // 本地服务
    devServer: {
        disableHostCheck: true,
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        host: "127.0.0.1", //如果想用这个需要配置host 因为webpack在启动的时候 会验证一次连接,所以配置的这个域名或者ip需要能够ping通
        // host: "0.0.0.0",
        port: 8000,
        hot: true,
        open: true,
        proxy: ""
    },
    lintOnSave: false
};