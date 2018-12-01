<template>
  <div class="heabot_left">
    <a href="#" v-for="p in h">{{p.nav1}}</a>
  </div>
</template>

<script>
    export default {
        name: "HeaderBottom",
      props:["h"]
    }
</script>

<style scoped>
  .heabot_left{
    width: 95%;
    display: flex;
    flex: 1;
    overflow-x: scroll;
    white-space: nowrap;
  }
  .heabot_left::-webkit-scrollbar {
    display: none;
  }
  .heabot_left a{
    flex-shrink: inherit;
    display: flex;
    align-items: center;
    padding: .05rem .07rem;
    box-sizing: border-box;
    font-size: .12rem;
    color: #53575f;
    border-radius: 5px;
  }
  .heabot_left a:nth-child(1){
    background-color: #d24ba9;
    color: #ffffff;
  }

</style>
