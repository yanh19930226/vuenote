<template>
    <!-- 页面功能区=>有且只有一个根节点 -->
    <div class="tip" :style=" 'animation-duration:'+time+'ms;' ">{{ msg }}</div>
</template>

<script>
export default {
    data() {
        return {
            msg: "",
            time: 3000
        };
    },
    mounted() {
        document.body.appendChild(this.$el);
        setTimeout(() => {
            document.body.removeChild(this.$el);
            this.$destroy();
        }, this.time);
    }
};
</script>

<style>
.tip {
    position: fixed;
    top: 0px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 5px 30px;
    border-radius: 6px;
    max-width: 60%;
    white-space: pre-wrap;
    word-break: break-word;
    box-sizing: border-box;
    animation-name: tipFade;
    animation-iteration-count: 1;
    /* animation-duration: 3s; */
}

@keyframes tipFade {
    0% {
        transform: translate(-50%, -100%);
        opacity: 0;
    }

    16% {
        transform: translate(-50%, 40px);
        opacity: 1;
    }

    84% {
        transform: translate(-50%, 40px);
        opacity: 1;
    }

    100% {
        transform: translate(-50%, -100%);
        opacity: 0;
    }
}
</style>