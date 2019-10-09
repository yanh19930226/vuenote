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
        // 部分低版本浏览器无法实现 同步功能
        async loadHomeData() {
            try {
                let baseUrl = process.env.NODE_ENV === "production"? "http://127.0.0.1:80" : "/api";
                // axios 提供配合 ES6 的 async await 实现异步等待操作
                //   有效完成 多请求对接关联关系
                //   接收将是 axios 请求成功后的返回结果
                let { statusText,data } = await axios.get(baseUrl + "/filmApi/loadTyps.php");
                if(statusText!="OK"||!data.resultState){
                    throw  new Error("请求失败");  // 具有阻断后续代码运行的功能，将程序执行迁移到 catch中
                }
                // console.log(statusText,data);
                for (let i = 0; i < data.result.length; i++) {
                    let response = await axios.get(baseUrl + "/filmApi/loadFilms.php",{
                        params:{
                            typeId:data.result[i].typeId
                        }
                    });
                    if(response.statusText==="OK"&&response.data.resultState){
                        data.result[i].list = response.data.result
                    }else{
                        throw  new Error("请求失败");
                    }
                }
                this.list = data.result;
            } catch (error) {
                console.log(error);
                this.$tipBox("请求失败");
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