<template>
  <div class="page">
	<a href="javascript:;" class="prev">上一页</a>
	<a href="javascript:;" class="pages active">1</a>
	<a href="javascript:;" class="pages">2</a>
	<a href="javascript:;" class="pages">3</a>
	<a href="javascript:;" class="next">下一页</a>
	<span class="totalpage">第1/5页 共85记录</span>
	<input type="text" class="page_go" placeholder="第1页">
	<button class="page_go_btn">确定</button>
  </div>
</template>

<script>
  export default{

  }
</script>
<style scoped>
.page{
	float:right;
	display: flex;
	line-height:28px;
}
.page>*{
	margin-left:10px;
	color: #999;
}
.page>a{
	border: 1px solid #cccccc;
    line-height: 28px;
    border-radius: 3px;
    width: 30px;
    height: 28px;
    display: block;
	text-align:center;
}
.prev{
    width: 60px !important;
}
.pages{
}
.pages.active{
	color:#ff2d2e;
	border:1px solid #ff2d2e;
}
.next{
    width: 60px !important;
}
.totalpage{
}
.page_go{
    width: 40px;
    text-align: center;
}
.page_go_btn{
	background: #e16300;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
}
</style>