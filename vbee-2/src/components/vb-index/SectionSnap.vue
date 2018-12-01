<template>
    <div class="section_snap">
      <ul class="snap_img">
        <li v-for="p in sn">
          <img :src="p.pic"/>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "SectionSnap",
      props:["sn"]
    }
</script>

<style scoped>
  .section_snap{
    width: 100%;
    height: 2.44rem;
    background: url("../../../static/images/w16.jpg") no-repeat;
    background-size: cover;
    /*position: relative;*/
  }
  .snap_img{
    padding: .83rem .12rem .13rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
  .snap_img li img{
    width: 1.13rem;
    height: 1.44rem;
  }
</style>
