<template>
  <div id="tab">
    <div class="tab-bar clearfix">
      <a href="javascript:;">HTML</a>
      <a href="javascript:;">CSS</a>
      <a href="javascript:;">JavaScript</a>
      <a href="javascript:;" class="active">Vue</a>
    </div>
    <div class="tab-con">
      <div>HTML</div>
      <div>CSS</div>
      <div>JavaScript</div>
      <div class="light">Vue</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Tab",
      data () {
        return {

        }
      },
      methods: {

      }

    }
</script>

<style scoped>
  #tab {
    width: 400px;
    border: 1px solid #ccc;
    margin: 60px auto 0;
  }
  .tab-bar {
    width: 400px;
    background-color: #ccc;
  }
  .tab-bar a {
    float: left;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    text-decoration: none;
    color: #000;
  }
  .tab-con div {
    text-align: left;
    height: 100px;
    display: none;
  }


  .tab-bar .active {
    background-color: #0099ff;
  }
  .tab-con .light {
    display: block;
  }
  </style>
