<template>
  <div>
    <ul class="leftbian" v-model="tabView">
      <li v-for="(tab ,index) in tabs" :class="{cur:iscur==index}"
          @click="iscur=index,tabChange('select' + (index + 1))"
          >
        <span> {{tab.name}} </span>
      </li>
    </ul>
    <keep-alive>
      <component v-bind:is="tabView"></component>
    </keep-alive>
  </div>

</template>

<script>
  // import $ from "jquery"
  import Select5 from "./select5";
  import Select4 from "./select4";
  import Select3 from "./select3";
  import Select2 from "./select2";
  import Select1 from "./select1";

  export default {
    name: "FicationLeft",
    components: {Select1, Select2, Select3, Select4, Select5},
    // props: ["fical"],
    data() {
      return {
        tabView: 'select1',
        tabs: [
          {name: "为你推荐"},
          {name: "女装"},
          {name: "男女内衣"},
          {name: "女鞋"},
          {name: "男鞋"},
          {name: "箱包皮具"},
          {name: "手表配饰"},
          {name: "护肤彩妆"},
          {name: "个人护理"},
          {name: "母婴"},
          {name: "运动户外"},
          {name: "手机数码"},
          {name: "家电用器"},
          {name: "家具家纺"},
          {name: "家居家装"},
          {name: "生活超市"},
          {name: "唯品国际"},
          {name: "唯品优选"},
          {name: "唯品·著"},
          {name: "唯品金融"},
          {name: "唯品医药"},
          {name: "图书娱乐"}
        ],
        iscur: 0
      }
    },

    methods: {
      tabChange: function (tab) {
        this.tabView = tab;
      }
    }

  }
</script>

<style scoped>
  .leftbian {
    width: 23%;
    height: 6.3rem;
    overflow-y: scroll;
    float: left;

  }

  .leftbian li {

    text-align: center;
    line-height: 0.51rem;
    width: 100%;
    display: block;

    font-size: 0.12rem;
    color: #000000;

  }

  .leftbian li span {
    width: 0.7rem;
    display: block;
    border-bottom: 1px solid deeppink;
    margin: 0 0.1rem;
  }


  .cur {
    border-left: 4px solid brown;
    background-color: white;
  }
</style>
