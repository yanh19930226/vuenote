<template>
  <div id="app">
    <HeaderBar></HeaderBar>
    <router-view></router-view>
    <FooterBar></FooterBar>
    <FiexdBtn></FiexdBtn>
  </div>
</template>
<script>
export default {
  name: "app",
  components: {
    HeaderBar: () => import("./components/HeaderBar"),
    FooterBar: () => import("./components/FooterBar"),
    FiexdBtn: () => import("./components/FixedBtn")
  },
  mounted() {
    console.log(this);
    // this.$tipBox("测试", 3000);
    // this.$api;
  }
};
</script>
<style lang="less">
@import "./less/base.less";
// .router-link-active{
//   color:red;
// }
// .router-link-exact-active{
//   color:red;
// }
</style>
<style lang="less" scoped>

</style>
