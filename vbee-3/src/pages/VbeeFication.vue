<template>
  <div class="AAA">
    <fication-header></fication-header>
    <div class="shen">
      <fication-left ></fication-left>

    </div>
  </div>
</template>

<script>

  // import classArry from '../apis/serverApi';
  import FicationHeader from "../components/v-fication/FicationHeader";
  import FicationLeft from "../components/v-fication/FicationLeft";

  export default {
    name: "VbeeFication",
    components: { FicationLeft, FicationHeader},
    // data() {
    //   return {
    //     ficaArry: []
    //   }
    // },
    // created() {
    //   this._initArry()
    // },
    // methods: {
    //   _initArry() {
    //     classArry.classdata(data => {
    //       this.ficaArry = data
    //       console.log(data)
    //     })
    //   }
    // }

  }
</script>

<style scoped>
  .AAA {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .shen {
    width: 100%;
    overflow: hidden;
    flex: 1;
    overflow-y: scroll;
  }

</style>
