<template>
  <section>
    <div class="swiper-container s1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="i" v-for='(s,i) in swiper'><img :src="s.imgs"></div>


      </div>
      <!-- Add Scrollbar -->
      <div class="swiper-scrollbar"></div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "ClassifySwiper",
    props:["swiper"],
    updated() {
       new Swiper('.s1', {
         loop:true,
        scrollbar: {
          el: '.swiper-scrollbar',

        },
      });
    }
  }


  import Swiper from "swiper"
  import "../../../node_modules/swiper/dist/css/swiper.css";
</script>

<style scoped>
  section {
    width: 100%;
    height: 1.5rem;
  }

  .s1 img {
    width: 100%;
    height: 100%;
  }

  .s1 .swiper-scrollbar {
    background: #767676;
  }

</style>
<style>


  .s1 .swiper-scrollbar-drag {
    /*width: 1.265rem;*/
    background: #ffffff;
  opacity: inherit;
  }
</style>
