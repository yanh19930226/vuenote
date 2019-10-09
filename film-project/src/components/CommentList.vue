<template>
    <div class="film-comments">
        <div class="comment-title">相关评论</div>
        <div class="comment-list">
            <!-- 用户评论 start -->
            <div class="comment-item" v-for="com in comments" :key="com.commentId">
                <div class="user-img">
                    <img :src="`./imgs/users/${ com.userImg }`" />
                </div>
                <div class="user-info">
                    <div class="user-name">
                        <span>{{ com.username }}</span>
                        <div class="film-source">
                            <span
                                v-for="(item, index) in 5"
                                :key="index"
                                class="star-img"
                                v-bind:class=" Math.ceil(com.userSource*1) >= item ? 'open':'close' "
                            ></span>
                            <span class="star-source">{{ (com.userSource*1).toFixed(1) }}</span>
                        </div>
                    </div>
                    <div class="user-time">{{ com.createTime }}</div>
                </div>
                <div class="user-conent">{{ com.userMsg }}</div>
            </div>
            <!-- 用户评论 end -->
        </div>
    </div>
</template>
<script>
export default {
    props: {
        comments: {
            type: Array,
            default() {
                return [];
            }
        }
    }
};
</script>

<style lang="less" scoped>
// 评论组件
.film-comments {
    color: @gray-dark;
    padding-bottom: 0.3rem;
    font-size: 0rem;
    > .comment-title {
        font-size: 0.36rem;
        color: @gray;
        padding: 0rem 0.2rem;
        margin-bottom: 0.2rem;
    }
    > .comment-list {
        width: 100%;
        padding-bottom: 0.1rem;
    }
}
.comment-item {
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-template-rows: auto auto;
    padding: 0rem 0.2rem 0.6rem 0.2rem;
    
    > .user-img {
        width: 100%;
        > img {
            width: 100%;
            height: auto;
            border-radius: 50%;
        }
    }
    > .user-info {
        font-size: 0.3rem;
        padding-left: 0.2rem;
        > .user-name {
            margin-top: 0.1rem;
            > .film-source {
                float: right;
            }
        }
        > .user-time {
            margin-top: 0.1rem;
            font-size: 0.26rem;
            color: @gray;
        }
    }
    > .user-conent {
        font-size: 0.24rem;
        text-indent: 0.56rem;
        line-height: 0.4rem;
        grid-column-start: 2;
        grid-column-end: 3;
        padding-left: 0.2rem;
        // 单词强制换行
        word-break: break-all;
    }
}
</style>