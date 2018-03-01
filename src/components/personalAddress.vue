<template>
  <div>
    <div class="user_address">
        <div class="title">收货地址</div>
        <div class="user_address_inside">
            <ul class="user_address_ul">
              <li class="new_user_address">
                    <div>
                        收件人姓名：<input type="text" class="new_reciver" v-model="receiver">
                    </div>
                    <div>
                        省份：
                        <select name="new_province" class="province" v-model="province">
                            <option>请选择</option>
                            <option v-for="(items,index) in provincelist" :key="index" :value="items">{{items}}</option>
                        </select>
                        城市：
                        <select name="new_city" class="city" v-model="city">
                            <option>请选择</option>
                            <option v-for="(items,index) in citylist" :key="index" :value="items">{{items}}</option>
                        </select>
                        街区：
                        <select name="new_block" class="block" v-model="block">
                            <option>请选择</option>
                            <option v-for="(items,index) in blocklist" :key="index" :value="items">{{items}}</option>
                        </select>
                    </div>
                    <div>
                        手机：<input type="text" class="new_phone" v-model="phone">
                    </div>
                    <div>
                        固定电话：<input type="text" class="new_homenumber" v-model="homenumber">
                    </div>
                    <div>
                        邮政编号：<input type="text" class="new_postcode" v-model="postcode">
                    </div>
                    <div>
                        详细地址：<input type="text" class="new_address_details" v-model="details">
                    </div>
                    <div>
                        <input type="button" class="address_btn" value="确认添加" @click="addAddress">
                    </div>
              </li>
              <li class="user_address_li" v-for="items in addresslist" :key="items.aid">
                    <span class="reciver_name">{{items.receiver}}</span>
                    <span class="reciver_address">{{items.province}}{{items.city}}{{items.block}}</span>
                    <span class="reciver_phone">{{items.phone}}</span>
                    <span class="reciver_homenumber">{{items.homenumber}}</span>
                    <span class="reciver_postcode">{{items.postcode}}</span>
                    <span class="reciver_details">{{items.details}}</span>
              </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return{
        addresslist:[],//地址列表
        provincelist:['北京市','上海市','广东省'],//省份列表
        citylist:[],//城市列表
        blocklist:[],//街区列表
        province:'请选择',//选择的省份
        city:'请选择',//选择的城市
        block:'请选择',//选择的街区
        receiver:'',//收件人名字
        homenumber:'',//家庭电话
        phone:'',//电话号码
        postcode:'',//邮政编码
        details:''//详细地址
      }
    },
    methods:{
        //获取用户地址
        getaddress(){
            this.addresslist;
            this.$axios.get('http://www.johnzian.cn/MeiXinVueCli/php/route/user_address.php')
            .then((res)=>{
                this.addresslist=res.data;
            })
        },
        //根据省份更新城市
        updateCity(){
            this.citylist=[];
            this.blocklist=[];//每更改一次省份把原有的城市列表和街区列表清空
            this.city='请选择';
            this.block='请选择';//如果省份改变了，把城市和街区的值变回原来
            if(this.province == '北京市'){
                this.citylist.push('一环','二环','三环');
            }else if(this.province == '上海市'){
                this.citylist.push('一海','二海','三海');
            }else if(this.province == '广东省'){
                this.citylist.push('清远','广州','佛山');
            }
        },
        //根据城市更新街区
        updateBlock(){
            this.blocklist=[];
            this.block='请选择';
            if(this.city == '一环'){
                this.blocklist.push('A环','B环','C环');
            }else if(this.city == '二环'){
                this.blocklist.push('1海','2海','3海');
            }else if(this.city == '三环'){
                this.blocklist.push('A远','B州','3山');
            }else{
                this.blocklist.push('太多','不全输入了')
            }
        },
        //添加地址
        addAddress(){
            this.$axios({
                url:'http://www.johnzian.cn/MeiXinVueCli/php/route/add_address.php',
                method:'post',
                data:{
                receiver : this.receiver,
                province : this.province,
                city : this.city,
                block : this.block,
                phone : this.phone,
                homenumber : this.homenumber,
                postcode : this.postcode,
                details : this.details,
                },
                headers:{
                    'content-type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                // transformRequest: [function (data) {
                //     data=qs.stringify(data);//把axios的json格式字符转为字符串
                //     return data;
                // }]
            })
            .then((res)=>{
                if(res.data==1){
                    alert('增加成功');
                    this.getaddress();
                }
            })
        }
    },
    mounted(){
        this.getaddress();
    },
    watch:{
        'province' : 'updateCity',//监听省份更新
        'city' : 'updateBlock'//监听城市更新
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