<template>
  <div>
          <!-- 购物车内容-->
    <div class="cart">
        <div class="cart_title">蛋糕自提</div>
        <div class="cart_list_title">
            <div class="chose_all">
                <input type="checkbox" class="select_all">全选
            </div>
            <div class="title_product">商品</div>
            <div class="title_price">单价（元）</div>
            <div class="title_count">数量</div>
            <div class="title_control">操作</div>
        </div>
        <div class="cart_list">
            <ul class="cart_list_ul">
                <li class="cart_list_li" v-for="items in cartlist" :key="items">
                    <div class="select"><input type="checkbox" class="cart_select"/></div>
                    <div class="pic"><img src="../assets/img/220_201707302319317532290.png" alt="" class="product_pic"/></div>
                    <div class="info">
                        <p class="product_name">熊孩子</p><span class="can_take">支持自提</span>
                        <p class="more_info">重量：1磅/ 口味：新鲜芒果肉包裹法国芒果慕斯、原味海绵蛋糕、芒果流心夹心/</p>
                    </div>
                    <div class="price"><span class="yuan">¥</span><span class="product_price">236.00</span></div>
                    <div class="count">
                        <a href="" class="less">-</a>
                        <input type="text" class="product_count" value="1"/>
                        <a href="" class="more">+</a>
                    </div>
                    <div class="control"><a href="" class="product_delete">删除</a></div>
                </li>

            </ul>
            <div class="user_address">
                <div class="address_inside">
                    <input type="radio" name="which_address" checked/>
                    <span class="aid">地址id</span>
                    <span>猫猫</span>
                    <span>广东省广州市海珠区</span>
                    <span>手机号码：13711163602</span>
                    <span>固定号码：84230507</span>
                    <span>邮政编号：510220</span>
                    <span>详细地址：广东省广州市海珠区前进路激励下到56号32141房</span>
                </div>
            </div>
            <div class="total">
                <span>已选择 <span class="howmany_select">0</span> 件商品</span>
                <button class="buy_now">去结算</button>
                <div class="totalprice">
                    合计（不含运费）：
                    <span class="total_num">¥<span class="money">0</span></span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default{
      data:function(){
          return{
              cartlist:[1,2,3,4,5]
          }
      }
  }
</script>
<style scoped>
/*״̬��*/
.statement{
    display: flex;
    justify-content: space-around;
    border: 3px solid #f7f7f7;
    margin-top: 20px;
}
.statement_one{
    color: #e16300;
}
.statement_two{
    color: #AAAAAA;
}

/*���ﳵ*/
.cart,.user_address{
    border: 1px solid #ffd1c0;
    margin-top: 20px;
}
.cart_title{
    text-align: center;
    color: #ff561a;
    font-size: 15px;
    font-weight: bold;
    height: 39px;
    line-height: 44px;
    overflow: hidden;
}

.cart_list_title{
    color: #9f9f9f;
    height: 40px;
    border-bottom: 3px solid #ffd1c0;
    padding-bottom: 5px;
    line-height: 40px;
    display: flex;
}
.chose_all{
    width: 5%;
    margin-left: 10px;
    color: #585552;
}
#select_all{

}
.title_product{
    width: 48%;
    padding-left: 115px;
}
.title_price{
    width: 14%;
}
.title_count{
    width: 18%;
}
.title_control{
    width: 7%;
    text-align: right;
}
/*���ﳵ�����б�*/
.cart_list{
    border: 1px solid #dcdcdc;
    border-top: none;
}
.cart_list_ul{

}
.cart_list_li{
    display: flex;
    padding-top: 28px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eeeeee;
}
.cart_list_li:hover{
    background: #fff9f0;
}
.select{
    width: 5%;
    margin-left: 10px;
}
.pic{
    width: 8%;
    overflow: hidden;
}
.product_pic{
    width: 80px;
}
.info{
    width: 40%;
}
.product_name{
    color: #585552;
    font-size: 16px;
}
.product_name:hover{
    color: #e96b1f;
}
.can_take{
    height: 21px;
    line-height: 21px;
    color: #e96b1f;
    width: 60px;
    margin-right: 20px;
    background: #ffe8e0;
}
.more_info{
    color: #999;
}
.price{
    width: 14%;
    padding-top: 30px;
}
.yuan{
    text-align: center;
    font-size: 16px;
    font-weight: bold;
}
.product_price{
    text-align: center;
    font-size: 16px;
    font-weight: bold;
}
.count{
    width: 18%;
    padding-top: 30px;
}
.less,.more{
    display: inline-block;
    width: 20px;
    height: 22px;
    line-height: 20px;
    border: 1px solid #dcdcdc;
    cursor: pointer;
    font-size: 14px;
    color: #000;
    background: #fff;
    float: left;
    text-align: center;
}
.product_count{
    float: left;
    width: 55px;
    text-align: center;
    background: #fff;
    color: #000;
    border: 1px solid #dcdcdc;
    height: 20px;
    line-height: 20px;
}
.control{
    padding-top: 30px;
    width: 7%;
    text-align: right;
}
.product_delete{
    background: none;
    font-weight: normal;
    border: 0px;
    color: #585552;
    cursor: pointer;
    padding-left: 12px;
}
.cid{
    display: none;
}
.total{
    height: 50px;
    line-height: 50px;
    background: #fafafa;
    border: 1px solid #dcdcdc;
    width: 100%;
    margin-top: 25px;
}
.total>span{
    float: left;
    margin-left: 20px;
}
.totalprice{
    float: right;
}
.total_num{
    font-family: "microsoft yahei";
    font-size: 20px;
    font-weight: bold;
    color: #e60012;
    margin-left: 10px;
}
.buy_now{
    float: right;
    display: block;
    font-family: "microsoft yahei";
    font-size: 16px;
    text-align: center;
    background: #ff561a;
    border: 0px;
    color: #FFF;
    cursor: pointer;
    font-weight: bold;
    width: 120px;
    height: 50px;
    margin-left: 10px;
}
.hidden_total{
    display: none;
}
.address_inside{
    display: flex;
    justify-content: space-between;
    margin: 10px;
}
.aid{
    display: none;
}
.hidden_pid{
    display: none;
}
</style>
