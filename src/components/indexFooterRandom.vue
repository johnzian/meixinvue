<template>
  <div class="footer_random">
      <div class="footer_random_inside">
					<ul class="footer_random_ul">
            <li class="footer_random_pic" v-for="(item,index) in productlist" :key="index">
							<router-link :to="{ name: 'productdetail',params:{pid:item.pid}}">
									<img :src="'../../static/'+item.limg" alt="1">
							</router-link>
            </li>
          </ul>
			</div>
  </div>
</template>

<script>
  export default{
    data:function(){
      return{
        productlist:[]
      }
		},
		mounted(){
				this.$http.get('http://127.0.0.1/meixinvue/src/server/php/route/index_footer_random.php')
        .then(function(res){
					for(var i=0;i<7;i++){
						this.productlist.push(res.data[parseInt(Math.random()*(res.data.length))]);
					}
				})
		}
  }
</script>
<style scoped>
/*底部随机产品图*/
.footer_random{
	width:100%;
	height:200px;
	padding-top:20px;
	overflow: hidden;
}
.footer_random_inside{
	overflow: hidden;
	position: relative;
}
.footer_random_ul{
	display:flex;
	transition: all 1s;
  justify-content: center;
}
.footer_random_pic{
	width:174px;
	height:180px;
	display:block;
	overflow:hidden;
}
.footer_random_pic a img:hover{
	transform:scale(1.2);
}
.footer_random_pic>a>img{
	width:174px;
	height:180px;
	transition: all 1s;
	overflow:hidden;
}
</style>