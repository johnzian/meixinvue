<template>
  <div class="registerForm">
      <div class="form_inside">
				<div class="place">
					<span class="wenzi">手机号码</span>
					<input type="text" id="phone" class="shuru">
					<span></span>
				</div>
				<div class="place">
					<span class="wenzi">密码</span>
					<input type="password" id="pwd" class="shuru">
					<span></span>
				</div>
				<div class="place">
					<span class="wenzi">确认密码</span>
					<input type="password" id="checkpwd" class="shuru">
					<span></span>
				</div>
				<div class="place_sex">
					<span class="wenzi">性别(选填) </span>
					<input type="radio" name="gender" value="1" class="sex" checked>男
					<input type="radio" name="gender" value="0" class="sex">女
				</div>
				<div class="place">
					<span class="wenzi">出生年月(选填)</span>
					<select class="birDate_year" id="year">
						<!--<option value="">1</option>-->
					</select>
					<select class="birDate_month" id="month">

					</select>
				</div>
				<div class="place">
					<span class="wenzi">邮箱(选填)</span>
					<input type="text" id="email" class="shuru">
					<span></span>
				</div>
				<div class="place">
					<span class="wenzi">验证码</span>
					<input type="text" id="yanzhengma" class="shuru">
					<span class="yanzhengtu"><span class="yanzheng"></span><a href="javascript:;" class="changeyz">换一次？</a></span>
				</div>
				<div class="place">
					<div class="read"><input type="checkbox" class=""><span>我已阅读并同意 <a href="tiaokuan.html">用户注册协议</a></span></div>
				</div>
				<div class="place">
					<div class="btn_place">
						<input type="button" class="register_btn" value="">
					</div>
				</div>
			</div>
  </div>
</template>

<script>
  export default{

  }
</script>
<style scoped>
#header{
	width:100%;
	height:48px;
	margin-top:35px;
	margin-bottom:20px;
	padding-left:125px;
	border-bottom:2px solid #fd5723;
	padding-bottom:90px;
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
.gologin{
	width:100%;
	clear:left;
	color:#707070;
	padding-left:900px;
}
.gologin a{
	color:#fe5722;
}

.registerForm{
	margin:0px auto;
	width:880px;
	height:612px;
	margin-top:40px;
	box-shadow:0 3px 30px rgba(251, 172, 143, 0.25);
	padding:40px;
}
.form_inside{
	padding-left:100px;
	padding-top:10px;
}
.place{
	margin-bottom:15px;
	text-align:left;
	color:#a4a4a4;
	font-size:16px;
}
.place_sex{
	margin-bottom:25px;
	margin-top:25px;
	text-align:left;
	color:#a4a4a4;
	font-size:16px;
}
.wenzi{
	width:110px;
	display:block;
	float:left;
	text-align:right;
	box-sizing:border-box;
	height:42px;
	padding-top:10px;
}
.shuru{
	width:282px;
	height:42px;
	margin-left:20px;
}
.sex{
	margin-left:20px;
}
.birDate_year,.birDate_month{
	width:135px;
	height:42px;
	margin-left:20px;
}
.yanzhengtu{
	padding-top:10px;
	font-size:12px;
}
.yanzhengtu a{
	color:#0658b4;
	font-size:12px;
}
.yanzheng{
	display: inline-block;
	border: 1px solid #a4a4a4;
	line-height: 30px;
	width:50px;
	height:30px;
	text-align: center;
	font-size: 20px;
	margin-right:10px;
}
.read{
	margin:0px auto;
	width:440px;
	font-size:12px;
}
.read a{
	color:#fe5722;
	font-size:12px;
}
.btn_place{
	margin:0px auto;
	width:450px;
}
.register_btn{
	width:300px;
	height:40px;
	border:0px;
	line-height:40px;
	margin-top:15px;
	background-image:url('../assets/img/zhuce_btn.jpg');
	cursor:pointer;
}
</style>