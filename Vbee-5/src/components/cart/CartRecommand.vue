<template>
    <div class="rec">
      <div class="title">实惠好货随手买</div>
      <div class="con">
        <a v-for="(item,idx) in items" @click="addClass(idx)" :class="{active:idx==current}">{{item.txt}}</a>
        <div class="box">
          <div v-for="i in imgs">
            <img :src="i.img" alt="">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "CartRecommand",
      data(){
        return{
          current:0,
          items:[
            {"txt":"男童上装"},
            {"txt":"女童上装"},
            {"txt":"女童套装"},
            {"txt":"女童下装"}
          ],
          imgs:[
            {"img":"../../static/images/a1.jpg"},
            {"img":"../../static/images/a2.jpg"},
            {"img":"../../static/images/a3.jpg"},
            {"img":"../../static/images/a4.jpg"},
            {"img":"../../static/images/a5.jpg"}
          ]
        }
      },
      methods:{
        addClass:function(idx){
          this.current=idx;
        }
      },
    }
</script>

<style lang="scss" scoped>
.rec{
  margin: .14rem 0;
  background-color: #fff;
  .title{
    height: .5rem;
    font-size: .12rem;
    line-height: .5rem;
    padding-left: .14rem;
  }
  .con{
    font-size: .12rem;
    padding-left: .08rem;
    a{
      display: inline-block;
      color: #57585c;
      margin: 0 .15rem;
      padding-bottom: .07rem;
    }
    .active{
      color: #e8007e;
      border-bottom: .03rem solid #e8007e;
    }
    .box{
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      margin-top: .19rem;
      &::-webkit-scrollbar{
        height: 0;
      }
      div{
        width: 30%;
        height: 1rem;
        flex-shrink: 0;
        margin-bottom: .19rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
