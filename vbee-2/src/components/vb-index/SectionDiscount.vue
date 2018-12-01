<template>
  <div>
    <div class="section_discount" v-for="p in ds.discount">
      <img :src="p.pic"/>
      <div class="discount_right">
        <h1>{{p.title}}</h1>
        <div class="discount_time">
          <span>{{p.span1}}</span>
          <span>{{p.span2}}</span>
        </div>
      </div>
    </div>
      <section-upper :pe="ds.upper"></section-upper>
  </div>
</template>

<script>
    import SectionUpper from "./SectionUpper";
    export default {
        name: "SectionDiscount",
      props:["ds"],
      components: {SectionUpper}
    }
</script>

<style scoped>
  .section_discount{
    width: 100%;
    display: flex;
    justify-content: center;
    padding: .15rem 0;
    box-sizing: border-box;
  }
  .section_discount img{
    width: .50rem;
    height: .45rem;
    margin-right: .15rem;
  }

  .discount_right h1{
    font-size: .18rem;
    color: #000000;
  }
  .discount_time{
    border: 2px solid #000000;
    box-sizing: border-box;
    display: flex;
  }
  .discount_time span{
    font-size: .10rem;
    color: #000000;
    padding: .02rem .08rem;
    box-sizing: border-box;
  }
  .discount_time span:nth-child(1){
    background-color: #000000;
    color: #ffffff;
  }
</style>
