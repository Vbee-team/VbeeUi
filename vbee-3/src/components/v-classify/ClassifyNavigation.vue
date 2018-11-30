<template>
  <section>
    <ul class="ifynav">
      <ify-nav :item="n" :key="i" :idx="i" v-for="(n,i) in ifytit"></ify-nav>
    </ul>
    <div class="ifybottom">
      <p class="pone">
        <span class="imgf">
          <img src="../../../static/classifyImages/ify_titf_1.jpg" alt="">
        <span>300份大王纸尿裤免费领</span>
        </span>
        <span class="imgr">
          <img src="../../../static/classifyImages/ify_titf_3.jpg" alt="">
        </span>
      </p>

      <p>
         <span class="imgfr">
            <img src="../../../static/classifyImages/ify_titf_2.jpg" alt="">
            <span class="zizi">优质睡衣，<br/>宝宝睡眠香甜第一步</span>
         </span>
      </p>
    </div>
  </section>
</template>

<script>
  import IfyNav from "./IfyNav";

  export default {
    name: "ClassifyNavigation",
    props:["ifytit"],
    components: {IfyNav}
  }
</script>

<style scoped>
  section {
    height: 2.85rem;
    width: 100%;
    background: white;
    margin-bottom: 0.1rem;
  }

  .ifynav {
    width: 100%;
    height: 1.69rem;
    display: flex;
    flex-wrap: wrap;
  }

  .ifybottom {
    width: 100%;
    height: 1.16rem;
    display: flex;
  }

  .ifybottom p {
    margin-left: 0.07rem;
    height: 0.95rem;
    width: 1.74rem;
    background: #fbf9fc;
    border: 2px solid #e5e4e6;
    border-radius: 0.1rem;
    display: flex;
  }

  .imgf {
    display: block;
    margin-left: 0.1rem;
    font-weight: 600;
  }




  .imgf img {
    width: 100%;
    height: 0.45rem;
    border-bottom: 1px solid #767676;
  }

  .imgr img {
    width: 0.63rem;
    height: 0.9rem;
    float: left;
    margin-left: 0.08rem;
  }


  .imgfr{
    display: block;
    margin-left: 0.1rem;
    font-weight: 600;
    width: 100%;
    height: 0.45rem;
  }
  .imgfr img {
    width: 1rem;
    height: 0.45rem;
    border-bottom: 1px solid #767676;
  }
  .zizi{
    display: block;
  }
</style>
