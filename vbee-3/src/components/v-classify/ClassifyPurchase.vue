<template>
    <section>
        <div class="purchheader">
          <div class="header">
            <p>晚20点场 丨 还剩</p>
            <ul class="purchheaderul">
              <li>05</li>
              <li>:</li>
              <li>55</li>
              <li>:</li>
              <li>23</li>
            </ul>
          </div>

        </div>
      <ul class="purchfooter">
        <purch-footer :idx="i" :key="i" :item="n" v-for="(n,i) in purch"></purch-footer>
      </ul>
    </section>
</template>

<script>
    import PurchFooter from "./PurchFooter";
    export default {
        name: "ClassifyPurchase",
      props:["purch"],
      components: {PurchFooter}
    }
</script>

<style scoped>
  section{
    width: 100%;
    height: 2.55rem;
    background: url("../../../static/classifyImages/purchase_bg.jpg") no-repeat ;
    background-size: 100% 100%;
    margin-bottom: 0.1rem;
  }
  .purchheader{
    width: 2.33rem;
    height: 0.4rem;
    position: relative;
  }
  .header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    position: absolute;
    left: 0.75rem;
    top: 0.6rem;
  }
  .purchheader p{
    font-size: 0.1rem;
    font-weight: 600;
  }
  .purchheaderul{
    display: flex;
    margin-left: 0.1rem;
  }
  .purchheaderul li:nth-child(2n+1){
    height: 0.18rem;
    text-align: center;
    line-height: 0.18rem;
    background: black;
    color: white;
  }
  .purchfooter{
    width: 100%;
    height: 1.55rem;
    margin-top: 0.5rem;
    display: flex;
  }
</style>
