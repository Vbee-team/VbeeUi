<template>
  <section>
    <h3 class="spetit">今日特卖 · 10点上新</h3>

    <ul class="spelist">
      <li v-for="n in spe">
        <img :src="n.imgq">
        <p>{{n.spep}}<span>{{n.spespan}}</span></p>
        <p>{{n.spepw}}<span>{{n.spespw}}</span></p>
      </li>

    </ul>
  </section>

</template>

<script>
  export default {
    name: "ClassifySpecial",
    props: ["spe"]
  }
</script>

<style scoped>
  section {
    width: 100%;
    height: 100%;
    margin-top: 0.25rem;
  }

  .spetit {
    /*font-size: 0.1rem;*/
    text-align: center;
    margin-bottom: 0.2rem;
  }

  .spelist li {
    margin-bottom: 0.1rem;
    width: 3.52rem;
    height: 2.35rem;
    background: white;
    border-radius: 0.1rem;
    margin-left: 0.1rem;
  }

  .spelist li img {
    width: 100%;
    height: 75%;
  }

  .spelist li p:nth-child(2) {
    font-size: 0.15rem;
    font-weight: 600;
    margin-left: 0.1rem;
  }

  .spelist li p:nth-child(2) span {
    font-size: 0.1rem;
    font-weight: 600;
    float: right;
    margin-right: 0.1rem;
  }

  .spelist li p:nth-child(3) {
    font-size: 0.12rem;
    font-weight: 600;
    margin-left: 0.1rem;
    color: #e262a8;
  }

  .spelist li p:nth-child(3) span {
    font-size: 0.12rem;
    color: #494c53;
    line-height: 0.45rem;
  }
</style>
