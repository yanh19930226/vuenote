module.exports = {
    publicPath: "./",
    // 打包时(生成环境下)关闭JS源代码调试功能
    productionSourceMap: false,
    // 开发环境下，是否开启css的调试功能。不会影响项目的打包
    css: {
        sourceMap: true
    },
    devServer: {
        // 定义开发服务器端口的
        // host:"192.168.19.8",
        port: "8080",
        // 代理服务器配置
        proxy: {
            //value 配置代理服务器的行为, 拦截项目中所有以 /api 开头的请求
            "/api": {
                target: "http://127.0.0.1:80", // 定义被拦截的请求需要访问的真实服务器
                pathRewrite: {
                    "^/api": ""
                },
                //show in console
                logLevel: "debug"
            },
            // "/other":{

            // }
        }
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: ["./src/less/variables.less"]
        }
    }
}