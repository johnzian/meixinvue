<template>
  <div class="main">
      		<!-- 轮播图-->
            <indexLunbo class="lunbo_inside"></indexLunbo>   


			<!-- 图片导航 -->
			<div class="leadto">
				<div class="bigpic"><a href="javascript:;"></a></div>
				<div class="smallpic">
					<ul>
							<li class="pic1"><div class="smallhover"><a href="products_cake.HTML">蛋糕馆</a></div></li>
							<li class="pic2"><div class="smallhover"><a href="products_quick.html">订饼快线</a></div></li>
							<li class="pic3"><div class="smallhover"><a href="products_sweet.html">礼品馆</a></div></li>
					</ul>
					<ul>
							<li class="pic4"><div class="smallhover"><a href="javascript:;">暂未上线</a></div></li>
							<li class="pic5"><div class="smallhover"><a href="javascript:;">暂未上线</a></div></li>
							<li class="pic6"><div class="smallhover"><a href="javascript:;">暂未上线</a></div></li>
					</ul>
				</div>
			</div>

			<!-- 公告 -->
			<div class="gonggao">
                <img src="../assets/img/20170919113124_8590.jpg" alt="">
            </div>

			<!-- 一楼 -->

            <indexFloor type="cake"></indexFloor> 


			<!-- 二楼 -->
            <indexFloor type="desert"></indexFloor> 

			<!-- 固定导航栏 -->
			<div class="nav">
				<div class="ico">
					<a href="personnal_center.html"><img src="../assets/img/icon_03.png" alt=""></a>
					<div class="abosulte_ico"><a href="personnal_center.html">用户中心</a></div>
				</div>
				<div class="ico">
					<a href="shopping_cart.html"><img src="../assets/img/icon_06.png" alt=""></a>
					<div class="abosulte_ico"><a href="shopping_cart.html">购物车</a></div>
				</div>
				<div class="ico" style="border:none">
					<a href="javascript:;"><img src="../assets/img/icon_08.png" alt=""></a>
					<div class="abosulte_ico"><a href="javascript:;">优惠券</a></div>
				</div>
			</div>
			<div class="nav_goheader">
				<a href="javascript:;"><img src="../assets/img/jiantou.png" alt=""></a>
				<div class="abosulte_header"><a href="javascript:;">顶部</a></div>
			</div>

			<!-- 电梯 -->
			<div class="nav_elevator">
				<div>导航</div>
				<div>蛋糕</div>
				<div>礼品</div>
			</div>


			<!-- 返回顶部 -->
			<div class="goback">
				<a href="javascript:;">
					<img src="../../static/img/20151113153309_2414.png" alt="">
					<p>返回顶部</p>
				</a>
			</div>
			<!-- 底部轮博图-->
			<indexFooterRandom></indexFooterRandom>
  </div>
</template>

<script>
import indexLunbo from '@/components/indexLunbo';
import indexFloor from '@/components/indexFloor';
import indexFooterRandom from '@/components/indexFooterRandom';
  export default{
  components:{
      indexLunbo:indexLunbo,
      indexFloor:indexFloor,
      indexFooterRandom:indexFooterRandom,
    },
  }
</script>
<style scoped>

/*图片栏*/
.leadto{
	width:100%;
	height:492px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
	margin-top:30px;
}
.bigpic{
	width:472px;
	height:472px;
	background-image:url(../assets/img/20170831235812_2496.png);
	position:relative;
}
.bigpic:hover{
	animation-name:bigpic;
	animation-duration:0.5s;
	animation-delay:0.5s;
	animation-timing-function:easy;
}
.bigpic a{
	display:block;
	width:472px;
	height:472px;
}


.smallpic li{
	width:226px;
	height:226px;
	background-repeat:no-repeat;
	margin:0px 0px 16px 16px;
	position:relative;
	overflow:hidden;
}
.smallhover{
	display:block;
	width:226px;
	height:226px;
	margin-bottom:16px;
	position:absolute;
	background:rgba(0,0,0,0.5);
	top:-226px;
	transition:0.5s;

}
.smallpic li:hover .smallhover{
	top:0px;
}
.smallpic li .smallhover a{
	display:block;
	color:#fff;
	text-align:center;
	width:122px;
	height:34px;
	border:1px solid #fff;
	position:relative;
	top:96px;
	left:52px;
	line-height:34px;
}

.pic1{
	float:left;
	background-image:url(../assets/img/20170410144525_7368.png);
}
.pic2{
	float:left;
	background-image:url(../assets/img/20170405181353_3197.png);
}
.pic3{
	float:left;
	background-image:url(../assets/img/20170405181149_5533.png);
}
.pic4{
	float:left;
	background-image:url(../assets/img/20170405181408_8042.png);
}
.pic5{
	float:left;
	background-image:url(../assets/img/20170405181422_5386.jpg);
}
.pic6{
	float:left;
	background-image:url(../assets/img/20170405181435_1481.jpg);
}

/*公告*/
.gonggao{
	width:100%;
	height:112px;
	margin:50px 0px 50px 0px;
    text-align: center
}




/*固定导航栏*/
.nav{
	position:fixed;
	right:0px;
	top:50%;
	width:35px;
	height:105px;
	background:#3b3b3b;
	z-index:6;
}
.ico{
	width:35px;
	height:35px;
	text-align:center;
	padding-top:6px;
	border-bottom:1px solid #fff;
	position:relative;
}
.ico:hover{
	background:#fe5722;
}
.ico img{
	width:21px;
	height:19px;
}
.abosulte_ico{
	transition:0.5s;
	position:absolute;
	background:#fe5722;
	width:75px;
	height:35px;
	text-align:center;
	left:75px;
	top:0px;
	line-height:35px;
	z-index:-3;
}
.abosulte_ico a{
	color:#fff;
	font-size:12px;
}
.ico:hover .abosulte_ico{
	left:-75px;
}

.nav_goheader{
	position:fixed;
	right:0px;
	bottom:0px;
	background:#3b3b3b;
	width:35px;
	height:35px;
	text-align:center;
	display:block;
}
.nav_goheader a{
	display:block;
	width:35px;
	height:35px;
	cursor:pointer;

	line-height:35px;
}
.nav_goheader:hover{
	background:#fe5722;
}
.abosulte_header{
	position:absolute;
	background:#fe5722;
	width:35px;
	height:35px;
	text-align:center;
	left:-35px;
	top:35px;
	transition:.5s;
}
.nav_goheader:hover .abosulte_header{
	top:0px;
}
.abosulte_header a{
	color:#fff;
	font-size:12px;
}

/*电梯*/
.nav_elevator{
	position:fixed;
	right:0px;
	top:0px;
	display:block;
}
.nav_elevator>div{
	width:35px;
	height:35px;
	text-align:center;
	line-height:35px;
	color:#fff;
	border-bottom:1px solid #fff;
	background:#3b3b3b;
	cursor:pointer;
	font-size:3px;
}


/*返回顶部*/
.goback{
	margin:0 auto;
	width:150px;
	text-align:center;
}
.goback a{
	display:block;
}
.goback p{
	margin-top:10px;
	font-size:24px;
}



/*小广告*/
.little_one{
	position:absolute;
	top:0px;
	left:0px;
	width:100px;
	height:100px;
	transition:3s;
}
.little_one>img{
	width:100px;
	height:100px;
	transition:2s;
	overflow:hidden;
	border-radius:20px;
}
.little_one>img:hover{
	transform:scale(1.5);
}
</style>
