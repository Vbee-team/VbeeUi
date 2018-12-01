<template>
  <div class="section_grap">
      <div class="grap_time" v-for="p in ap">
        <p>{{p.time1}}</p>丨
        <p>
          还剩<span>{{p.time2}}</span>：<span>{{p.time3}}</span>：<span>{{p.time3}}</span>
        </p>
      </div>
        <grap-li :key="i" :li="g" v-for="(g,i) in ap"></grap-li>
  </div>
</template>

<script>

  import GrapLi from "./GrapLi";
  export default {
    name: "SectionGrap",
    components: {GrapLi},
    props:["ap"]
  }
</script>

<style scoped>
  .section_grap{
    width: 100%;
    height: 2.07rem;
    background: url("../../../static/images/w15.jpg") no-repeat;
    background-size: cover;
    border-top: .08rem solid #f5f5f5;
    border-bottom: .08rem solid #f5f5f5;
    box-sizing: border-box;
  }
  .grap_time{
    display: flex;
    justify-content: center;
    font-size: .12rem;
    color: #303030;
    margin-top: .37rem;
  }
  .grap_time p:nth-child(1){
      margin-right: .10rem;
  }
  .grap_time p:nth-child(2){
    margin-left: .10rem;
  }
  .grap_time p:nth-child(2) span{
      padding: .02rem .01rem;
      box-sizing: border-box;
      background-color: black;
      color: #fff;
    }
  .grap_time p:nth-child(2) span:nth-child(1){
      margin-left: .12rem;
  }

</style>
