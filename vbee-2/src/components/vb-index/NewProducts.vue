<template>
  <ul class="new_products">
    <li v-for="p in li.products">
      <img :src="p.pic1">
      <div class="product_title">
        <h4>{{p.title2}}</h4>
        <span>{{p.span1}}</span>
      </div>
      <p>
        <span>{{p.span2}}</span>{{p.span5}}<span>{{p.span3}}</span><span>{{p.span4}}</span>
      </p>
    </li>

  </ul>
</template>

<script>
    export default {
        name: "NewProducts",
      props:["li"]
    }
</script>

<style scoped>
  .new_products{
    padding: .10rem .12rem 0;
    box-sizing: border-box;
  }
  .new_products li{
    border-radius: 10px;
    margin-bottom: .12rem;
    background-color: #ffffff;
  }
  .new_products li:last-of-type{
    margin-bottom: 0;
  }
  .new_products li img{
    width: 3.50rem;
    height: 1.70rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .product_title{
    display: flex;
    justify-content: space-between;
    padding: .15rem .10rem .10rem .20rem;
    box-sizing: border-box;
  }
  .product_title h4{
    font-size: .14rem;
    color: #000;
  }
  .product_title span{
    font-size: .10rem;
    color: #a2a2a4;
  }
  .new_products li p{
    display: flex;
    font-size: .10rem;
    padding-left: .12rem;
    padding-bottom: .15rem;
    box-sizing: border-box;
  }
  .new_products li p span:nth-child(1){
    color: #b85289;
    margin-right: .03rem;
  }
  .new_products li p span:nth-child(2){
    margin-left: .18rem;
    margin-right: .05rem;
  }
</style>
