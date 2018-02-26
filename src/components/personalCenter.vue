<template>
  <div>
      <div class="statement">
        <router-link :to="{ name: 'personaldetails'}"><div class="statement_one"  v-bind:class="{ 'active' : nowtype == 'details'}" @click="changeClass('details')">个人信息</div></router-link>
        <router-link :to="{ name: 'personaladdress'}"><div class="statement_two" v-bind:class="{ 'active' : nowtype == 'address'}" @click="changeClass('address')">收货地址</div></router-link>
        <router-link :to="{ name: 'personalorder'}"><div class="statement_three" v-bind:class="{ 'active' : nowtype == 'order'}" @click="changeClass('order')">查看订单</div></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default{
      data(){
          return{
              nowtype : 'details'//样式切换
          }
      },
      mounted(){
          if(this.$store.state.userinfo.uid == null){
              alert('请先登录');
              this.$router.push({name: 'login'});
          }
      },
      methods:{
          //改变用户点击的当前选项样式
          changeClass(type){
              this.nowtype=type;
          }
      }
  }
</script>
<style scoped>
.statement{
    display: flex;
    justify-content: space-around;
    border: 3px solid #f7f7f7;
    margin-top: 20px;
}
.statement .active{
    color: #e16300;
}
.statement_two,.statement_one,.statement_three{
    color: #AAAAAA;
    cursor: pointer;
    margin: 20px 0px;
    font-size: 20px;
    font-weight: bold;
}
/*导航栏*/
.personnal,.user_address,.user_order{
    border: 1px solid #ffd1c0;
    margin-top: 20px;
}

</style>