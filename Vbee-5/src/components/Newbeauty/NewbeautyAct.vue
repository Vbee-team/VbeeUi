<template>
    <div>
      <img src="../../../static/images/title.jpg" alt="" class="title">
      <div class="act">
        <a href="javascript:;"><img src="../../../static/images/g1.jpg" alt="" class="big"></a>
        <ul class="smallImg">
          <li v-for="a in act1">
            <a href="javascript:;">
              <img :src="a.img">
            </a>
          </li>
        </ul>
        <ul class="bigger">
          <li v-for="c in act2">
            <a href="javascript:;">
              <img :src="c.img">
            </a>
          </li>
        </ul>
        <img src="../../../static/images/ft.jpg" alt="" class="title">
        <ul class="new">
          <li v-for="t in act3">
            <a href="javascript:;">
              <img :src="t.img" >
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      name: "NewbeautyAct",
      props:["act1","act2","act3"]
    }
</script>

<style lang="scss" scoped>
  .title{
    width: 100%;
  }
  .act{
    width: 100%;
    .big{
      width: 100%;
    }
    .smallImg{
      overflow: hidden;
      li{
        img{
          width: 33.3%;
          float: left;
        }
      }

    }
    .bigger{
      overflow: hidden;
      li{
        img{
          width: 50%;
          float: left;
        }
      }
    }
    .new{
      overflow: hidden;
      img{
        width: 33.3%;
        float: left;
      }
    }
  }
</style>
