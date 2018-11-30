<template>
  <div>

      <classify-swiper :swiper="classifyArry.swiper"></classify-swiper>
      <classify-navigation :ifytit="classifyArry.ifytit"></classify-navigation>
      <classify-purchase :purch="classifyArry.purch"></classify-purchase>
      <classify-special :spe="classifyArry.spe"></classify-special>

  </div>

</template>

<script>
  import classArry from '../apis/serverApi';
  import ClassifySwiper from "../components/v-classify/ClassifySwiper";
  import ClassifyNavigation from "../components/v-classify/ClassifyNavigation";
  import ClassifyPurchase from "../components/v-classify/ClassifyPurchase";
  import ClassifySpecial from "../components/v-classify/ClassifySpecial";
  export default {
    name: "VbeeClassify",
    components: {ClassifySpecial, ClassifyPurchase, ClassifyNavigation, ClassifySwiper},
    data() {
      return {
        classifyArry: []
      }
    },
    created() {
      this._initArry()
    },
    methods: {
      _initArry() {
        classArry.classdata(data => {
          this.classifyArry = data
          console.log(data)
        })
      }
    }
  }
</script>

<style scoped>

</style>
