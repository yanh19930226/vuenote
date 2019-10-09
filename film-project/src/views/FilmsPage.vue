<template>
    <div class="films-box">
        <div class="list-name">
            <!-- <span>{{ $route.query.typeName }}</span> -->
            <span>{{ typeName }}</span>
        </div>
        <FilmList class="content-list" :films="films"></FilmList>
    </div>
</template>
<script>
import FilmList from "../components/FilmList";

export default {
    components: {
        FilmList
    },
    data(){
        return {
            films:[]
        }
    },
    computed: {
        typeName(){
            return this.$route.query.typeName?this.$route.query.typeName:"全网搜索";
        }
    },
    watch: {
        "$route.query.search":function(){
            this.loadFilms();
        }
    },
    methods: {
        loadFilms(){

            let typeId = this.$route.query.typeId;
            let search = this.$route.query.search;

            let params = {
                size:12
            }

            if(typeId){
                params.typeId = typeId;
            }
            if(search){
                params.seach = search;
            }

            this.$api.loadFilms(params)
            .then((data)=>{
                this.films = data;
            })
            .catch((error)=>{
                let msg = typeof error ==="object"?"网络错误":error;
                this.$tipBox(msg,3000);
            })
        }
    },
    mounted() {
        console.log("mounted")
        this.loadFilms();
        // 进行Get参数的请求解析和获取
        // console.log(this.$route.query)
    },
    destroyed() {
        console.log("destroyed")
        
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