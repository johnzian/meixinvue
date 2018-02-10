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
            <li class="order_li" v-for="items in orderlist" :key="items">
                <img src="${obj.simg}" alt="">
                <span class="product_title">${obj.title}</span>
                <span class="product_price">¥${obj.nprice}</span>
                <span class="product_count">${obj.count}个</span>
                <span class="order_time">${obj.count}</span>
                <span class="order_state">${obj.status}</span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
  export default{
    data:function(){
      return{
        orderlist:[1,2,3,4,5]
      }
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