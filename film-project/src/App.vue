<template>
    <div class="app">
        <nav-bar></nav-bar>
        <div class="content-box">
            <transition
                enter-active-class="animated slideInRight"
                leave-active-class="animated slideOutLeft"
            >
                <!-- 该位置用于定义路由组件的动态切换 -->
                <router-view></router-view>
            </transition>
        </div>
        <!-- <BottomBar v-show=" '/detail'==$route.path "></BottomBar> -->
        <transition
            enter-active-class="animated bounceInUp"
            leave-active-class="animated bounceOutDown"
        >
            <BottomBar v-show=" $route.meta.showBottomBar "></BottomBar>
        </transition>
        <FiexdBtn v-show=" !$route.meta.hideBtn "></FiexdBtn>
    </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import BottomBar from "./components/BottomBar";
import FiexdBtn from './components/FiexdBtn';

export default {
    name: "app",
    components: {
        NavBar,
        BottomBar,
        FiexdBtn
    }
};
</script>

<style lang="less">
@import "./less/base.less";
</style>
<style lang="less" scoped>
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
