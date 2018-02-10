<template>
  <div>
      <div class="personnal">
        <div class="title">个人信息</div>
        <div class="personnal_inside">
            <ul class="personnal_ul">
                <li class="personnal_li">
                    用户手机：<span class="user_phone"></span>
                </li>
                <li class="personnal_li">
                    性别：<input type="radio" name="gender" class="gender_m" value="1">男  <input type="radio" name="gender" class="gender_w" value="0">女
                </li>
                <li class="personnal_li">
                    出生年月：
                    <select name="year" class="birth_year">
                    </select>
                    <select name="month" class="birth_month">
                    </select>
                </li>
                <li class="personnal_li">
                    email：<input type="text" class="user_email">
                </li>
                <li class="personnal_li">
                    <input type="button" value="确认提交" class="personnal_btn">
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
  export default{

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
/*用户信息*/
.personnal_inside{
    margin: 0 auto;
    width: 100%;
    text-align: center;
}
.personnal_ul{

}
.personnal_li{
    margin: 20px;
}
.personnal_btn{
    background: #e16300;
    border: none;
    outline: none;
    color: #fff;
    width: 150px;
    height: 50px;
    cursor: pointer;
}
</style>