<template>
  <div class="main">
	<!-- 面包屑导航 -->
	<div class="bread">
				<a href="index.html">首页</a>>><a href="javascript:;" class="bread_now">{{product.title}}</a>
	</div>

	<!-- 产品详情 -->
	<div class="product_main">
				<!-- 产品详情上半部分 -->
				<div class="details_top">
					<!-- 上半的左边图片 -->
					<div class="details_top_left">
						<div class="smallbox">
							<img class="smallpic" :src="'../../static/'+product.sbimg">
							<div class="floatbox"></div>
						</div>
						<div class="bigbox">
							<img class="bigpic" src="../assets/img/220_201611211511533145590.jpg" alt="">
						</div>
						<div>
							<ul class="productpic_list">

							</ul>
						</div>

					</div>
					<!--上右的商品选项-->
					<div class="details_top_right">
						<p class="title">{{product.title}}</p>
						<p class="describe">
							{{product.subtitle}}
						</p>
						<div class="price_box">
							<p class="normal_pirce">市场价：<span class="normal_yuan">¥{{product.mprice}}</span><span class="normal_money"></span></p>
							<p class="now_price">现售价：<span class="now_yuan">¥{{product.nprice}}</span><span class="now_money"></span></p>
						</div>
                        <div><p class="when_pick">预计取饼时间：<span class="when_time">2017-2-05</span></p></div>
						<ul class="product_pound">
							<li class="product_first">重量：</li>
							<li class="pound_li">{{product.pound}}磅</li>
						</ul>
						<ul class="product_tase">
							<li class="product_first">口味：</li>
							<li class="tase_li">{{product.taste}}</li>
						</ul>
						<div class="user_choice">请选择：<span class="check_pound"></span><span class="check_taste"></span></div>
						<div class="product_num">
							<span class="count_title">数量：</span>
							<input type="text" defalutvalue=1 id="product_count">
							<span>个</span>
						</div>
						<div class="product_else">
							<span class="bless_title">贺词：</span>
							<div class="user_bless">
								<input type="text" class="product_bless" placeholder="此处不填写则表示不需要巧克力牌" maxlength="20">
							</div>

						</div>
						<div class="else_warning">
							巧克力牌加￥10；2磅或以上蛋糕免费送一个，可自订贺词，最多10个中文字、15个中英文混合字或20个英文字，标点符号或换行以空格替代
						</div>
						<div class="warm_warning">
							温馨提示：订单支付成功后，如未能及时收到确认短信或个人中心订单状态没有变化，可凭手机号码取饼。
						</div>
						<div class="product_buy">
							<button class="buy_now">立即购买</button>
							<button class="add_cart">加入购物车</button>
						</div>
					</div>
				</div>
				<!-- 详情页的中间部分-->
				<div class="details_middle">
					<!-- 中左部分-->
					<div class="details_middle_left">
						<div class="topsales">
							<p>热销推荐</p>
							<ul class="topsales_ul">
                                <li class="topsales_li" v-for="(items,index) in topSales" :key="index">
                                    <router-link :to="{ name: 'productdetail', query: { pid: items.pid }}" class="topsales_a">
                                    <img class="topsales_img" :src="'../../static/'+items.mimg"/>
                                        <div class="topsales_font">
                                            <p class="topsales_title">{{items.title}}</p>
                                            <p class="topsales_price">¥{{items.nprice}}</p>
                                        </div>
                                    </router-link>
                                </li>
							</ul>
						</div>
					</div>
					<!-- 中右部分-->
					<div class="details_middle_right">
						<div class="product_details_title">
							<div class="product_details_title_inside">商品详情</div>
						</div>
						<div class="product_details_pic">
                            <img src="../assets/img/220_201611211511533145590.jpg" alt="">
                            <p class="pic_warning">*本商品不适用七日无理由退货</p>
						</div>
					</div>

				</div>
				<!-- 底部-->
				<div class="product_footer">
					<p class="maybe">猜你喜欢</p>
					<ul class="product_footer_ul">
						<li class="product_footer_li" v-for="(items,index) in maybe" :key="index">
							<router-link :to="{ name: 'productdetail', query: { pid: items.pid }}" class="product_footer_a">
								<img class="product_footer_img" :src="'../../static/'+items.limg"/>
								<p class="product_footer_title">{{items.title}}</p>
								<p class="product_footer_price">¥{{items.nprice}}</p>
							</router-link>
						</li>
					</ul>
				</div>
    </div>
    <!-- 提示弹出框 -->
    <div>
    		<div class="warning_login">
			<div class="warning_close">关闭</div>
			<div class="warning_main">你还没有登陆哦！</div>
			<div class="warning_footer">
				<a href="login.HTML" target="_blank" class="warning_btn">我去登陆</a>
				<a href="register.HTML" target="_blank" class="warning_btn">我去注册</a>
			</div>
		</div>
		<div class="warning_cart">
			<div class="warning_close">关闭</div>
			<div class="warning_main">加入购物车成功</div>
			<div class="warning_footer">
				<a href="javascript:;" class="keep_shopping">继续购物</a>
				<a href="shopping_cart.html" target="_self" class="warning_btn">现在结算</a>
			</div>
		</div>
    </div>
  </div>
</template>

<script>
  export default{
      data(){
          return{
              topSales:[],
			  maybe:[],
			  product:{}
          }
      },
	  mounted(){
		  this.getproduct();
		  this.gettopsales();
		  this.maybelike();
	  },
	  methods:{
		  getproduct(){
			  this.$http.get('http://127.0.0.1/meixinvue/src/server/php/route/getproductbyid.php?pid='+this.$route.query.pid)
			  .then(function(res){
				  this.product=res.data;
			  })
		  },
		  gettopsales(){
			  this.$http.get('http://127.0.0.1/meixinvue/src/server/php/route/top_ten.php')
			  .then(function(res){
				  this.topSales=res.data;
			  })
		  },
		  maybelike(){
			this.$http.get('http://127.0.0.1/meixinvue/src/server/php/route/maybelike.php?pid='+this.$route.query.pid)
			.then(function(res){
				this.maybe=res.data;
				console.log(res.data);
			})
		  }
	  },
	  watch:{
		  '$route':'getproduct'
	  }
  }
</script>
<style scoped>
.main{
	margin-top:8px;
    padding: 0px 75px;
}
/*面包屑*/
.bread a{
	font-size:12px;
}

.details_top_left{
	position:relative;
	float:left;
}

/*放大镜*/

.smallbox{
	border:5px solid transparent;
	transition:2s;
	width: 400px;
    height: 400px;
    float: left;
	overflow:hidden;
}
.smallbox:hover{
	border:5px solid #dfdfdf;
}
.smallpic{
	width: 400px;
}
.floatbox{
	width: 100px;
    height: 100px;
	position: absolute;  
    background: #e16300;  
	opacity: 0.5;  
    cursor: move;
	display: none;
}
.bigbox{
	float: left;
    width: 400px;
    height: 400px;
    overflow: hidden;
    position: absolute;
    left: 420px;
	z-index: 1; 
	border:5px solid #dfdfdf;
	display: none;
}
.bigpic{
	width: 1600px;
	position: relative;  
    z-index: 1;
}
/*左图列表*/
.productpic_list{
	display: flex;
	clear: both;
	padding-top: 10px;
}
.little_pic_li{
	width: 60px;
	margin-right: 15px;
	border: 1px solid #dfdfdf;
	margin-left: 5px;
}
.little_pic_li>a>img{
	width: 60px;
}

/*上右选项*/
.details_top_right{
	float: left;
	margin-left: 25px;
	width: 530px;
	border-right: 1px solid #eeeeee;
	padding-right: 25px;
	position: relative;
}
.title{
	font-size: 18px;
	color: #000;
	height: 40px;
	line-height: 40px;
	width: 530px;
	overflow: hidden;
}
.describe{
	color: #bfbfbf;
	margin-bottom: 10px;
}
.price_box{
	width: 530px;
	padding: 15px 0px;
	background-image: linear-gradient(to right,#ffffff,grey);
}
.normal_pirce{
	letter-spacing: 1px;
	color: #515152;
	clear: both;
	margin-left: 20px;
}
.normal_money{
	font-size: 14px;
	color: #616162;
	text-decoration: line-through;
}
.now_price{
	color: #515152;
	clear: both;
	margin-left: 20px;
	letter-spacing: 1px;
}
.now_money{
	font-family: "microsoft yahei";
	margin-top: -7px;
	font-weight: bold;
	font-size: 30px;
	color: #ff5417;
}
.normal_yuan{
	margin-left: 5px;
	font-size: 14px;
	color: #616162;
	text-decoration: line-through;
}
.now_yuan{
	margin-left: 5px;
	font-weight: bold;
	font-size: 30px;
	color: #ff5417;
}
.when_pick{
	margin-left: 20px;
}
.when_time{

}

.product_pound{
	display: flex;
	margin-left: 20px;
	margin-top: 15px;
}
.product_first{
	display: block;
	width: 66px;
	line-height: 32px;
}
.pound_li{
	display: block;
	border: 1px solid #e1e1e1;
	background: #fff;
	padding: 1px 10px;
	line-height: 32px;
	color: #585858;
	margin-right: 10px;
	cursor: pointer;
	height: 32px;
}
.pound_li.active{
	color: #ff5417;
	border: 1px solid #ff5417;
}
.product_tase{
	display: none;
	margin-left: 20px;
	margin-top: 15px;
}
.tase_li{
	display: block;
	border: 1px solid #e1e1e1;
	background: #fff;
	padding: 1px 10px;
	line-height: 32px;
	color: #585858;
	margin-right: 10px;
	cursor: pointer;
	height: 32px;
}
.tase_li.active{
	color: #ff5417;
	border: 1px solid #ff5417;
}
.user_choice{
	margin-left: 20px;
	margin-top: 15px;
	color: red;
	display: none;
}
.product_num{
	margin-left: 20px;
	margin-top: 15px;
	display: flex;
	line-height: 40px;
}
.count_title{
	display: block;
	width: 66px;
	line-height: 32px;
}
#product_count{
	border: 1px solid #e1e1e1;
	padding: 5px 22px;
	background: none;
	width: 60px;
	text-align: center;
	height: 28px;
	line-height: 28px;
	margin-right: 20px;
}
.product_else{
	margin-left: 20px;
	margin-top: 15px;
	display: flex;
	flex-wrap: wrap;
}
.bless_title{
display: block;
width: 66px;
line-height: 32px;
}
.user_bless{
	width: 400px;
}
.product_bless{
width: 400px;
text-align: left;
height: 55px;
margin-top: 10px;
}
.else_warning{
	margin-left: 20px;
	margin-top: 15px;
}
.warm_warning{
	margin-left: 20px;
	margin-top: 15px;
	color: red;
}
.product_buy{
	margin-left: 20px;
	margin-top: 15px;
}
.buy_now{
	color: #e16300;
	font-weight: bold;
	text-align: center;
	font-size: 16px;
	width: 196px;
	height: 36px;
	line-height: 36px;
	border: 2px solid #e16300;
	outline: none;
	cursor: pointer;
	background: #fff;
}
.add_cart{
	width: 200px;
	background: #e16300;
	height: 36px;
	line-height: 36px;
	overflow: hidden;
	font-size: 16px;
	color: #fff;
	margin-left: 15px;
	outline: none;
	cursor: pointer;
	border: 2px solid #e16300;
	text-align: center;
	font-weight: bold;
}

/*商品详情的中间左部分*/
.details_middle{
	clear: both;
	display: flex;
	padding-top: 20px;
}
.details_middle_left{
	border: 1px solid #eeeeee;
	width: 208px;
	overflow: hidden;
}
.topsales{
	font-size: 16px;
	line-height: 40px;
	padding-left: 15px;
	color: #4c4c4c;
}
.topsales_ul{

}
.topsales_li{
	border-bottom: 1px dotted #888;
	padding-top: 15px;
}
.topsales_a{
	display: flex;
	line-height: 31px;
}
.topsales_img{
	max-width: 60px;
	max-height: 60px;
}
.topsales_font{
	margin-left: 10px;
}
.topsales_title{
	height: 36px;
	line-height: 20px;
	font-size: 12px;
}
.topsales_price{
	color: #ff2d2e;
	font-weight: normal;
	font-size: 16px;

}
/*商品中右部分*/
.details_middle_right{
	width: 100%;
	overflow: hidden;
	margin-left: 15px;
}
.product_details_title{
	height: 40px;
	line-height: 40px;
	border: 1px solid #eeeeee;
	margin-bottom: 20px;
}
.product_details_title_inside{
	background: #FFF;
	height: 38px;
	border-top: 2px solid #e16300;
	border-bottom: 1px solid #fff;
	border-left: 1px solid #e16300;
	border-right: 1px solid #e16300;
	width: 140px;
	text-align: center;
}
.product_details_pic{

}
.details_pic_img{

}
.pic_warning{
	font-size: 24px;
}

/*产品详细底部*/
.product_footer{
	border: 1px solid #eeeeee;
	margin-top: 20px;
}
.maybe{
	font-weight: normal;
	padding-left: 15px;
	color: #4c4c4c;
	height: 40px;
	font-size: 16px;
	line-height: 40px;
}
.product_footer_ul{
	overflow: hidden;
	margin: 10px 0px;
	display: flex;
	justify-content: space-between;
	padding: 0px 15px;
}
.product_footer_li{
	width: 160px;
	overflow: hidden;
	text-align: center;
}
.product_footer_a{

}
.product_footer_img{
	width: 160px;
	overflow: hidden;
}
.product_footer_title{
	height: 36px;
	line-height: 18px;
	overflow: hidden;
	margin-top: 10px;
}
.product_footer_price{
	color: #ff5417;
	font-weight: bold;
}
/*未登陆提示*/
.warning_login{
	position: fixed;
	top: 40%;
	left: 31%;
	width: 40%;
	height: 0%;
	border: 1px solid black;
	margin: 0 auto;
	background: #fff;
	border-radius: 10%;
	padding-top: 1%;
	display: none;
}
.warning_close{
	float: right;
	width: 10%;
	height: 10%;
	line-height: 200%;
	cursor: pointer;
	text-align: center;
}
.warning_main{
	clear: both;
	height: 50%;
	text-align: center;
	line-height: 300%;
	font-size: 30px;
	color: #ff5417;
}
.warning_footer{
	height: 40%;
	padding-left: 10%;
	padding-right: 10%;
	display: flex;
	justify-content: space-around;
}
.warning_btn,.keep_shopping{
	display: inline-block;
	line-height: 200%;
	border: 3px solid #ff5417;
	width: 25%;
	height: 70%;
	text-align: center;
	border-radius: 20%;
	color: black;
	font-weight: bold;
	font-size: 26px;
}
.warning_cart{
	position: fixed;
	top: 40%;
	left: 31%;
	width: 40%;
	height: 0%;
	border: 1px solid black;
	margin: 0 auto;
	background: #fff;
	border-radius: 10%;
	padding-top: 1%;
	display: none;
}

</style>