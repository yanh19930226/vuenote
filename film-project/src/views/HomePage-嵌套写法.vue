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
            // axios.get("http://127.0.0.1:80/filmApi/loadTyps.php")
            axios.get(baseUrl + "/filmApi/loadTyps.php")
                .then((response) => {
                    // console.log("第一个then")
                    if (response.statusText === "OK" &&response.data.resultState) {
                        // this.list = response.data.result;
                        return response.data.result; // 作为第二then的参数出现
                    } else {
                        return Promise.reject(response.data.msg); // 强制切换Promise状态到catch中
                    }
                })
                .then((types)=>{
                    // console.log("第二个then",JSON.stringify(types));
                    // 连 then 定义可以保证 在then方法处理时，一定是上一个then执行结束后，才执行下一个then
                    for (let i = 0; i < types.length; i++) {
                        axios.get(baseUrl + "/filmApi/loadFilms.php",{
                            params:{
                                typeId:types[i].typeId
                            }
                        }).then(( { statusText, data } )=>{
                            if (statusText === "OK" && data.resultState) {
                                // types[i].list = data.result;
                                this.$set(types[i],"list",data.result);
                            } else {
                                return Promise.reject(response.data.msg); // 强制切换Promise状态到catch中
                            }
                        })
                    }
                    // console.log(types)
                    this.list = types;
                })
                .catch(error => {
                    let msg = typeof error === "object" ? "网络错误" : error;
                    this.$tipBox(msg, 3000);
                });
        },
        // loadTypeFilm(typeId) {
        //     let baseUrl = process.env.NODE_ENV === "production"? "http://127.0.0.1:80": "/api";

        //     // 1、在请求地址后以 ？ 和 & 进行参数拼接传递
        //     // 2、为axios 的get 方法提供额外配置 config ,定义 params属性完成参数传递
        //     // axios.get(baseUrl + "/filmApi/loadFilms.php?typeId=10003&aa=aaa")
        //     // axios.get(baseUrl + "/filmApi/loadFilms.php?typeId="+this.typeId+"&aa=aaa")
        //     axios.get(baseUrl + "/filmApi/loadFilms.php",{
        //         params:{
        //             typeId
        //         }
        //     }).then((response) => {
        //         console.log(response);
        //     }).catch(error => {
        //         let msg = typeof error === "object" ? "网络错误" : error;
        //         this.$tipBox(msg, 3000);
        //     });
        // }
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