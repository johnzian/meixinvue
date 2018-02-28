<template>
  <div>
	<div class="footer_big">
		<div class="footer_inside">
			<ul>
				<li>
					<h2>| 购物</h2>
					<p><a href="#">七天无理由退货及消费者保护规则</a></p>
					<p><a href="#">订饼须知</a></p>
					<p><a href="#">分店地址</a></p>
				</li>
				<li>
					<h2>| 服务</h2>
					<p><a href="#">客服热线</a></p>
					<p><a href="#">2017美心月饼防伪说明</a></p>
					<p><a href="#">西饼券延期公告</a></p>
					<p><a href="#">关于我们</a></p>
					<p><a href="#">预付卡章程</a></p>
				</li>
				<li>
					<h2>| 声明</h2>
					<p><a href="#">使用条款</a></p>
					<p><a href="#">隐私政策</a></p>
				</li>
                <li>
                    <h2>| 客服热线</h2>
				    <p class="rexian">400-8822-280</p>
                </li>
                <li>
                    <h2>| 手机商城</h2>
				    <img src="../../static/img/20170329123312_4663.png" alt="" class="erweima">
                </li>
			</ul>
		</div>
	</div>
  </div>
</template>

<script>
  export default{

  }
</script>
<style scoped>
/*脚步*/
.footer{
	width:100%;
	height:391px;
	
}
.footer_big{
	padding-top:50px;
	background-color: #e16300;
	margin-top:20px;
}
.footer_inside{
	width:1200px;
	margin:0 auto;
	color:#fff;
	height:345px;
}
.footer_inside ul li{
	border-left:1px solid #e6761f;
	padding-left:30px;
	margin-left:10px;
}
h2{	
	font-size:16px;
	line-height:40px;
}
.footer_inside ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.footer_inside ul li p a{
	font-size:14px;
	line-height:26px;
	color:#fff;
}
.rexian{
    font-size: 18px;
}
.erweima{
	margin-top: 5px;
}

</style>
