<template>
  <ul class="grap_product">
    <li v-for="p in li.grapImg">
      <img :src="p.pic"/>
      <p><span>{{p.span1}}</span>{{p.span2}}</p>
      <i>{{p.span3}}</i>
    </li>
  </ul>

</template>

<script>
    export default {
        name: "GrapLi",
      props:["li"]
    }
</script>

<style scoped>
  .grap_product{
    padding: .05rem .12rem 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
  .grap_product li img{
    width: .83rem;
    height: .83rem;
    margin-bottom: .05rem;
  }
  .grap_product li p{
    display: flex;
    font-size: .12rem;
    color: black;
    margin: .06rem 0;
  }
  .grap_product li p span{
    display: flex;
    font-size: .09rem;
    color: #fff;
    padding: .02rem;
    box-sizing: border-box;
    background-color: #dd3d95;
    margin-right: .03rem;
    border-radius: 5px;
  }
  .grap_product li i{
    display: flex;
    font-size: .12rem;
    color: #9c9ca1;
    text-decoration: line-through;
  }
</style>
