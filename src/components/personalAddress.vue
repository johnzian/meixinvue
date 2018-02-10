<template>
  <div>
    <div class="user_address">
        <div class="title">收货地址</div>
        <div class="user_address_inside">
            <ul class="user_address_ul">
              <li class="new_user_address">
                    <div>
                        收件人姓名：<input type="text" class="new_reciver">
                    </div>
                    <div>
                        省份：
                        <select name="new_province" class="province">
                            <option value="">请选择</option>
                            <option value="北京市">北京市</option>
                            <option value="上海市">上海市</option>
                            <option value="广东省">广东省</option>
                        </select>
                        城市：
                        <select name="new_city" class="city">

                        </select>
                        街区：
                        <select name="new_block" class="block">

                        </select>
                    </div>
                    <div>
                        手机：<input type="text" class="new_phone">
                    </div>
                    <div>
                        固定电话：<input type="text" class="new_homenumber">
                    </div>
                    <div>
                        邮政编号：<input type="text" class="new_postcode">
                    </div>
                    <div>
                        详细地址：<input type="text" class="new_address_details">
                    </div>
                    <div>
                        <input type="button" class="address_btn" value="确认添加">
                    </div>
              </li>
              <li class="user_address_li" v-for="items in addresslist" :key="items">
                    <span class="reciver_name">${obj.receiver}</span>
                    <span class="reciver_address">${obj.province}${obj.city}${obj.block}</span>
                    <span class="reciver_phone">${obj.phone}</span>
                    <span class="reciver_homenumber">${obj.homenumber}</span>
                    <span class="reciver_postcode">${obj.postcode}</span>
                    <span class="reciver_details">${obj.details}</span>
                    <a href="javascript:;" class="del_aid">删除</a><span class="aid">${obj.aid}</span>
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
        addresslist:[1,2,3,4,5]
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
/*用户地址*/

.user_address_li{
    margin: 30px;
    display: flex;
    justify-content: space-between;
}
.new_user_address{
    text-align: center;
}
.new_user_address>div{
    margin: 15px;
}
.address_btn{
    background: #e16300;
    border: none;
    outline: none;
    color: #fff;
    width: 150px;
    height: 50px;
    cursor: pointer;
}
.aid{
    display: none;
}
</style>