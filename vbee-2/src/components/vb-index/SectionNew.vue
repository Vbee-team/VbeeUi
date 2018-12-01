<template>
  <div>
    <div class="section_new" v-for="p in ne">
      <h3>{{p.title}}</h3>
      <img :src="p.pic"/>
      <new-products :key="i" :li="g" v-for="(g,i) in ne"></new-products>
    </div>
  </div>
</template>

<script>
    import NewProducts from "./NewProducts";
    export default {
        name: "SectionNew",
      components: {NewProducts},
      props:["ne"]
    }
</script>

<style scoped>
  .section_new{
    width: 100%;
    background-color: #f4f5f7;
  }
  .section_new h3{
    width: 100%;
    height: .58rem;
    font-size: .16rem;
    color: black;
    text-align: center;
    line-height: .58rem;
  }
  .section_new img{
    width: 3.50rem;
    height: 1.70rem;
    border-radius: 10px;
    margin: 0 .12rem;
  }
</style>
