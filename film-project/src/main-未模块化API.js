// ES6 模块导入语法 == 等效于 node   require（） 功能
// 模块文件的加载
// node 语法中 
// const a = require("./a.js");

// ES6 语法
// import 定义变量名 from 文件的路径或名称
// import { show } from '../a.js';
// console.log(show);

// 模块路径和名称问题
//    定义的模块名称前，没有 ./ 或者 ../ ,
//        1.表示该模块应该为 node环境的核心模块
//        2.或者当前项目中的node_modules中的模块
//    定义的模块名称前，有 ./ 或者 ../ 
//         + 根据路径加载对应的模块
// 模块路径如果指向于 一个固定文件夹
//      1、寻找对应文件夹中是否存在 index.js 文件提供装载
//      2、如果没有index.js文件，会寻找 package.json 文件，并加载 属性 main的指向文件


import Vue from 'vue'  // 当前项目目录下 node_modules 内部的 vue文件夹
// console.log(Vue);
import App from './App.vue'
// console.log(App)
import plugins from './plugins'
import axios from 'axios';

// 全局前缀配置
axios.defaults.baseURL = process.env.NODE_ENV === "production"? "http://127.0.0.1:80" : "/api";


Vue.use(plugins);
// 全局配置 关闭产品控制台提示
Vue.config.productionTip = false;
// 在原型上增加实例属性
Vue.prototype.$axios = axios;




// 创建当前项目运行的 根实例组件
new Vue({
  // template:"",
  render: h => h(App),
  // render:(h)=>{
  //   return h(App);
  // },
  // mounted() {
  //   console.log("new Vue:",this.$el);
  // },
}).$mount('#app')
