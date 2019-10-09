<template>
    <div class="fiexd-btn" @click=" $router.back() ">返回</div>
</template>

<style lang="less" scoped>
.fiexd-btn{
    position: fixed;
    bottom: 1.2rem;
    right: 0.2rem;
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    cursor: pointer;
}
</style>