<template>
  <div>
    <li>
      <img :src="item.imga">
      <p>{{item.tit}}</p>
    </li>
  </div>

</template>

<script>
  export default {
    name: "IfyNav",
    props:["item","idx"]
  }
</script>

<style scoped>


  li {
    height: 0.84rem;
    width: 0.65rem;
    text-align: center;
  }
  li:nth-child(1) {
    margin-left: 0.1rem;
  }
  li:nth-child(6) {
    margin-left: 0.1rem;
  }
  li img{
    width: 75%;
    height: 75%;
    display: block;
  }
  p{
    font-size: 0.14rem;
    color: #b0b0b2;
  }
</style>
