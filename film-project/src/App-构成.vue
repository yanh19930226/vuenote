<template>
    <div>
        <p>template 标签用于定义组件结构中的模板</p>
        <p>该标签为单文件组件必须存在的标签</p>
        <p>单文件组件中，script为开发者提供组件配置接口，可以不定义，不定义时使用默认配置</p>
        <p>单文件组件中，style为页面标签提供样式定义，是可以不提供样式</p>
        <hr>
        <p>单文件组件中只能由一个template页面结构，如果定义了多个，最后的template会为组件提供结构 </p>
        <p>单文件组件中script标签可以定义一个或不定义，但不能定义多个，如果定义多个，最后定义script会作为组件配置</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:"测试数据"
        }
    }
}
</script>
