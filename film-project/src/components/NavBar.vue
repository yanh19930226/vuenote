<template>
    <nav class="nav-box">
        <div class="nav-input">
            <!-- 
                mousedown > blur > click
            -->
            <input type="text" @focus=" flag=true " @blur=" hideBtn() " v-model="userMsg"  />
        </div>
        <div v-show="flag" class="nav-btn">
            <span @mousedown="gotoSearch()">加载</span>
            <!-- <router-link :to=" '/types?seach='+this.userMsg ">加载</router-link> -->
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            flag: false,
            userMsg: ""
        };
    },
    methods: {
        hideBtn() {
            this.flag = false;
            this.userMsg = "";
        },
        gotoSearch(){
            // console.log(this.$router);
            // JS 代码中的路由切换操作==编程式导航
            // 该方法可以直接完成路由地址的切换操作
            // this.$router.push(location);
            //    location 指定路由的切换地址
            // this.$router.push("/types?search="+this.userMsg);
            this.$router.push({
                name:"films",
                query:{
                    search:this.userMsg
                }
            })
        }
    }
};
</script>
<style lang="less" scoped>
// @import "../less/var.less";
.nav-box {
    height: @topHeight;
    line-height: @topHeight;
    background-color: @white;
    border-bottom: 1px solid @gray-light;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    box-sizing: border-box;
    > .nav-input {
        flex-grow: 3;
        padding: 0rem 0.2rem;
        box-sizing: border-box;
        > input[type="text"] {
            box-sizing: border-box;
            width: 100%;
            padding: 0rem 0.1rem;
            height: @topHeight - 0.4rem;
            border: none;
            outline: none;
            background-image: url("../../public/imgs/search.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 0.4rem;
            background-color: @gray-ee;
            border-radius: 0.1rem;
            &:focus {
                background-image: none;
                border: 1px solid @blue;
            }
        }
    }
    > .nav-btn {
        flex-grow: 1;
        text-align: center;
        color: @blue;
        cursor: pointer;
        font-size: 0.36rem;
    }
}
</style>