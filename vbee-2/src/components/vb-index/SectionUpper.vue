<template>
    <div class="section_upper">
      <a href="#" v-for="p in pe">
        <img :src="p.pic"/>
      </a>
    </div>
</template>

<script>
    export default {
        name: "SectionUpper",
      props:["pe"]
    }
</script>

<style scoped>
  .section_upper{
    padding:  .10rem .12rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
  .section_upper a img{
    width: 1.13rem;
    height: 1.57rem;
  }
</style>
