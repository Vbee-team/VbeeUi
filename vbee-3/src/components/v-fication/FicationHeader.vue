<template>
  <div class="headerA">
    <i class="iconfont icon-2fanhui"></i>
    <p>分类</p>
    <i class="iconfont icon-sousuo"></i>
  </div>
</template>

<script>
  export default {
    name: "FicationHeader"
  }
</script>

<style scoped>
  .headerA {
    width: 100%;
    height: 0.45rem;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    background: #ffffff;
    justify-content: space-between;
  }
.icon-2fanhui{
  margin-left: 0.1rem;
}
.icon-sousuo{
  margin-right: 0.1rem;
}
  .headerA p{
    font-size: 0.14rem;
    color: deeppink;

  }



</style>
