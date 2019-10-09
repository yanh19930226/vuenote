// 1、加载路由语法构建模块 vue-router，Vue
import VueRouter from 'vue-router';
import Vue from 'vue';

import HomePage from './views/HomePage';
import FilmsPage from './views/FilmsPage';
import DetailPage from './views/DetailPage';
import NotFound from './views/NotFound'

/*
    vue-router 模块在完成装载和定义时，需要为整个项目提供路由功能
    在路由功能装载后，可以为vue提供一个特殊配置 router
    vue实例生命周期执行的 beforeCreate 时，路由会读取 router 配置

    router 就是 VueRouter 提供的 路由实例对象

    项目需要实现上述功能，必须让VueRouter.install 方法执行
*/

// 2、为项目安装路由 环境
Vue.use(VueRouter);

// 5、构成自定义路由对象，提供 路由配置
const config = {
    mode:"hash", // hash|history 改变路由的URL地址模式
    // 路由表模块
    // 定义组件和地址关系的配置文件
    //    routes 的取值为 数组对象结构数据
    routes:[
        {
            path:"/", // 项目访问时的默认展示地址=默认展示组件
            // component:DetailPage,
            
            // 定义地址访问的重定向行为
            // 该属性定义完成后 component 属性将失去作用
            redirect:"/home"
        },
        // 组件地址管理配置项
        // { // 描述url地址和组件的关系 }
        { 
            // 定义和描述组件的对应唯一地址
            path:"/home",
            name:"home",
            // 定义地址所对应的组件 ==> 路由控制组件
            // 路由控制组件,将被路由进行统一化管理
            //      1、项目中关于路由组件的展示和隐藏都将有路由对象统一维护
            //      2、路由管理组件无需在定义为项目全局组件或局部组件
            component: HomePage,
            meta:{
                hideBtn:true
            }
        },
        {
            path:"/list",
            // name 属性可以调整项目的开发操作
            // 但不会影响页面的路径显示
            name:"films",
            component:FilmsPage
        },
        {
            // path:"/detail/:filmId",
            // path:"/:filmId/detail/:filmName?",
            path:"/detail/:filmId?/:filmName?",
            name:"detail",
            component:DetailPage,
            meta:{
                showBottomBar:true
            }
        },
        {
            path:"*",
            // redirect:"/home"
            component:NotFound
        }
    ]
}

// 3、创建VueRouter的实例对象
const router = new VueRouter(config);
export default router;
// 4、main.js 文件中进行路由对象导入
//    import router from './router.js';
//    在new Vue({ router }) 增加路由配置项