<template>
    <div class="box">
        aaa
        <h3>bbbb</h3>
        <h4>父组件H4</h4>
        <hr>
        <CompA v-if="flag"></CompA>
        <input type="button" value="切换组件" @click=" flag=!flag ">
    </div>
</template>
<script>
import CompA from './components-test/CompA'
export default {
    data(){
        return {
            flag:true
        }
    },
    components:{
        CompA
    }
}
</script>
<style>
    /* 
        style 为组件定义样式 
            + 一个单文件组件中可以定义多个 style样式标签
            + 任意组件中的 style标签 默认定义全局样式
        style 标签上可以通过 scoped 属性描述 当前样式为组件的局部样式
            scoped 属性的定义会告知 vue的模板编译时完成下述两件事情
            + 1、在当前组件的所有标签上（子组件标签） 定义一个随机值的自定义属性
            + 2、被scoped修饰的所有样式 添加 []属性选择器后缀，属性值为第一步生成自定义属性
            + 组件的根标签可以同时使用父组件的局部样式，和子组件局部样式
        style 标签上可以通过 属性 lang 定义组件使用的 动态样式语法,默认lang="css"
    */
    .box{
        color: red;
    }
</style>
<style scoped lang="css">
    h3{
        color: blue;
    }
</style>