<template>
  <div class="main">
      <div id="login_div">
				<div id="login_place">
					<div id="login_form">
						<div id="user_login" class="user_loginclass" v-bind:class="{ 'user_loginclass hover' : isA, 'user_loginclass': !isA}" @click="show(true)">&nbsp;用户登录&nbsp;</div>
						<div id="phone_login" class="phone_loginclass" v-bind:class="{ 'phone_loginclass hover' : !isA, 'phone_loginclass': isA}" @click="show(false)">&nbsp;手机号登陆&nbsp;</div>


						<div id="user_place" v-if="showwhat">
							<div id="userName_place">账号<input type="text" placeholder="请输入手机号码" id="userName" v-model="username"></div>
							<div id="password_place">密码<input type="password" placeholder="请输入密码" id="pwd" v-model="password"></div>
							<div class="option">
								<div class="wenzi"><input type="checkbox" class="autologin">自动登录</div>
								<div class="wenzi">注册后有机会获得更多优惠!</div>
								<div class="zhuce_wangji">
									<div id="zhuce"><a href="register.html">立即注册</a></div><div id="wangji"><a href="#">忘记密码？</a></div>
								</div>
								<div class="tijiao"><input type="submit" id="login_btn" value="登陆" @click="nameLogin()"></div>
							</div>
						</div>


						<div id="phone_place" v-if="!showwhat">
							<div id="phoneName_place">手机号<input type="text" placeholder="请输入手机号码" id="phoneName" v-model="phone">
								<input type="button" id="getdongtai" :value="randomNumber" @click="getrandom()">
							</div>
							<div id="dongtai_place">动态码<input type="text" placeholder="请输入动态码" id="dongtai" v-model="checkRandom"></div>
							<div class="option">
								<div class="wenzi"><input type="checkbox">自动登录</div>
								<div class="wenzi">未注册的手机号验证后自动创建账号</div>
								<div class="wenzi">登录即表示你已阅读并同意<a href="tiaokuan.HTML">用户注册协议</a></div>
								<div class="tijiao"><input type="submit" id="phonelogin_btn" value="登陆" @click="phonelogin()"></div>
							</div>
						</div>	
					</div>
				</div>
			</div>
  </div>
</template>

<script>
	import store from '@/store/store'
  export default{
	  data(){
		  return{
			  showwhat:true,//显示变量
			  username:"",//用户名
			  password:"",//密码
			  userinfo:{//vuex变量
				  uid:0,
				  username:0,
			  },
			  isA:true,//样式切换
			  randomNumber:"点击获取验证码",//动态码模拟
			  checkRandom:"",//检测动态码
			  phone:"",//手机号登陆
		  }
	  },
	  methods:{
		  //样式切换
		  show:function(result){
			  this.showwhat=result;
			  this.isA=!this.isA;
		  },
		  //用户名登陆
		  nameLogin:function(){
			  this.$http.post('http://127.0.0.1/meixinvue/src/server/php/route/user_login.php?uphone='+this.username+'&upwd='+this.password)
			  .then(function(res){
				  if(res.body!=0){
					  alert('登录成功');
					  this.userinfo.uid=res.body.uid;
					  this.userinfo.uphone=this.username;
					  this.$store.commit('login',this.userinfo);
					  this.$router.push({name: 'index'});
					//   console.log(this.$store.state.userinfo);
				  }else{
					  alert('登陆失败');
				  };
			  })
			
		  },
		  //获取动态码
		  getrandom:function(){
			  this.randomNumber="";
			  for(let i=0;i<4;i++){
				  this.randomNumber+=(parseInt(Math.random()*10)).toString();
			  }
		  },
		  //手机号登陆
		  phonelogin:function(){
			  if(this.randomNumber==this.checkRandom){
				  this.$http.post('http://127.0.0.1/meixinvue/src/server/php/route/user_check.php?uphone='+this.phone)
				  .then(function(res){
					  if(res.body==1){//如果用户已经注册
							this.$http.post('http://127.0.0.1/meixinvue/src/server/php/route/phone_login.php?uphone='+this.phone)
							.then(function(res){
								if(res.body!=0){
									alert('登录成功');
									this.userinfo.uid=res.body.uid;
									this.userinfo.uphone=this.phone;
									this.$store.commit('login',this.userinfo);
									this.$router.push({name: 'index'});
								};
							})
					  }else{//如果用户没有注册
							this.$http.post('http://127.0.0.1/meixinvue/src/server/php/route/phone_register.php?uphone='+this.phone)
							.then(function(res){
									alert('注册成功并已登陆，密码为你的手机号');
									this.userinfo.uid=res.body.uid;
									this.userinfo.uphone=this.phone;
									this.$store.commit('login',this.userinfo);
									this.$router.push({name: 'index'});
							})
					  }
				  })
			  }
		  }
	  }
  }
</script>
<style scoped>
#header{
	width:100%;
	height:48px;
	margin-top:35px;
	margin-bottom:20px;
	padding-left:125px;
}
#logo{
	border-right:1px solid #e5e5e5;
	width:226px;
	height:40px;
	float:left;
}
#logo img{
	width:200px;
	height:40px;
}
#welcome{
	float:left;
	height:43px;
	padding-left:25px;
	font-size:24px;
	color:#585858;
	line-height:45px;
}

.main{
	width:101%;
	height:664px;
	background-image:url('../assets/img/20170411152505_0239.jpg');
	background-repeat:no-repeat;
	margin-left:-10px;
	padding-top:50px;
}
#login_div{
	width:1000px;
	height:380px;
	margin:0px auto;
}
#login_place{
	width:355px;
	height:380px;
	float:right;
}
#login_form{
	width:358px;
	height:380px;
	padding:35px 25px 15px 28px;
	background-color:#fff;
    border-radius: 10%;
}
#user_login{
	float:left;
	margin-left:5%;
	font-size:17px;
	color:#808080;
	cursor: pointer;
	margin-bottom:14px;
}
#phone_login{
	float:left;
	margin-left:20px;
	font-size:17px;
	color:#808080;
	cursor: pointer;
	margin-bottom:14px;
}
.hover{
	color:black !important;
	border-bottom:2px solid #ff5722;
	margin-bottom:12px;
	padding-bottom:11px;
}
#userName_place{
	clear:both;
	font-size:14px;
	color:#555;
}
#userName{
	width:224px;
	height:26px;
	margin-left:16px;
}
#password_place{
	margin-top:17px;
	font-size:14px;
	color:#555;
	margin-bottom:21px;
}
#pwd{
	width:224px;
	height:26px;
	margin-left:16px;
}
.option{
	width:305px;
	height:85px;
}
.wenzi{
	color:#6d6d6d;
	font-size: 12px; 
	margin-bottom:20px;
}
.wenzi input{
	margin-right:6px;
}
#zhuce{
	float:left;
	font-size: 12px; 
}
#wangji{
	text-align:right;
	float:left;
	font-size: 12px; 
	margin-left:170px;
}
.zhuce_wangji{
	width:100%;
}
.tijiao{
	clear:both;
	width:305px;
	height:65px;
}
#login_btn{
	width:300px;
	height:40px;
	background: #ff5500;
	line-height: 40px;
	margin-top:30px;
	color:white;
	border:none;
	cursor: pointer;
	font-size: 18px;
}


#phoneName_place{
	clear:both;
	font-size:14px;
	color:#555;
}
#phoneName{
	width:125px;
	height:26px;
	margin-left:16px;
}
#dongtai_place{
	margin-top:17px;
	font-size:14px;
	color:#555;
	margin-bottom:21px;
}
#dongtai{
	width:125px;
	height:26px;
	margin-left:16px;
}
#getdongtai{
	width:110px;
	height:28px;
	line-height:28px;
	margin-left:3px;
	border:none;
	font-size:13px;
	background-color:#fe5722;
	color:#fff;
	cursor: pointer;
}
#phonelogin_btn{
	width:300px;
	height:40px;
	background: #ff5500;
	line-height: 40px;
	margin-top:10px;
	color:white;
	border:none;
	cursor: pointer;
	font-size: 18px;
}
.wenzi a{
	color:#ff5500;
}
</style>