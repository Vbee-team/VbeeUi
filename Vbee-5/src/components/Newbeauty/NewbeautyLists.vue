<template>
  <div class="list">
    <ul class="list1">
      <li v-for="l in lists1">
        <a href="javascript:;">
          <img :src="l.img">
        </a>
      </li>
    </ul>
    <ul class="list2">
      <li v-for="m in lists2">
        <a href="javascript:;">
          <img :src="m.img">
        </a>
      </li>
    </ul>
    <ul class="list2">
      <li v-for="t in lists3">
        <a href="javascript:;">
          <img :src="t.img">
        </a>
      </li>
    </ul>
    <ul class="list4">
      <li v-for="f in lists4">
        <a href="javascript:;">
          <img :src="f.img">
        </a>
      </li>
    </ul>
  </div>

</template>

<script>
    export default {
      name: "NewbeautyLists",
      props:["lists1","lists2","lists3","lists4"]
    }
</script>

<style lang="scss" scoped>
.list1{
  overflow: hidden;
  li{
    width: 20%;
    float: left;
    img{
      width: 100%;
      height: auto;
    }
  }
}
  .list2{
    overflow: hidden;
    img{
      width: 25%;
      float: left;
    }
  }
  .list4{
    overflow: hidden;
    img{
      width: 50%;
      float: left;
    }
  }
</style>
