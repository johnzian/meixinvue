<template>
  <div class="main">
      			<!-- 面包屑导航 -->
			<div class="bread">
				<a href="index.html">首页</a>>><a href="javascript:;">蛋糕馆</a>
			</div>
			<div class="main_detail">
				<!-- 左边的导航栏 -->
				<div class="nav_left">
					<!-- 一楼 -->
					<div class="floor_left_top">
						<div class="nav_title">
							<router-link :to="{ name: 'productlist', query: { type: 1001 }}">
								蛋糕馆
							</router-link>
						</div>
						<div class="nav_list">
							<ul>
								<li><a href="#">与爱共尝</a></li>
								<li><a href="#">心意造型</a></li>
								<li><a href="#">童心同乐</a></li>
								<li><a href="#">欢庆FUN享</a></li>
								<li><a href="#">夏日系列</a></li>
								<li><a href="#">8折优惠</a></li>
							</ul>
						</div>
						<div class="left_block"></div>
						<div class="nav_title"><router-link :to="{ name: 'productlist', query: { type: 1002 }}">订饼快线</router-link></div>
						<div class="left_block"></div>
						<div class="nav_title"><router-link :to="{ name: 'productlist', query: { type: 1003 }}">零食点心</router-link></div>
						<div class="left_block"></div>
						<div class="nav_title"><a href="javascript:;">秋季人气推荐</a></div>
						<div class="left_block"></div>
						<div class="nav_title"><a href="javascript:;">手信礼盒</a></div>
						<div class="left_block"></div>
					</div>
				</div>
				
				<!-- 右边的主页 -->
				<div class="nav_right">
					<!-- 右边的主页头 -->
					<div class="sub_category">
						<p>按子分类选择</p>
						<div>
							<a href="products_loveshare.html">与爱共尝</a>
							<a href="products_lovestyle.html">心意造型</a>
							<a href="products_child.html">童心同乐</a>
							<a href="products_happyshare.html">欢庆FUN享</a>
							<a href="javascript:;">夏日系列</a>
							<a href="javascript:;">8折优惠</a>
						</div>
					</div>

					<!-- 右边的搜索框 -->

					<div class="sub_search">
						<div class="sub_search_top">
							<span>关键字：</span><input type="text" id="search_choice_main"><button id="class_search_btn">搜索</button>
						</div>
						<div class="class_choice">
							<a href="products_mango.html" class="cakes_sub">芒果</a>
							<a href="products_milk.html" class="cakes_sub">牛奶</a>
							<a href="products_chess.html" class="cakes_sub">芝士</a>
							<a href="products_cuicui.html" class="cakes_sub">脆脆</a>
							<a href="products_qiaokeli.html" class="cakes_sub">巧克力</a>
							<a href="products_sweet.html" class="cakes_sub">零食</a>
						</div>
					</div>


					<!-- 产品列表 -->
					<div class="products_main">
						<div class="products_inside">
							<ul class="products_ul">
								<li class="products" v-for="(items,index) in productList" :key="index">
									<router-link :to="{ name: 'productdetail', params: { pid: items.pid }}" class="product_pic_title">
										<img :src="'../../static/'+items.sbimg" alt="">
										<p>{{items.title}}</p>
									</router-link>
									<p><span class="price">￥{{items.nprice}}</span><span class="normalpirce">￥{{items.mprice}}</span></p>
								</li>
							</ul>
						</div>
						<page></page>
					</div>
				</div>
			</div>
  </div>
</template>

<script>
import page from '@/components/page';
  export default{
    components:{
      page,
    },
      data:function(){
          return{
			  productList:[],
			  type:0
          }
	  },
	  created:function(){
		this.getproduct();
	  },
	  methods:{
		  getproduct(){
			this.type=this.$route.query.type;//把地址接受到的quey的品种号赋给变量
			  this.productList=[];//每一次使用函数都刷新，为了分页准备
			  if(this.type>1000){
				  if(this.type==1001){//如果是蛋糕馆
					  this.$http.get('http://127.0.0.1/meixinvue/src/server/php/route/cake_list.php')
					  .then(function(res){
						  this.productList=res.data.data;
					  })
				  }else if(this.type==1002){//快线
					  this.$http.get('http://127.0.0.1/meixinvue/src/server/php/route/quick_list.php')
					  .then(function(res){
						  this.productList=res.data.data;
					  })
				  }else if(this.type==1003){//零食
					  this.$http.get('http://127.0.0.1/meixinvue/src/server/php/route/desert_list.php')
					  .then(function(res){
						  this.productList=res.data.data;
					  })
				  }
			  }else{

			  }
		  }
	  },
	  watch:{
		  '$route':['getproduct']//负责监听路由是否变化
	  }
  }
</script>
<style scoped>
    .main{
	margin-top:8px;
}
.main_detail{
	display: flex;
    justify-content: center;
}
/*面包屑*/
.bread a{
	font-size:14px;
}
.bread{
	padding: 5px 75px;
}

/*左边导航*/
.nav_left{
	width:208px;
}
.floor_left,.floor_left_top{
	border-top:2px solid #e16300;
	margin-top:10px;
	border-bottom: 1px solid #ddd;
}
.floor_left>div,.floor_left_top>div{
	padding-left:15px;
	border:1px solid #ddd;
	padding-right:15px;
}
.floor_left>div a:hover,.floor_left_top>div a:hover{
    color: #fe5722;
}
.nav_title{
	line-height:30px;
	height:30px;
	font-size:15px;
}
.nav_list>ul{
	display:flex;
	flex-wrap:wrap;
	padding:5px 0px;
	justify-content:space-between;
}
.nav_list>ul>li{
	display:block;
	width:80px;
	height:24px;
}
.left_block{
	width:208px;
	padding:8px;
	border:1px solid #ddd;
}
/*排行榜*/
.paixing_main{
	overflow:hidden;
	height:310px;
}
.paixing{
	padding-top:5px;
	padding-bottom:5px;
	position:relative;
	top:0px;
	transition:2s;
}
.paixing_topthree,.paixing_others{
	border:1px solid #ff2e2e;
	border-radius:50%;
	width:16px;
	height:16px;
	line-height:15px;
	text-align:center;
	color:#ff2e2e;
	float:left;
	margin-right:10px;
	font-weight:bold;
}
.paixing_others{
	color:#9f9f9f;
	border:1px solid #9f9f9f;
}
.paixing_detail{
	float:left;
}
.paixing>li{
	clear:both;
	height:80px;
}

.paixing_detail>a>img{
	width:60px;
	float:left;
}
.paixing_detail>a>div{
	float:left;
	margin-left:8px;

}
.paixing_detail>a>div>p:nth-child(1){
	text-overflow:ellipsis;
	white-space:nowrap;
	overflow:hidden;
	width:82px;
}
.paixing_detail>a>div>p:nth-child(2){
	margin-top:30px;
	color:#ff2e2e;
	font-size:14px;
}
.paixing_gotop,.paixing_godown{
	text-align:center;
	font-size:50px;
	height:40px;
	line-height:40px;
	color:#ff2e2e;
	font-weight:bold;
	display:block;
	border-left:1px solid #ddd;
	border-right:1px solid #ddd;
}


/*右边详情页的分类*/

.nav_right{
	width: 980px;
	margin-top: 10px;
}
.sub_category{
	border: 1px solid #ddd;
    padding: 0px 10px;
	width:100%;
    margin-left: 25px;
}
.sub_category p:nth-child(1){
	font-size: 14px;
    font-weight: bold;
    color: #333333;
    height: 30px;
    line-height: 30px;
}
.sub_category div:nth-child(2){
	padding: 10px 0px;
}
.sub_category div:nth-child(2)>a{
	margin-right: 20px;
	color: #535353;
    white-space: normal;
}
.sub_category div:nth-child(2)>a:hover{
	color:#ff2e2e;
}

/*分类搜索*/
.sub_search{
	margin-top: 30px;
    border: 1px solid #dbdbdb;
    border-top: 2px solid #e16300;
    padding: 10px 18px;
    margin-left: 25px;
}
.sub_search_top{
    line-height: 20px;
    margin-bottom: 10px;
}
#class_search{
	border: 2px solid #e16300;
    padding-left: 10px;
    height: 20px;
    outline: none;
}
#class_search_btn{
	border: 2px solid #e16300;
    height: 26px;
    background-color: #e16300;
    position: relative;
    top: 1px;
    color: #fff;
    outline: none;
    cursor: pointer;
}
.search_choice_main{
    line-height: 20px;
    height: 20px;
}
.search_choice{
	position: relative;
    top: 2px;
}
.cakes_sub:hover{
	color: #e16300;
}


/*商品分页*/
.products_main{
    margin-top: 20px;
}

.products_ul{
	display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.products{
	margin-bottom: 20px;
	margin-left: 25px;
}

.product_pic_title>img{
	width: 220px;
    height: 220px;
}
.product_pic_title>p{
	margin-top: 10px;
    margin-bottom: 10px;
	display:block;
	text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 220px;
}
.product_pic_title>p:hover{
	color:#ff2d2e;
}
.price{
	float: left;
    color: #ff2d2e;
    padding-right: 10px;
    font-size: 14px;
}
.normalpirce{
	float: left;
    text-decoration: line-through;
    margin-top: 2px;
    color: #999;
}


</style>