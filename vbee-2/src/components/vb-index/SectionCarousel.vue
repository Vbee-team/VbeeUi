<template>
    <div class="section_carousel">
      <div class="swiper-container swiper-conntent">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="p in ca">
            <img :src="p.pic"/>
          </div>
        </div>
        <!-- Add Pagination -->
        <!--豆豆-->
        <!--<div class="swiper-pagination" id="doudou"></div>-->
        <!--滚动条-->
        <div class="swiper-scrollbar" id="scrolls"></div>
      </div>
    </div>
</template>

<script>
     import "../../../node_modules/swiper/dist/css/swiper.css"
     import Swiper from "../../../node_modules/swiper/dist/js/swiper";
    export default {
        name: "SectionCarousel",
      props:["ca"],
      updated() {
        new Swiper('.swiper-container', {
          loop : true,//环路
          // autoplay:true,//自动轮播
          autoplay: {
            disableOnInteraction: false,// 触碰之后继续轮播
            delay: 1000,//秒切换一次
          },
          // pagination: {
          //   el: '.swiper-pagination',
          // },
          // 如果需要滚动条
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        });
      }

    }
</script>

<style scoped>
  .section_carousel{
    width: 100%;
    height: 1.20rem;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;

    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-slide img{
    width: 100%;
    height: 100%;
  }
  /*改豆豆*/
  .section_carousel .swiper-conntent .swiper-scrollbar{
    background-color: #ffffff;
  }

</style>
<style>
  /*高亮*/
  #scrolls .swiper-scrollbar-drag{
    background-color: gray;
  }
</style>
