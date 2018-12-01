<template>
  <ul class="heabot_locat">
    <li v-for="p in lo">
      <img :src="p.pic"/>{{p.title}}
    </li>

  </ul>
</template>

<script>
    export default {
        name: "HeaderLocation",
      props:["lo"]
    }
</script>

<style scoped>
  .heabot_locat{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    border-top: 1px solid #f5f5f5;
  }
  .heabot_locat li{
    width: 25%;
    font-size: .10rem;
    color: #4e535b;
    text-align: center;
    padding: .20rem 0;
    box-sizing: border-box;
    border-right: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
  }
  .heabot_locat li:nth-child(4n){
    border-right: none;
  }
  .heabot_locat li img{
    width: .24rem;
    height: .20rem;
    margin: 0 auto .10rem;
  }
</style>
