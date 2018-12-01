<template>
    <div class="index_left">
      <div class="indexLeft_top">
        <b><router-link to="/"><span>&gt;</span></router-link></b>
        <a href="#" v-for="p in indexArry.left1">
          <img :src="p.pic"/>{{p.title}}
        </a>
      </div>

      <div class="indexLeft_bottom">
        <a href="#" v-for="b in indexArry.left2">
          <img :src="b.pic"/>{{b.title}}
        </a>
      </div>
    </div>

</template>

<script>
    import indexArr from '../apis/serverApi';
    export default {
        name: "VbeeInleft",
      data(){
        return{
          indexArry:[]
        }
      },
      created(){
        this._initArry()
      },
      methods:{
        _initArry(){
          indexArr.getData(data=>{
            this.indexArry = data
            console.log(data)
          })
        }
      }
    }
</script>

<style scoped>
  .index_left{
    width: 100%;
    height: 100%;
    padding: 0 .13rem;
    box-sizing: border-box;
    background-color: #181f25;
  }
  .indexLeft_top{
    border-bottom: 1px solid #ccc;
    padding: .10rem 0;
    box-sizing: border-box;
  }
  .indexLeft_top b span{
    display: flex;
    font-weight: 600;
    font-size: .24rem;
    color: #fff;
    justify-content: flex-end;
  }
  .indexLeft_top b{
    font-size: .14rem;
    color: #fff;
    display: block;
    margin-top: .10rem;
  }
  .indexLeft_top a span{
    display: flex;
    font-weight: 600;
    font-size: .24rem;
    color: #fff;
    justify-content: flex-end;
  }
  .indexLeft_top a{
    font-size: .14rem;
    color: #fff;
    display: block;
    margin-top: .10rem;
  }
  .indexLeft_top a img{
    display: inline-block;
    width: .22rem;
    height: .22rem;
    margin-right: .10rem;
    vertical-align: middle;
  }
  .indexLeft_bottom{
    display: flex;
    flex-wrap: wrap;
  }
  .indexLeft_bottom a{
    font-size: .12rem;
    color: #fff;
    text-align: center;
    margin-right: .29rem;
    margin-top: .13rem;
  }
  .indexLeft_bottom a:nth-child(5n){
    margin-right: 0;
  }
  .indexLeft_bottom img{
    width: .45rem;
    height: .45rem;
    padding: .10rem;
    box-sizing: border-box;
    border-radius: 50%;
    border:1px solid gray;
    margin-bottom: .10rem;
  }
</style>
