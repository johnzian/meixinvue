<template>
  <div class="page">
	<a href="javascript:;" class="prev">上一页</a>
	<a href="javascript:;" class="pages" v-bind:class="{active:pnum==(item)}" v-for="(item,index) in pcount" :key="index">{{item}}</a>
	<a href="javascript:;" class="next">下一页</a>
	<span class="totalpage">第1/5页 共85记录</span>
	<input type="text" class="page_go" placeholder="第1页">
	<button class="page_go_btn">确定</button>
  </div>
</template>

<script>
  export default{
	  props: ['pagecount','pnum'],
	  mounted(){
		//   for(var i = 1 ; i <= this.$props.pagecount ; i ++){
		// 	  this.pcount.push(i);
		//   };
		this.getpage();
	  },
	  methods:{
		  getpage:function(){
			this.pcount=[];
			if(this.$props.pnum-1>0){
			  this.pcount.push(this.$props.pnum-1);
		  	};
		  	this.pcount.push(this.$props.pnum);
			if(this.$props.pnum+1<=this.$props.pagecount){
			  this.pcount.push(this.$props.pnum+1);
		 	};
		  }
	  },
	  data(){
		  return{
			  pcount:[]
		  }
	  },
		watch:{
		  '$route':['getpage']//负责监听路由是否变化
	  }
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