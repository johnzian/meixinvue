<template>
  <div>
          <!-- 购物车内容-->
    <div class="cart">
        <div class="cart_title">蛋糕自提</div>
        <div class="cart_list_title">
            <div class="chose_all">
                <input type="checkbox" class="select_all" @click="selectall()" v-model="checkall">全选
            </div>
            <div class="title_product">商品</div>
            <div class="title_price">单价（元）</div>
            <div class="title_count">数量</div>
            <div class="title_control">操作</div>
        </div>
        <div class="cart_list">
            <ul class="cart_list_ul">
                <li class="cart_list_li" v-for="(items,index) in cartlist" :key="items.cid">
                    <div class="select"><input type="checkbox" class="cart_select"  v-model="checkmodel" :value="items"/></div>
                    <div class="pic"><img :src="'http://www.johnzian.cn/'+items.simg" alt="" class="product_pic"/></div>
                    <div class="info">
                        <p class="product_name">{{items.title}}</p><span class="can_take">支持自提</span>
                        <p class="more_info">重量：{{items.pound}}磅/ 口味：{{items.taste}}/</p>
                    </div>
                    <div class="price"><span class="yuan">¥</span><span class="product_price">{{items.nprice * items.count}}</span></div>
                    <div class="count">
                        <a href="javascript:;" class="less" @click="lesscount(index)"> - </a>
                        <input type="text" class="product_count" :value="items.count"/>
                        <a href="javascript:;" class="more" @click="addcount(index)"> + </a>
                    </div>
                    <div class="control"><a href="javascript:;" class="product_delete" @click="deleteproduct(items.cid)">删除</a></div>
                </li>

            </ul>
            <div class="user_address">
                <div class="address_inside" v-for="items in addresslist" :key="items.aid">
                    <input type="radio" name="which_address" v-model="selectAddress" :value="items.aid"/>
                    <span class="aid">地址id</span>
                    <span>{{items.receiver}}</span>
                    <span>{{items.province+items.city+items.block}}</span>
                    <span>手机号码：{{items.phone}}</span>
                    <span>固定号码：{{items.homenumber}}</span>
                    <span>邮政编号：{{items.postcode}}</span>
                    <span>详细地址：{{items.details}}</span>
                </div>
            </div>
            <div class="total">
                <span>已选择 <span class="howmany_select">{{total}}</span> 件商品</span>
                <button class="buy_now" @click="buyproduct()">去结算</button>
                <div class="totalprice">
                    合计（不含运费）：
                    <span class="total_num">¥<span class="money">{{totalprice}}</span></span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import store from '@/store/store'
  export default{
      data:function(){
          return{
              cartlist:[],//购物车列表
              addresslist:[],//收货地址列表
              checkall:false,//是否全选按钮
              checkmodel:[],//全选按钮数组
              total:0,//商品数量
              totalprice:0,//商品总价
              selectAddress:0,//用户选择的地址id
          }
      },
      mounted(){
          if(this.$store.state.userinfo.uid!=null){//如果登录了
              this.getcartlist();
              this.getaddress();
          }else{//如果没有登录
              alert('请先登录');
              this.$router.push({name: 'login'});
          }
      },
      methods:{
          //获取购物车列表
          getcartlist(){
              this.cartlist=[];
              this.checkmodel=[];
              this.$axios.get('http://www.johnzian.cn/MeiXinVueCli/php/route/showcart.php?uid='+this.$store.state.userinfo.uid)
              .then((res)=>{
                  this.cartlist=res.data;
                  this.$store.commit('checkcart',res.data.length);//更新头部购物车数量
              })
          },
          //获取用户送货地址
          getaddress(){
            this.$axios.get('http://www.johnzian.cn/MeiXinVueCli/php/route/user_address.php?uid='+this.$store.state.userinfo.uid)
            .then((res)=>{
                this.addresslist=res.data;
            })
          },
          //全选按钮
          selectall(){
              this.checkall=!this.checkall;//只是把变量从true to false
              this.checkmodel=[];//清空全选按钮
              if(this.checkall==true){//当全选按钮为真的时候
              //函数就要把cartlist里面的每一个商品放进去checkmodel里面
              //同时因为checkmodel是绑定了，checkmodel数组里面拥有了这个独特的商品，就会使那一个checkbox变为真
                  this.cartlist.forEach((value,index)=>{
                      this.checkmodel.push(value)
                  })
              }
          },
          //购买功能
          buyproduct(){
              if(this.selectAddress!=0){//如果用户选择了地址
                  for(var i = 0; i < this.checkmodel.length; i++){
                    this.$axios.post('http://www.johnzian.cn/MeiXinVueCli/php/route/add_order.php?uid='+this.$store.state.userinfo.uid+'&pid='+this.checkmodel[i].pid+'&count='+this.checkmodel[i].count+'&aid='+this.selectAddress+'&cid='+this.checkmodel[i].cid)
                  }
                  alert('提交成功');
                  this.getcartlist();
              }else{
                  alert('请选择送货地址或者去个人中心填一个')
              }
          },
          //删除购物车
          deleteproduct(cid){
              this.$axios.post('http://www.johnzian.cn/MeiXinVueCli/php/route/delete_cart.php?uid='+this.$store.state.userinfo.uid+'&cid='+cid)
              .then((res)=>{
                  if(res.data.code==200){
                      alert('删除成功');
                      this.getcartlist();
                  }else if(res.data.code==100){
                      alert('删除失败')
                  }
              })
          },
          //商品数量增加
          addcount(i){
              this.cartlist[i].count++;
          },
          //商品数量减少
          lesscount(i){
              if(this.cartlist[i].count>1){
                  this.cartlist[i].count--;
              }
          },
      },
      computed:{
        //   totalmoney:function(){
        //         var totalprice = 0;
        //         for(var i in this.checkmodel){
        //             totalprice += this.checkmodel[i].nprice * this.checkmodel[i].count;
        //         }
        //         return totalprice;
        //   },
        //两种方法计算总价，一种上面的，可以直接点击就出，一种下面的，通过深度watch checkmodel来实行函数
         totalmoney:function(){
            this.totalprice=0;
            this.total=this.checkmodel.length; //商品总量计算
            for(var i in this.checkmodel){
                //计算商品总价
                this.totalprice += this.checkmodel[i].nprice * this.checkmodel[i].count;
            }
          }
      },
      watch:{
          //深度监听checkmodel是否改变
          checkmodel:{
              handler(){
                //深度监听全选按钮的更改
                if(this.checkmodel.length==this.cartlist.length){
                    this.checkall=true;
                }else{
                    this.checkall=false;
                };
                //每一次checkmodel改变都会检测是否全选，还有执行计算总价的函数
                this.totalmoney;
              },
              deep : true
          },
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
