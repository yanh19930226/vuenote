<template>
    <div class="home-box">
        <div v-for="type in list" :key="type.typeId">
            <div class="list-name">
                <span>{{ type.typeName }}</span>
                <span class="list-more">更多 ></span>
            </div>
            <FilmList class="list-content" :films=" type.list "></FilmList>
        </div>
    </div>
</template>
<script>
import FilmList from "../components/FilmList";
// 1、在使用位置直接进行 axios 模块的加载
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
        loadHomeData() {
            let baseUrl = process.env.NODE_ENV === "production"? "http://127.0.0.1:80" : "/api";
            axios.get(baseUrl + "/filmApi/loadTyps.php")
                .then((response) => {
                    if (response.statusText === "OK" &&response.data.resultState) {
                        this.list = response.data.result;
                    } else {
                        return Promise.reject(response.data.msg);
                    }
                })
                .then(()=>{
                    for (let i = 0; i < this.list.length; i++) {
                        this.loadTypeFilm(this.list[i].typeId,i);
                    }
                })
                .catch(error => {
                    let msg = typeof error === "object" ? "网络错误" : error;
                    this.$tipBox(msg, 3000);
                });
        },
        loadTypeFilm(typeId,i) {
            let baseUrl = process.env.NODE_ENV === "production"? "http://127.0.0.1:80": "/api";

            axios.get(baseUrl + "/filmApi/loadFilms.php",{
                params:{
                    typeId
                }
            }).then(( { statusText, data } ) => {
                if (statusText === "OK" && data.resultState) {
                    // this.list[i].list = data.result;
                    this.$set(this.list[i],"list",data.result);
                } else {
                    return Promise.reject(response.data.msg); // 强制切换Promise状态到catch中
                }

            }).catch(error => {
                let msg = typeof error === "object" ? "网络错误" : error;
                this.$tipBox(msg, 3000);
            });
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