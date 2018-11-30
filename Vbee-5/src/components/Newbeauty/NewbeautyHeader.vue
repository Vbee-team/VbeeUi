<template>
    <div class="header">
      <div class="top">
        <div class="bet">
          <i class="iconfont icon-hengxian"></i>
          频道
        </div>
        <div class="center">
          <div class="cenLeft">
            <i class="iconfont icon-sousuo"></i>
            <input type="text" placeholder="搜索品牌或商品">
          </div>
          <i class="iconfont icon-xiangji1"></i>
        </div>
        <div class="bet">
          <i class="iconfont icon-fenlei1"></i>
          分类
        </div>
      </div>
      <div class="bot">
        <div class="abox">
          <a href v-for="t in title">{{t.txt}}</a>
        </div>
        <div class="arrow"><i class="iconfont icon-Group-"></i></div>
      </div>
    </div>
</template>

<script>
    export default {
      props:["title"],
        name: "NewbeautyHeader",
    }
</script>

<style lang="scss" scoped>
  .header{
    padding-top: .04rem;
    .top{
      display: flex;
      justify-content: space-between;
      .bet{
        display: flex;
        flex-direction: column;
        font-size: .06rem;
        color: #505050;
        text-align: center;
        .iconfont{
          font-size: .16rem;
          font-weight: 600;
          color: #424242;
          line-height: .16rem;
        }
        &:nth-child(1){
          margin-left: .1rem;
          margin-right: .15rem;
        }
        &:last-child{
          margin-left: .17rem;
          margin-right: .11rem;
        }
      }
      .center{
        flex: 1;
        height: .31rem;
        display: flex;
        background-color: #f3f4f6;
        align-items: center;
        justify-content: space-between;
        padding-right: .09rem;
        box-sizing: border-box;
        border: 1px solid #eeeff1;
        .cenLeft{
          display: flex;
          input{
            background-color: transparent;
            border: 0;
            outline: 0;
            &::placeholder{
              font-size: .12rem;
              color: #9a999e;
            }
          }
        }
        .iconfont{
          font-size: .16rem;
          color: #a7a8ac;
          &:first-child{
            margin-left: .08rem;
            margin-right: .06rem;
          }
        }
      }
    }
    .bot{
      display: flex;
      height: .38rem;
      margin-top: .03rem;
      .abox{
        flex: 1;
        line-height: .38rem;
        font-size: .12rem;
        white-space: nowrap;
        overflow-x: auto;
        &::-webkit-scrollbar{
          height: 0;
        }
        a{
          color: #727375;
          padding: .07rem;
          margin: 0 .02rem;
          &:nth-child(2){
            background: url("../../../static/images/aBg.png") no-repeat center;
            background-size: .37rem .26rem;
            color: #fff;
            color: rgba(255,255,255,.8);
          }
        }
      }
      .arrow{
        width: .4rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .iconfont{
          font-size: .24rem;
          color: #727375;
          margin-right: .06rem;
        }
      }
    }
  }
</style>
