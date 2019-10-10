<template>
  <div class="hello">你好</div>
</template>

<script>
export default {
  data() {
    return {
      msg:"你好"
    };
  },
   methods: {
    loadHomeData() {
      console.log(this);
      // this.$tipBox("测试", 3000);
    }
  },
  mounted() {
    this.loadHomeData();
  }
};
</script>

<style scoped lang="less">
</style>
