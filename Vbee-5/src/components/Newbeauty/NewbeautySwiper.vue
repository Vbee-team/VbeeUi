<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="s in slide">
        <a href="javascript:;">
          <img class="pic" :src="s.img">
        </a>
      </div>
    </div>
    <!-- Add Scrollbar -->
    <div class="swiper-pagination"></div>
  </div>

</template>

<script>
  import "../../../node_modules/swiper/dist/css/swiper.css"
  import Swiper from "../../../node_modules/swiper/dist/js/swiper"
    export default {
      name: "NewbeautySwiper",
      props:["slide"],
      mounted(){
        new Swiper('.swiper-container', {
          autoplay:true,
          loop:true,
          // autoplay: {
          //   disableOnInteraction: false
          // },
          pagination: {
            el: '.swiper-pagination',
            clickable:true
          },
        });
      }

    }
</script>

<style lang="scss" scoped>
.swiper-container{
  height: 1.5rem;
  .pic{
    width: 100%;
    height: 100%;
  }
  .swiper-pagination{
    position: absolute;
    bottom: -.2rem;
  }
}
</style>
<style>
  .swiper-container .swiper-pagination .swiper-pagination-bullet{
    /*设置未选中的颜色*/
    width: 19%;
    height: .02rem;
    border-radius: .02rem;
    background-color: #000;
    margin: 0;
    opacity: .1;
  }
  .swiper-container  .swiper-pagination .swiper-pagination-bullet-active{
    /*设置选中的颜色*/
    background-color: rgb(255,255,255);
    opacity: .8;
    margin: 0;
  }
</style>
