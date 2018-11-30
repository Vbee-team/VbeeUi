<template>
    <div>
      <div class="every">
        <h3 class="title">每天早10点·晚8点上新</h3>
        <ul>
          <li v-for="u in update">
            <img :src="u.img" alt="">
          </li>
        </ul>
      </div>
      <newbeauty-pro :r="p"></newbeauty-pro>
    </div>
</template>

<script>
    import NewbeautyPro from "./NewbeautyPro";
    export default {
      name: "NewbeautyUpdate",
      components: {NewbeautyPro},
      props:["update","p"]
    }
</script>

<style lang="scss" scoped>
  .every{
    .title{
      text-align: center;
      font-size: .14rem;
      line-height: .56rem;
      margin-bottom: .02rem;
    }
    img{
      width: 100%;
    }
  }

</style>
