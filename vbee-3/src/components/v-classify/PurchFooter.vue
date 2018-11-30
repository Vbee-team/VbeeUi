<template>
    <div>
      <li>
        <img :src="item.imgd">
        <p><span>{{item.purspan}}</span> {{item.purp}}</p>
        <s>{{item.purs}}</s>
      </li>

    </div>
</template>

<script>
    export default {
        name: "PurchFooter",
      props:["item","idx"]
    }
</script>

<style scoped>

    div li{
      width: 0.84rem;
      height: 1.35rem;
    }
  li:nth-child(1){
    margin-left: 0.06rem;
  }

    li img{
      width: 0.84rem;
      height: 0.84rem;

    }
  li span{
    display: block;
    padding: 0.01rem;
    width: 0.4rem;
    border-radius: 0.03rem;
    text-align: center;
    font-size: 0.1rem;
    color: white;
    background: #df3c97;
  }
  li p{
    display: flex;
    margin-top: 0.06rem;
    font-weight: 600;
  }
  li s{
    color: #9d9ca2;
    line-height: 0.3rem;
  }
</style>
