<template>
  <section>
    <ul class="listul">
      <li v-for="n in hunt">
        <img :src="n.imgh">
        <p>{{n.hunp}} <s>{{n.huns}}</s> <span>{{n.hunsp}}</span></p>
        <p class="two">{{n.huna}}</p>
      </li>
    </ul>
  </section>

</template>

<script>

    export default {
        name: "HuntList",
      props:["hunt"]
    }
</script>

<style scoped>
  section{
    width: 100%;
  }
  .listul{
    width: 95%;
    height: 5rem;
    margin: 0.1rem auto;
    display: flex;
    flex-wrap: wrap;
  }
  .listul li{
    width: 1.75rem;
    height: 3rem;
    background: white;
    margin-top: 0.1rem;
  }
  .listul li:nth-child(2n){
    margin-left: 0.05rem;
  }
  .listul li img{
    width: 1.75rem;
    height: 2.28rem;
  }
  .listul s {
    color: gray;
    font-size: 0.1rem;
  }
  .listul span {
    color: gray;
    font-size: 0.1rem;
  }
  .listul p{
    font-size: 0.1rem;
  }
</style>
