<template>
    <div class="home-box">
        <div v-for="type in list" :key="type.typeId">
            <div class="list-name">
                <span>{{ type.typeName }}</span>
                <!-- <span class="list-more">更多 ></span> -->
                <!-- 替换了 span 标签，实现点击时可以切换url地址且不刷新页面 -->
                <!-- <router-link class="list-more" to="/types" tag="span">更多 ></router-link> -->
                <!-- <router-link class="list-more" to="/types?arg1=aaa&arg2=bbb" tag="span">更多 ></router-link> -->
                <!-- <router-link class="list-more" :to=" '/types?typeId='+type.typeId+'&typeName='+type.typeName " tag="span">更多 ></router-link> -->
                
                <!-- 
                    path 定义请求组件的路由地址
                    name 定义请求组件的 路由 名称 ==> 具名路由切换
                    query 定义get请求中需要携带参数
                    params 定义rest请求中需要携带的参数
                 -->
                <!-- <router-link class="list-more" tag="span"
                    :to="{
                        path:'/types',
                        query:{
                            typeId:type.typeId,
                            typeName:type.typeName
                        }
                    }" 
                >更多 ></router-link> -->
                <router-link class="list-more" tag="span"
                    :to="{
                        name:'films',
                        query:{
                            typeId:type.typeId,
                            typeName:type.typeName
                        }
                    }" 
                >更多 ></router-link>

            </div>
            <FilmList class="list-content" :films=" type.list "></FilmList>
        </div>
    </div>
</template>
<script>
import FilmList from "../components/FilmList";
import axios from "axios";

export default {
    components: {
        FilmList
    },
    data() {
        return {
            list: []
        };
    },
    methods: {
        async loadHomeData() {
            try {
                let list = await this.$api.loadTypes();
                for (let i = 0; i < list.length; i++) {
                    let films = await this.$api.loadFilms({
                        typeId: list[i].typeId
                    });
                    list[i].list = films;
                }
                this.list = list;
            } catch (error) {
                let msg = typeof error === "object" ? "网络错误" : error;
                this.$tipBox(msg, 3000);
            }
        }
    },
    mounted() {
        this.loadHomeData();
    }
};
</script>
<style lang="less" scoped>
// 首页样式
.home-box {
    position: absolute;
    top: 0rem;
    bottom: 0rem;
    left: 0rem;
    right: 0rem;
    overflow-y: auto;
}
.list-content {
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    margin-bottom: 0.1rem;
    font-size: 0rem;
    &::after {
        content: "";
        width: 0.1rem;
        display: inline-block;
    }
}
</style>