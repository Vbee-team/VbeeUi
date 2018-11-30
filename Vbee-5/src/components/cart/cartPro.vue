<template>
    <div class="pro">
      <div class="title">精选特卖</div>
      <ul class="uls1">
        <li>
          <div class="imgBox">
            <img src="../../../static/images/pro1.jpg" alt="">
          </div>
          <div class="dis">
            <div class="part">
              <div class="left">
                <h4 class="name">唯品自营 | 【舒缓修护 补水锁水】原自然乐园 芦荟舒缓保湿凝胶300ml 滋润保湿面膜 芦荟胶</h4>
                <p>日韩代购断货王</p>
                <p>300ml</p>
                <div class="count">
                  <span>-</span>
                  <input type="text" value="1">
                  <span>+</span>
                </div>
              </div>
              <div class="right">
                <div class="price">￥32</div>
                <div class="old">￥78</div>
                <i class="iconfont icon-cuohao"></i>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="imgBox">
            <img src="../../../static/images/pro2.jpg" alt="">
          </div>
          <div class="dis">
            <div class="part">
              <div class="left">
                <h4 class="name">唯品自营 | 【舒缓修护 补水锁水】原自然乐园 芦荟舒缓保湿凝胶300ml 滋润保湿面膜 芦荟胶</h4>
                <p>日韩代购断货王</p>
                <p>300ml</p>
                <div class="count">
                  <span>-</span>
                  <input type="text" value="1">
                  <span>+</span>
                </div>
              </div>
              <div class="right">
                <div class="price">￥32</div>
                <div class="old">￥78</div>
                <i class="iconfont icon-cuohao"></i>
              </div>
            </div>
          </div>

        </li>
      </ul>
      <div class="total">￥32</div>
      <div class="note">
        <span>运费</span>
        <p>唯品自营商品再购6元可享受新会员专享全场38元包邮</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "cartPro"
    }
</script>

<style lang="scss" scoped>
.pro{
  padding: 0 .14rem;
  background-color: #fff;
  .title{
    height: .45rem;
    font-size: .12rem;
    line-height: .45rem;
    border-bottom: 1px solid #e6e6e6;
  }
  .uls1{
    li{
      padding-top: .18rem;
      padding-bottom: .25rem;
      display: flex;
      .imgBox{
        width: .63rem;
        height: .79rem;
        margin-right: .14rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .dis{
        flex: 1;
        .part{
          font-size: .14rem;
          display: flex;
          .left{
            .name{
              display: -webkit-box;
              font-weight: 400;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            }
            p{
              font-size: .1rem;
              line-height: .2rem;
              color: #999;
            }
            .count{
              color: #848891;
              input{
                width: .315rem;
                height: .21rem;
                display: inline-block;
                border: 1px solid #e7e7e7;
                margin: 0 -.04rem;
                text-align: center;
              }
              span{
                text-align: center;
                display: inline-block;
                width: .24rem;
                height: .21rem;
                border: 1px solid #e7e7e7;
              }
            }
          }
          .right{
            text-align: right;
            margin-left: .28rem;
            .price{
              color: #222;
            }
            .old{
              font-size: .1rem;
              color: #98989f;
              text-decoration: line-through;
              margin-bottom: .44rem;
            }
            .iconfont{
              font-size: .18rem;
            }
          }
        }
      }
      &:last-child{
        border-bottom: 1px solid #e6e6e6;
      }
    }
  }
  .total{
     line-height: .44rem;
     font-size: .16rem;
    text-align: right;
   }
  .note{
    overflow: hidden;
    font-size: .12rem;
    color: #585c64;
    span{
      float: left;
      color: #3a5998;
      padding: 0 .02rem;
      border: 1px solid rgba(58,89,152,.5);
      margin-right: .06rem;
      margin-bottom: .24rem;
    }
  }
}
</style>
