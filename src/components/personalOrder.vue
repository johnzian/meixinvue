<template>
  <div>
          <div class="user_order">
        <div class="title">订单详情</div>
        <ul class="order_ul">
          <li class="order_li">
                <span>产品图片</span>
                <span>产品标题</span>
                <span>单个</span>
                <span>数量</span>
                <span>下单时间</span>
                <span>当前状态</span>
            </li>
            <li class="order_li" v-for="(items,index) in orderlist" :key="index">
                <img :src="'../../static/'+items.simg" alt="">
                <span class="product_title">{{items.title}}</span>
                <span class="product_price">¥{{items.nprice}}</span>
                <span class="product_count">{{items.count}}个</span>
                <span class="order_time">{{items.order_time}}</span>
                <span class="order_state">{{items.status}}</span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
  export default{
    data:function(){
      return{
        orderlist:[]
      }
    },
    methods:{
      getOrder(){
        this.orderlist=[];
        this.$axios.get('http://127.0.0.1/meixinvue/src/server/php/route/get_order.php')
        .then((res)=>{
          console.log(res)
          this.orderlist=res.data;
        })
      }
    },
    mounted(){
      this.getOrder();
    }
  }
</script>
<style scoped>
.title{
    text-align: center;
    color: #ff561a;
    font-size: 15px;
    font-weight: bold;
    height: 39px;
    line-height: 44px;
    overflow: hidden;
}


.main_details input{
    margin-left:15px;
}
/*订单信息*/
.order_li{
    display: flex;
    justify-content: space-around;
    line-height: 60px;
    margin: 20px 0px;
}
</style>