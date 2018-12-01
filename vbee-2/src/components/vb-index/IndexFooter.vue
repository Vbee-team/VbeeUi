<template>
    <div class="footer">
      <div class="footer_location">
        <a href="#"><i class="iconfont">&#xe607;</i></a>
        <a href="#"><i class="iconfont">&#xe652;</i></a>
        <a href="#"><i class="iconfont">&#xe63f;</i></a>
      </div>
      <a class="footer_bottom" href="#" @click="toTop"><i class="iconfont">&#xe632;</i>顶部</a>
    </div>

</template>

<script>

    export default {
        name: "IndexFooter",
      methods: {
        toTop() {
          var setop = document.querySelector("section").scrollTop=0

          // let myTimer = setInterval(function () {
          //   setop--
          //   if(setop<=0){
          //     setop=0
          //     window.clearInterval(myTimer);
          //   }
          // },1000)

        },
        blocks(){
          var up = document.querySelector(".footer")
          var top =  document.querySelector("section").scrollTop || document.documentElement.scrollTop
          if(top >= 150){
            up.style.opacity = 1
          }else if(top <= 0){
            up.style.opacity = 0
          }
        }

      },
      mounted() {
          document.querySelector("section").onscroll = this.blocks
      },
      destroyed(){
          document.querySelector("section").onscroll = this.blocks
      }

    }
</script>

<style scoped>

  .footer{
    position: fixed;
    bottom: 0;
    opacity: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: .05rem;
    box-sizing: border-box;
    background-color: transparent;
  }
  .footer_location{
    background-color: #393f4b;
    padding: .05rem 0;
    box-sizing: border-box;
    display: flex;
    border-radius: 5px;
  }
  .footer_location a{
    display: flex;
    padding: 0 .12rem;
    box-sizing: border-box;
    border-right: 1px solid #505662;
    align-items: center;
  }
  .footer_location a .iconfont{
    font-size: .22rem;
    color: #fff;
  }
  .footer_bottom{
    font-size: .12rem;
    color: #595959;
    padding: .10rem;
    border-radius: 50%;
    box-sizing: border-box;
    border:1px solid #e3e3e3;
    text-align: center;
    background-color: #fff;
  }
  .footer_bottom .iconfont{
    display: block;
    font-size: .16rem;
  }
</style>
