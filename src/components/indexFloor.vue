<template>
  <div class="floor">
      <div class="floor_top">
					<div class="lf floor_title">{{title}}</div>
					<div class="rt floor_more"><router-link :to="{ name: 'productlist',params:{type:tid}}">查看更多产品>></router-link></div>
				</div>
				<div class="floordetail clear">
					<div class="bigfloor">
						<img :src="bigpic" alt="">
					</div>
					<div class="smallfloor">
						<ul class="product_ul index_cake">
              <li class="product" v-for="item in productlist" :key="item.pid">
								<router-link :to="{ name: 'productdetail',query:{pid:item.pid}}" class="pic">
									<img :src="'http://www.johnzian.cn/'+item.limg" alt="1">
								</router-link>
                <p class="product_title">
									<a href="product_details.html?pid=2333">
										{{item.title}}
									</a>
								</p>
                <p>
                  <span class="price">
                    ￥{{item.nprice}}
                  </span>

                  <span class="discount">
                    ￥{{item.mprice}}
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
		props: ['type'],
    data:function(){
      return{
				productlist:[],
				title:String,
				bigpic:String,
				tid:Number
      }
		},
		mounted(){
			if(this.type=="cake"){
				this.title="蛋糕馆";
				this.bigpic="http://www.johnzian.cn/img/20170424144130_5178.jpg";
				this.$http.get('http://www.johnzian.cn/MeiXinVueCli/php/route/index_cake.php')
        .then(function(res){
					this.productlist=res.data;
				})
				this.tid=1001;
			}else{
				this.title="零食店";
				this.bigpic="http://www.johnzian.cn/img/20170726171807_3157.png";
				this.$http.get('http://www.johnzian.cn/MeiXinVueCli/php/route/index_desert.php')
        .then(function(res){
					this.productlist=res.data;
				})
				this.tid=1002;
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