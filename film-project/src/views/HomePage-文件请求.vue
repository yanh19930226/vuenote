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
            axios.get("http://127.0.0.1:8080/data/home.json")
                .then(response => {
                    if (response.statusText === "OK" && response.data.resultState) {
                        // console.log(response.data, this);
                        this.list = response.data.result;
                    }else{
                        // console.log(response.data.msg);
                       return Promise.reject(response.data.msg); // 强制切换Promise状态到catch中
                    }
                }).catch((error)=>{
                    //为开发者开发时提供错误依据和提示，
                    // 上线后项目中的所有 console.log 都需要注释或删除
                    // console.log("catch:",typeof error); 
                    // alert("网络出现问题，请稍后再试");
                    // tipBox('网络错误',3000);
                    // console.log(this);
                    let msg = typeof error ==="object"?"网络错误":error;
                    this.$tipBox(msg,3000);
                });
        }
    },
    mounted() {
        this.loadHomeData();
    }
    // mounted() {
    //     // console.log(axios)
    //     let pro = axios.get("http://127.0.0.1:8080/data/home.json");
    //     // console.log(pro);
    //     pro.then((response)=>{
    //         // 表述 axios 对象的 异步请求执行成功 （XMLHttpRequest 200 && 4）
    //         // axios 的请求成功后，会返回一个包装有后台数据的 完成响应对象
    //         //    response：地址，参数，模式，时间，状态，后台响应数据 ……
    //         console.log(response);
    //         if(response.statusText==="OK"&&response.data.resultState){
    //             console.log(response.data,this)
    //             this.list = response.data.result;
    //         }
    //     });
    //     pro.catch(function(error){
    //         // 异步请求失败时所执行的方法
    //         //   ajax的请求成功和失败取决于 请求后台是否接收且存在返回结果
    //         // error参数用于记录 请求失败的错误对象
    //     });
    //     pro.finally(function(){
    //         // 无论请求成功还是失败都会执行的方法
    //     });
    // },
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