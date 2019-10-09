<template>
    <div>
        <h4>vue模块化项目中的图片路径问题</h4>
        <!--     
            模块化项目中，单文件组件的模板中的 图片地址 存在一种编译机制
            1、页面中使用 img 标签方式加载图片，且图片为相对路径，写入的路径会被vue进行加工
                - 在编译过程中会根据 组件的位置 寻找图片
                - 编译后会使用 baseUrl 的值为路径前缀进行重新设置
                => 特殊的处理情况：
                     img 的图片采用 vue 的 v-bind 进行 src 绑定
                     + 此时该标签的图片地址将不再参与 vue的 编译转换
                     + 以 index.html位置作为参考
            2、行内样式的背景图片定义，不会被vue解析编译
                - 在行内背景图片设置时，地址定义为什么，页面输出为什么
                - 行内的背景图片设置，因为不参与vue的编译转换后，所有定义时以 index.html位置作为参考
        -->
        <p>src属性引入的图片</p>
        <img src="../public/imgs/star-open.png">
        <!-- <img src="./imgs/star-open.png"> -->
        <img :src=" img ">
        <p>行内样式定义的图片</p>
        <div style="border:1px solid black;width: 200px;height: 200px;background-image: url(./imgs/star-open.png)"></div>
        <!-- <div style="border:1px solid black;width: 200px;height: 200px;background-image: url(../public/imgs/star-open.png)"></div> -->

    </div>
</template>
<script>
export default {
    data(){
        return{
            img:"./imgs/star-open.png"
        }
    }
}
</script>