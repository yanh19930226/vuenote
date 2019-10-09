<template>
    <div class="app">
        <nav-bar></nav-bar>
        <div class="content-box">
            <!-- 
                模块化项目中
                1、页面中使用时：只能使用组件名的连字符标签方式
                2、在模块化中使用时：可以直接使用驼峰方式的组件名定义标签
            -->
            <home-page></home-page>
            <!-- <HomePage></HomePage> -->
            <!-- <FilmsPage></FilmsPage> -->
            <!-- <DetailPage></DetailPage> -->
        </div>
        <!-- <BottomBar></BottomBar> -->
    </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
// vue 模块化项目开发中，对于导入的 .vue 结尾的文件，可以省略扩展名不写
// vue的模块化项目会自动识别
import HomePage from "./views/HomePage";
import FilmsPage from "./views/FilmsPage";
import DetailPage from "./views/DetailPage";
import BottomBar from "./components/BottomBar";

export default {
    name: "app",
    components: {
        NavBar,
        BottomBar,
        HomePage,
        FilmsPage,
        DetailPage
    },
    mounted() {
        // console.log(1);
    },
};
</script>

<style lang="less">
// @import "./less/var.less";
// less 的导入只是将对应的less文件中的样式，复制到导入位置
//   less语法时，图片地址以导入文件的位置作为参考
//   less 语法本身也会完成以地址转换

/*
    less @import 导入外部文件时
        less语法会首先将 对应文件中地址 主动转换为以当前文件作为参考的地址
            例子： base.less => background-image: url("../../public/imgs/star-open.png");
            导入到App.vue => background-image: url("../public/imgs/star-open.png");

        单文件组件完成当前文件中的 样式转换==>单文件组件的编译转换
    
    ==> 被编译的地址，直接以当前文件作为参考即可
*/
@import "./less/base.less";
</style>
<style lang="less" scoped>
// @import "./less/var.less";
.app {
    max-width: 750px;
    margin: 0 auto;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: @light;
    overflow: hidden;
}
.content-box {
    background-color: #cccccc;
    position: absolute;
    top: @topHeight;
    bottom: 0rem;
    left: 0rem;
    right: 0rem;
}
</style>
