<template>
  <div id="lunbo">
    <swiper :options="swiperOption">
        <swiper-slide v-for="(pic,index) in lunbolist" :key="index"> <img :src="pic" alt=""> </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper> 
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'  
import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default{
    components: {  
        swiper,  
        swiperSlide 
    },
    data() {
      return {
        swiperOption: {
            slidesPerView: 'auto',//自动设定一次轮播的数量
            centeredSlides: true,//居中
            spaceBetween: 30,//图间距
            loop : true,//循环
            speed:3000,//速度
            grabCursor: true,//手掌
            autoplay: {
              delay: 3000,//自动播放延迟
              disableOnInteraction: false//碰触后停止不会轮播取消
            },
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',//分页的样式
              clickable: true, //可点击分页
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
        },
        lunbolist:['static/img/201709291925222407030.jpg','static/img/201707311537253626040.png','static/img/201709081704083746940.png']
      }
    },
    //使用动态载入数据总是出错，不知道为什么。放弃。
    // mounted(){
    //   this.lunbolist=[];
    //   this.getlist();
    // },
    // methods:{
    //   getlist:function(){
    //     this.$http.get('http://127.0.0.1/meixinvue/src/server/php/route/index_lunbo.php')
    //     .then(function(res){
    //       this.lunbolist=res.data;
    //     })
    //   }
    // }
  }
</script>
<style scoped>
.swiper-slide{
    text-align: center
}

</style>