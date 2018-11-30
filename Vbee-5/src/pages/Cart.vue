<template>
    <div class="cart">
      <div class="con">
        <header>
          <i class="iconfont icon-left-arrow"></i>
          <div class="carts">
            购物车 <span>17:55</span>
            <p>配送至雁塔区</p>
          </div>
        </header>
        <cart-pro></cart-pro>
        <ul class="list1">
          <li v-for="l in list">
            <span :style="l.color">{{l.left}}</span>
            <i :class="l.right"></i>
          </li>
        </ul>
        <cart-recommand></cart-recommand>
      </div>

      <div class="footer">
        <p>总金额 <span>￥438</span></p>
        <a href>结算</a>
      </div>
    </div>
</template>

<script>
    import CartPro from "../components/cart/cartPro";
    import CartRecommand from "../components/cart/CartRecommand";
    export default {
      name: "Cart",
      components: {CartRecommand, CartPro},
      data(){
        return{
          list:[
            {"left":"使用优惠券","right":"iconfont icon-you","color":"color:#5786ba"},
            {"left":"使用优惠口令","right":"iconfont icon-you","color":"color:#0d0d0d"},
          ]
        }
      }
    }
</script>

<style lang="scss" scoped>
.cart{
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f3f4f6;
  .con{
    height: 100%;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
  header{
    height: .4rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: .14rem;
    border-bottom: 1px solid #e8e8ea;
    .carts{
      font-size: .15rem;
      span{
        font-size: .14rem;
        color: #b00c6d;
      }
      p{
        font-size: .09rem;
        color: #a399a1;
      }
    }
    .iconfont{
      position: absolute;
      left: .12rem;
    }
  }
  .list1{
    li{
      margin-top: .14rem;
      display: flex;
      padding-left: .14rem;
      padding-right: .06rem;
      justify-content: space-between;
      align-items: center;
      height: .44rem;
      font-size: .12rem;
      background-color: #fff;
      color: #868686;
      .iconfont{
        font-size: .2rem;
      }
    }

  }
  .footer{
    padding: 0 .13rem;
    font-size: .13rem;
    text-align: center;
    background-color: #fff;
    p{
      font-size: .12rem;
      line-height: .35rem;
      span{
        color: #dd0083;
      }
    }
    a{
      display: inline-block;
      width: 100%;
      line-height: .4rem;
      background-color: #dd0083;
      color: #fff;
      margin-bottom: .09rem;
    }
  }
}
</style>
