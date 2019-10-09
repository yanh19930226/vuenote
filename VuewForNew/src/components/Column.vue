<template>
    <div class="content mt">
      <div class="newsList">
        <ul>
         <li v-for="(item,index) in list" :key="index">
            <a href="">
            	<h2>{{index+1}} .{{item.title}}</h2>
              <p>{{item.detail}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
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
  }
}

</script>
<style scoped>
.mt{
    margin-top: 30px;
}
@import '../assets/css/index.css';
</style>