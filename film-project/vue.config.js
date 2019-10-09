module.exports = {
    // publicPath:"/film/",
    // 根据环境区分 生成服务器的地址 和 开发服务器的地址
    // publicPath:process.env.NODE_ENV === "production"?"/film/":"/",
    // 以访问服务器地址的 index.html 存放的位置作为参考目录
    publicPath:"./",
    // outputDir:"filmProject",
    // 定义vue项目的页面入库
    indexPath:"index.html",
    // 改变开发服务器的特性
    devServer:{
        // 定义开发服务器端口的
        // host:"192.168.19.8",
        port:"8080",
        // 代理服务器配置
        proxy:{
            // key:value
            // key=描述项目中哪些请求需要被代理服务器代理
            //   以路径前缀方式描述key，定义被拦截请求的 前缀
            //   value 配置代理服务器的行为
            "/api":{
                // 拦截项目中所有以 /api 开头的请求
                target:"http://127.0.0.1:80", // 定义被拦截的请求需要访问的真实服务器
                // 地址转发时默认作为 请求地址和目标地址的拼接
                // 例：/api/filmApi/loadTyps.php
                //    转发到 http://127.0.0.1:80/filmApi/loadTyps.php
                // 通过前缀替换实现地址的重写和定义
                pathRewrite:{
                    // key:value  ==> 是JS的正则表达式使用配置 replace(匹配字符或者正则（key），替换后的值(value))
                    "^/api":""
                },
                logLevel:"debug"
            },
            // "/test":{

            // }
        }
    },
    // 打包时(生成环境下)关闭JS源代码调试功能
    productionSourceMap:false,
    // 开发环境下，是否开启css的调试功能。不会影响项目的打包
    css:{
        sourceMap:true
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                "./src/less/var.less"
            ]
        }
    }
}
