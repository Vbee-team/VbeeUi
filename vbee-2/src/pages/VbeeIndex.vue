<template>
    <div class="box">
      <index-header :he="indexArry"></index-header>
      <index-section :se="indexArry"></index-section>
      <index-footer></index-footer>
    </div>
</template>

<script>

  import indexArr from '../apis/serverApi';
  import IndexHeader from "../components/vb-index/IndexHeader";
  import IndexSection from "../components/vb-index/IndexSection";
  import IndexFooter from "../components/vb-index/IndexFooter";

   export default {
        name: "VbeeIndex",
     components: { IndexFooter, IndexSection, IndexHeader},
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

</style>
