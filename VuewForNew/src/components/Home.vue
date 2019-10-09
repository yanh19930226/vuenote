<template>
    <div class="content">
      <Slider></Slider>
      <div class="newsList">
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <router-link :to="'/article/'+item.id">
	                	<h2>{{index+1}} . {{item.title}}</h2>
	                    <p>{{item.detail}}</p>
	          </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
import Slider from './Slider.vue'
export default {
  data(){
    return {
      list:[]
    }
  },
  mounted(){
     this.fetchdata();
  },
  methods:{
    fetchdata(){
        var _this=this;
				this.$http.get('src/data/index.data').then(function(res){
						_this.list=res.data;
				}).catch(function(err){
					console.log(err);
				});
    }
  },
  components:{
    Slider
  }
}

</script>
<style scoped>
@import '../assets/css/index.css';
</style>
