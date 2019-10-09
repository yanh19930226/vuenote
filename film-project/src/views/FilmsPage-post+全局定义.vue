<template>
    <div class="films-box">
        <div class="list-name">
            <span>热门电影</span>
        </div>
        <FilmList class="content-list" :films="films"></FilmList>
    </div>
</template>
<script>
import FilmList from "../components/FilmList";
import QS from 'qs'

export default {
    components: {
        FilmList
    },
    data(){
        return {
            films:[]
        }
    },
    methods: {
        loadFilms(){
            /*
                在mian.js 文件中以 原型方式为 项目所有组件增加了实例方法 $axios
                在组件中可以直接通过 vm.$axios 进行实例方法的调用
            */
            // console.log(this);
            // console.log(this.$axios)

            // axios.post(url[, data[, config]])
            //      url:请求地址
            //      data：请求时 post 方式所携带的参数
            //            + 默认定义的数据类型如果是 非 string 类型，请求将以 Request Payload 
            //              需要后台代码进行配合解析的
            //            + 如果定义的数据类型为 string 类型，请求将以 Form Data 
            //              将 key：value 常规方式定义参数
            //              string 参数必须使用 HTTP参数格式  key=value&key=value……
            //      config:请求配置
            //            => baseURL 为请求地址主动添加 请求前缀

            // axios 可以对一个特殊配置项进行全局的默认配置定义
            // axios.defaults.baseURL 完成整个项目的全局配置 = 定义在mian.js

            // let baseUrl = process.env.NODE_ENV === "production"? "http://127.0.0.1:80" : "/api";
            // this.$axios.post("/filmApi/loadFilms.php",null,{
            //     baseURL:process.env.NODE_ENV === "production"? "http://127.0.0.1:80" : "/api"
            // })
            // this.$axios.post("/filmApi/loadFilms.php?aaa=aaa&ccc=ddd",{
            //     size:12
            // })
            // this.$axios.post("/filmApi/loadFilms.php","size=12&aa=aa")
            this.$axios.post("/filmApi/loadFilms.php",QS.stringify({
                size:12,
                aa:123
            }))
            .then(( { statusText,data } )=>{
                // if(statusText=="OK"&&data.resultState){
                // }else{
                //     return Promise.reject("请求失败");
                // }
                if(statusText!="OK"||!data.resultState){
                    return Promise.reject("请求失败");
                }
                this.films = data.result;
            }).catch(()=>{

            })
        }
    },
    mounted() {
        this.loadFilms();
    },
};
</script>
<style lang="less" scoped>
// 分类页样式
.films-box {
    position: absolute;
    top: 0rem;
    bottom: 0rem;
    left: 0rem;
    right: 0rem;
    overflow-y: auto;
}
.content-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: left;
    width: 100%;
    font-size: 0rem;
    > * {
        margin-top: 0.2rem;
    }
}
</style>