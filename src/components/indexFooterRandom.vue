<template>
  <div class="footer_random">
      <div class="footer_random_inside">
					<ul class="footer_random_ul">
            <li class="footer_random_pic" v-for="item in productlist" :key="item">
              <a href="product_details.html?pid=233">
                <img src="../assets/img/220_201611211511533145590.jpg">
              </a>
            </li>
          </ul>
			</div>
  </div>
</template>

<script>
  export default{
    data:function(){
      return{
        productlist:[1,2,3,4,5,6,7]
      }
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