<template>
    <header>
        <div class="header_top">
          <a href="#"><router-link to="/indexLeft"><i class="iconfont">&#xe638;</i>频道</router-link></a>
          <div class="header_sou">
            <a href="#"><i class="iconfont">&#xe60b;</i>搜索品牌或商品</a>
            <i class="iconfont">&#xe6c4;</i>
          </div>
          <a href="#"><i class="iconfont">&#xe640;</i>分类</a>
        </div>
        <div class="header_bottom" v-show="isShow">

          <header-bottom :h="he.nav"></header-bottom>

          <div class="heabot_right" @click="bottom2">
            ∨
          </div>
        </div>
        <div class="header_bottom2" v-show="isNone">
            <div class="choose">
              <span>请选择</span>
              <div class="heabot_right" @click="bottom1">
                ∧
              </div>
            </div>

          <header-location :lo="he.navBottom"></header-location>
          <div class="masked">
          </div>
        </div>

    </header>

</template>

<script>
    import HeaderBottom from "./HeaderBottom";
    import HeaderLocation from "./HeaderLocation";
    export default {
        name: "IndexHeader",
      components: {HeaderLocation, HeaderBottom},
      props:["he"],
      data(){
          return{
            isShow:true,
            isNone:false
          }
      },
      methods:{
        bottom2(){
          this.isShow = !this.isShow
          this.isNone = !this.isNone
        },
        bottom1(){
          this.isShow = !this.isShow
          this.isNone = !this.isNone
        }
      }

    }
</script>

<style scoped>
  header{
    width: 100%;
  }
  .header_top{
    padding: .05rem .10rem;
    box-sizing: border-box;
    display: flex;
    /*justify-content: space-between;*/
  }
  .header_top a{
    font-size: .08rem;
    color: #343434;
    text-align: center;
  }
  .header_top a .iconfont{
    font-size: .18rem;
    color: #343434;
    display: block;
    margin-bottom: .01rem;
  }
  .header_sou{
    flex: 1;
    margin: 0 .14rem;
    background-color: #f3f4f6;
    border:1px solid #f2f2f3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .10rem;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .header_sou a{
    display: flex;
    align-items: center;
    font-size: .12rem;
    color: #9fa0a5;
  }
  .header_sou a .iconfont{
    font-size: .16rem;
    margin-right: .10rem;
  }
  .header_sou .iconfont{
    font-size: .18rem;
    color: #9fa0a5;
  }
  .header_bottom{
    width: 100%;
    display: flex;
    padding: .10rem .06rem;
    box-sizing: border-box;
  }

  .heabot_right{
    width: 5%;
    font-size: .24rem;
    color: #53575f;
    margin-left: .10rem;
  }
  .header_bottom2{
    width: 100%;
    /*display: none;*/
    position: fixed;
    background-color: #ffffff;
    z-index: 3;
  }
  .choose{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .06rem;
    box-sizing: border-box;
  }
  .choose span{
     font-size: .12rem;
    color: #999a9f;
  }
  .masked{
    position: fixed;
    width: 100%;
    height: 49.2%;
    opacity: 0.7;
    bottom: 0;
    left:0;
    background-color: gray;
  }
</style>
