<template>
  <div>
    <hunt-header></hunt-header>
    <div>

      <hunt-list :hunt="huntArry.hunt"></hunt-list>
    </div>
  </div>

</template>

<script>
  import classArry from '../apis/serverApi';
  import HuntHeader from "../components/v-hunt/HuntHeader";
  import HuntList from "../components/v-hunt/HuntList";
  export default {
    name: "VbeeHunt",
    components: {HuntList, HuntHeader},
    data() {
      return {
        huntArry: []
      }
    },
    created() {
      this._initArry()
    },
    methods: {
      _initArry() {
        classArry.classdata(data => {
          this.huntArry = data
          console.log(data)
        })
      }
    }
  }
</script>

<style scoped>

</style>
