<template>
    <div>
      <ul class="uls">
        <li v-for="o in r">
          <a href="javascript:;">
            <img :src="o.img" class="big">
            <div class="msgbox" v-if="o.icon != ''">
              <div class="act">
                <p><span>{{o.num}}折起</span>{{o.name}}</p>
                <span class="pms">剩{{o.day}}天</span>
              </div>
              <div class="txtBot">
                <img :src="o.icon" v-if="o.btn == 'true'" alt="">
                {{o.txt}}
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "NewbeautyPro",
      props:["r"]
    }
</script>

<style lang="scss" scoped>
.uls{
  background-color: #f3f4f6;
  li{
    margin-top: .08rem;
    background-color: #fff;
    a{
      .big{
        width: 100%;
      }
      .msgbox{
        padding: .08rem .1rem;
        height: .58rem;
        box-sizing: border-box;
        .act{
          font-size: .1rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          p{
            width: 70%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: .14rem;
            font-weight: 600;
            color: #000;
            span{
              margin-right: .04rem;
            }
          }
          .pms{
            color: #98989f;
          }
        }
        .txtBot{
          margin-top: .06rem;
          font-size: .1rem;
          color: #5771a8;
          display: flex;
          img{
            width: .16rem;
            height: .16rem;
            margin-right: .04rem;
          }
        }
      }
    }
  }
}
</style>
