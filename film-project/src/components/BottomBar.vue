<template>
    <footer class="footer-box">
        <div class="comment-input" @click=" flag=true ">不想说点什么吗？</div>
        <div v-show="flag" class="comment-detail" @click=" flag=false ">
            <div class="user-input" @click.stop>
                <h4>头像</h4>
                <ul class="user-head">
                    <li
                        v-for="(c, index) in 24"
                        :key="index"
                        :class=" { 'user-choose':`user${c}.png`==userImg } "
                        :style=" `background-image: url(./imgs/users/user${ c }.png)` "
                        @click=" userImg=`user${c}.png` "
                    ></li>
                </ul>
                <h4>昵称</h4>
                <input class="user-nikename" v-model="username" type="text" placeholder="昵称" />
                <h4>评分</h4>
                <div class="film-source reset-star" @click=" userSource=0 ">
                    <span class="star-img" 
                        v-for="c in 5" :key="c" 
                        @click.stop=" userSource = c "
                        :class=" c<=userSource?'open':'close' "
                    ></span>
                    <span class="star-source">{{ userSource.toFixed(1) }}</span>
                </div>
                <h4>评论</h4>
                <textarea class="user-message" v-model="userMsg" placeholder="留下点足迹..."></textarea>
                <div class="send-btn">
                    <span @click=" flag=false ">关闭</span>
                    <span @click="addComment()">发送</span>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    data() {
        return {
            flag: false,
            userImg: "user1.png",
            username:"",
            userMsg:"",
            userSource:0
        };
    },
    methods: {
        addComment(){
            let params = {
                username:this.username,
                userImg:this.userImg,
                userSource:this.userSource,
                userMsg:this.userMsg,
                filmId:this.$route.params.filmId
            }
            this.$api.addComment(params)
                .then((msg)=>{
                    // console.log(111);
                    this.$tipBox(msg);
                    this.flag = false;
                    // 通知对应的组件进行 评论数据的重新加载
                    this.$root.$emit("update:comment");
                })
                .catch((error)=>{
                    this.$tipBox(error);
                })
        }
    },
};
</script>
<style lang="less" scoped>
.footer-box {
    position: absolute;
    bottom: 0rem;
    // background-color: red;
    height: @bottomHeight;
    width: 100%;
    border-top: 1px solid @gray-light;
    > .comment-input {
        font-size: 0.24rem;
        margin: 0.2rem;
        background-color: @gray-ee;
        height: @bottomHeight - 0.4rem;
        line-height: @bottomHeight - 0.4rem;
        border-radius: 1000rem;
        cursor: pointer;
        color: @gray;
        padding: 0rem 0.2rem;
    }
    > .comment-detail {
        position: fixed;
        bottom: 0rem;
        top: 0rem;
        left: 0rem;
        right: 0rem;
        margin: 0 auto;
        max-width: 750px;
        // display: none;
        background-color: fade(black, 50%);
        > .user-input {
            position: absolute;
            bottom: 0rem;
            max-height: 100%;
            left: 0rem;
            right: 0rem;
            padding: 0.2rem;
            background-color: #f8f9fa;
            overflow-y: auto;
            box-sizing: border-box;
            > h4 {
                font-size: 0.28rem;
                font-weight: normal;
                // padding: 0.1rem;
                color: @gray;
                padding-bottom: 0.1rem;
            }
            > .user-head {
                list-style: none;
                font-size: 0rem;
                width: 100%;
                overflow-y: scroll;
                height: 2rem;
                background-color: #ddd;
                border-radius: 0.2rem;
                margin-bottom: 0.2rem;
                > li {
                    display: inline-block;
                    background-repeat: no-repeat;
                    width: 0.8rem;
                    height: 0.8rem;
                    margin: 0.1rem;
                    box-sizing: border-box;
                    background-size: cover;
                    border-radius: 50%;
                    vertical-align: top;
                }
                > .user-choose::after {
                    content: "";
                    background-image: url("../../public/imgs/success.png");
                    display: inline-block;
                    width: 0.8rem;
                    height: 0.8rem;
                    background-repeat: no-repeat;
                    background-size: 80%;
                    background-position: center;
                    background-color: fade(black, 70%);
                    border-radius: 50%;
                }
            }
            > .user-nikename {
                box-sizing: border-box;
                border: none;
                background-color: #ddd;
                display: block;
                font-size: 0.24rem;
                padding: 0.2rem 0.2rem;
                width: 100%;
                border-radius: 0.2rem;
                outline: none;
                margin-bottom: 0.2rem;
            }
            > .reset-star {
                margin-bottom: 0.2rem;
                > span {
                    height: 0.4rem !important;
                    width: 0.4rem !important;
                    line-height: 0.4rem !important;
                }
                > .star-source {
                    font-size: 0.52rem !important;
                    color: @gray!important;
                }
            }
            .user-message {
                outline: none;
                border: none;
                display: block;
                width: 100%;
                background-color: #ddd;
                font-size: 0.24rem;
                padding: 0.2rem 0.2rem;
                border-radius: 0.2rem;
                box-sizing: border-box;
                height: 2rem;
                margin-bottom: 0.2rem;
                resize: none;
            }
            .send-btn {
                color: @gray;
                font-size: 0.3rem;
                &::after {
                    content: "";
                    display: block;
                    clear: both;
                }
                > span {
                    padding: 0.1rem 0.2rem;
                    cursor: pointer;
                }
                > span:first-child {
                    float: left;
                }
                > span:nth-child(1) {
                    float: right;
                }
            }
        }
    }
}
</style>