<template>
  <div class="floor">
      <div class="floor_top">
					<div class="lf floor_title">蛋糕馆</div>
					<div class="rt floor_more"><a href="products_cake.HTML">查看更多产品>></a></div>
				</div>
				<div class="floordetail clear">
					<div class="bigfloor">
						<img src="../assets/img/20170424144130_5178.jpg" alt="">
					</div>
					<div class="smallfloor">
						<ul class="product_ul index_cake">
              <li class="product" v-for="item in productlist" :key="item">
                <a href="product_details.html?pid=2333" class="pic">
									<img src="../assets/img/220_201611211511533145590.jpg" alt="1">
								</a>
                <p class="product_title">
									<a href="product_details.html?pid=2333">
										标题
									</a>
								</p>
                <p>
                  <span class="price">
                    ￥233
                  </span>

                  <span class="discount">
                    ￥233
                  </span>
                </p>
						</li>
            </ul>
					</div>
				</div>
  </div>
</template>

<script>
  export default{
    data:function(){
      return{
        productlist:[1,2,3,4,5,6,7,8]
      }
    }
  }
</script>
<style scoped>
  /*一楼*/
.floor{
	padding: 0px 50px;
	width:100%;
}
.floor_top{
	height:46px;
	line-height:46px;
	border-bottom: 1px solid #ccc;
}
.floor_title{
	font: bold 24px/46px "微软雅黑";
    color: #585858;
}
.floor_more{
	font-size: 14px;
    color: #585858;
}
.floordetail{
  padding-top:20px;
  display: flex;
  justify-content: center;
}
.bigfloor{
	width:288px;
	height:513px;
	overflow:hidden;
}
.bigfloor img{
	position:relative;
	transition:2s;
}
.bigfloor img:hover{
	animation-name:bigpic;
	animation-duration:0.5s;
	animation-delay:0.5s;
	animation-timing-function:easy;
}
.smallfloor{
	width:912px;
}
.product_ul{
	display:flex;
	flex-wrap:wrap;
}
.product{
	width:220px;
	margin-left:8px;
	text-align:center;
	overflow:hidden;
}
.pic{
	display:block;
	width:220px;
	height:220px;
	overflow:hidden;
}
.product img{
	width:220px;
	height:220px;
	transition:0.5s ease 0s;
	overflow:hidden;
}
.product img:hover{
	transform:scale(1.1);
}
.product_title{
	color:#585858;
	font-size:14px;
	line-height:28px;
}
.product_title a{
	text-overflow: ellipsis;
	white-space:nowrap;
	overflow:hidden;
	display:inline-block;
	width:220px;
	color: #585858;
}
.price{
    margin-right: 3px;
    font-size: 16px;
    font-weight: normal;
    color: #ff2a53;
}
.discount{
    margin-left: 3px;
    color: #8d8d8d;
    text-decoration: line-through;
	font-size:12px;
}

@keyframes bigpic{
	0%{
		bottom:0px;
	}
	25%{
		bottom:30px;
	}
	50%{
		bottom:0px;
	}
	75%{
		bottom:15px;
	}
	100%{
		bottom:0px;
	}
}
</style>