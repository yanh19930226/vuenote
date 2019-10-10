<template>
    <div>
        <h1>测试</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: []
        };
    },
    methods: {
        // 部分低版本浏览器无法实现同步功能(实现类型和对应类型数据的加载)
        async load() {
           try {
                let list = await this.$api.Test();
                for (let i = 0; i < list.length; i++) {
                    let res = await this.$api.TestParam({
                        typeId: list[i].typeId
                    });
                    list[i].list = res;
                }
                this.list = list;
            } catch (error) {
                let msg = typeof error === "object" ? "网络错误" : error;
                this.$tipBox(msg, 3000);
            }
        }
    },
    mounted() {
        this.load();
    }
}
</script>
<style lang="less" scoped>

</style>