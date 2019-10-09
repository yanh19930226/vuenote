<template>
    <div>
        <div class="film-item" v-for="film in films" :key="film.filmId">
            <div class="film-img" :style=" `background-image: url(${ film.filmImg })`"></div>
            <div class="film-title">{{ film.filmName }}</div>
            <div class="film-source" v-if="film.source">
                <!-- <span class="star-img open"></span>
                <span class="star-img open"></span>
                <span class="star-img open"></span>
                <span class="star-img close"></span>
                <span class="star-img close"></span> -->
                <span v-for="(item, index) in 5" 
                    :key="index" 
                    class="star-img"
                    v-bind:class=" Math.ceil(film.source*1) >= item ? 'open':'close' "
                ></span>
                <span class="star-source">{{ (film.source*1).toFixed(1) }}</span>
            </div>
            <div class="film-source" v-if="!film.source">
                <span class="star-tip">暂无评分</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        films: {
            type: Array,
            default() {
                return [];
            }
        }
    }
};
</script>
<style lang="less" scoped>
// 首页 分类页 公用样式
.film-item {
    width: 2.35rem;
    height: 4.55rem;
    display: inline-block;
    margin-left: 0.1rem;
    vertical-align: top;
    > .film-img {
        height: 3.6rem;
        background-color: @gray-light;
        background-repeat: no-repeat;
        background-size: cover;
    }
    > .film-title {
        font-size: 0.26rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin: 0.1rem;
    }
}
.content-list {
    > * {
        margin-top: 0.2rem;
    }
}
</style>