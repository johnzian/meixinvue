<template>
  <div>
	<!-- 首页工具栏 -->
	<div id="toolbar">																																				<!-- 网页头登陆导航 -->
		<ul id="tool_left">
			<li class="welcome">您好，欢迎光临美心西饼</li>
			<li  v-if="!$store.state.islogin"><router-link :to="{ name: 'login'}" class="login">登陆</router-link></li>
			<li  v-if="!$store.state.islogin"><router-link :to="{ name: 'register'}" class="register">注册</router-link></li>
			<li  v-if="$store.state.islogin"><span class="register">欢迎回来，{{$store.state.userinfo.uphone}}</span></li>
			<li><div id="weixin">微信商城<img src="../assets/img/jiantou_03.png"></div></li>
		</ul>
		<ul id="tools_right">
			<li class="tool_right"><router-link :to="{ name: 'personalcenter'}">个人中心</router-link></li>
			<li class="tool_right"><a href="MeiXinphone/Main.html">响应式VUE单页面版</a></li>
			<li class="tool_right">分享到：</li>
			<li class="tool_right"><a href="javascript:;">切换繁体</a></li>
		</ul>
	</div>
	<div class="headerMiddle clear">
		<div class="logo">
			<router-link :to="{ name: 'index'}"><img src="../assets/img/201707181448325969790.jpg" id="logo"></router-link>
		</div>
		<div id="shoppingcart">
			<router-link :to="{ name: 'cart',params:{uid:$store.state.userinfo.uid}}"><span>购物车<span class="cart_count">{{$store.state.userinfo.cartcount}}</span>件</span></router-link>
		</div>
		<div id="search">
			<input type="text" placeholder="输入关键字" id="input_serach" v-model="keyword">
			<input type="button" id="btn_serach" value="搜索" @click="search()">
		</div>
	</div>
	<div id="navbar">
		<div id="navbar_all"><a href="javascript:;">全部商品分类</a></div>
		<ul>
			<li><router-link :to="{ name: 'index'}">首页</router-link></li>
			<li class="navbar_big"><router-link :to="{ name: 'productlist', query: { type: 1001 }}">蛋糕馆</router-link></li>
			<li class="navbar_big"><router-link :to="{ name: 'productlist', query: { type: 1002 }}">订饼快线</router-link></li>
			<li class="navbar_big"><router-link :to="{ name: 'productlist', query: { type: 1003 }}">零食点心</router-link></li>
			<li class="navbar_big"><router-link :to="{ name: 'productlist', query: { type: 404 }}">美粉专场</router-link></li>
		</ul>
	</div>
  </div>
</template>

<script>
	import store from '@/store/store'
  export default{
	  data(){
		  return{
			  islogin:true,//检测是否登录
			  keyword:"",//搜索内容
			userinfo:{//vuex变量
				  uid:0,
				  uphone:0,
				  cartcount:0
			  },
		  }
	  },
	  mounted:function(){
		  this.checklogin();
	  },
	  methods:{
		  //搜索
		  search(){
			  this.$router.push({
				  name:'productsearch',
				  query:{kw:this.keyword}
			  })
		  },
		  //检测是否登录，用于解决vuex刷新丢失问题
		  checklogin(){
			  console.log(sessionStorage.getItem("uphone"))
			  if(sessionStorage.getItem("uid") && sessionStorage.getItem("uphone")){
				this.userinfo.uid = sessionStorage.getItem("uid");
				this.userinfo.uphone = sessionStorage.getItem("uphone");
				this.$store.commit('login',this.userinfo);
				this.$axios.get('http://127.0.0.1/meixinvue/src/server/php/route/cart_check.php?uid='+this.userinfo.uid)
				.then((res)=>{
					this.userinfo.cartcount=parseInt(res.data);
					this.$store.commit('checkcart',this.userinfo.cartcount);
					this.$router.push({name: 'index'});
				})
			  }
		  }
	  }
  }
</script>
<style scoped>
#toolbar{
	width:100%;
	height:30px;
	background-color:#f7f7f7;
	border-bottom:1px solid #f2f2f2;
	color:#585858;
	font-size:12px;
	line-height:30px
}
.register,.login{
	margin-left:15px;
	color:red;
}
#tool_left{
	float: left;
	padding-left:35px;
}
#toolbar li{
	float:left;
}
#weixin{
	margin-left:30px;
}
#tools_right{
	float:right;
	padding-right:35px;
}
.tool_right{
	margin-left:35px;
}
.tool_right>a{
	color:#666666;
}
.tool_right>a:hover{
	color:#fe5722;
}
	/*网页头部设计*/
.header{
	height:166px;
	padding-top:10px;
	box-sizing:border-box;
	background-color:#fff;
}
.headerMiddle{
	padding: 20px 35px 35px 40px;
}
.logo{
	float: left;
}
#logo{
	width:225px;
	height:65px;
}
#search{
	float: right;
}
#input_serach{
	width:319px;
	height:34px;
	margin-left:320px;
	margin-top:27px;
	border:1px solid #e16300;
	padding-left:10px;
}
#btn_serach{
	width:88px;
	height:38px;
	background-color:#e16300;
	outline:none;
	border:none;
	color:white;
	margin-left:-8px;
	cursor:pointer;
	position:relative;
	top:1px;
}
#shoppingcart{
	width:140px;
	height:38px;
	background-image:url(../assets/img/b4622be217307ffa82f706f2b6e270ed_cart-140-34.jpg);
	border:1px solid #dfdfdf;
	margin-left:50px;
	margin-top:27px;
	float: right;
}
#shoppingcart a{
	color:#666;
	margin-left:44px;
	line-height:34px;
}

/* 导航栏 */
#navbar{
	height:42px;
	margin-top:27px;
    width: 100%;

}
#navbar_all{
	width:224px;
	height:42px;
	background-color:#e16300;
	text-align:center;
	line-height: 42px;
	float:left;
}
#navbar_all a{
	color:#fff;
	font-size:16px;
	display:block;
}
#navbar li{
	float:left;
	width:104px ;
	height:42px;
	text-align:center;
}
#navbar li a{
	color:#585858;
	font-size:16px;
	line-height: 42px;
}
#navbar li a:hover{
	color:#fe5722;
}
.navbar_big{
	
	margin-left: 15px;
}
</style>

