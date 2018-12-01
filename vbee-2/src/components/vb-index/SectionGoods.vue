<template>
    <div class="section_goods">
      <a href="#" v-for="p in go">
        <img :src="p.appPic1"/>{{p.appName1}}
      </a>
    </div>
</template>

<script>
    export default {
      name: "SectionGoods",
      props:["go"]
    }
</script>

<style scoped>
  .section_goods{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: .10rem .15rem;
    box-sizing: border-box;
  }
  .section_goods a{
    font-size: .12rem;
    color: #2c2c2c;
    margin-right: .23rem;
    text-align: center;
    margin-bottom: .10rem;
  }
  .section_goods a:nth-child(5){
    margin-right: 0;
  }
  .section_goods a:nth-child(10){
    margin-right: 0;
  }
  .section_goods a img{
    width: .50rem;
    height: .50rem;
    border-radius: 50%;
  }
</style>
