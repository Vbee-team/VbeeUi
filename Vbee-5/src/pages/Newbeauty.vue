<template>
<div class="box">
  <newbeauty-header :title="title"></newbeauty-header>
  <div class="con">
    <newbeauty-swiper :slide="slide"></newbeauty-swiper>
    <newbeauty-lists :lists1="list1" :lists2="list2" :lists3="list3" :lists4="list4"></newbeauty-lists>
    <newbeauty-act :act1="act1" :act2="act2" :act3="act3"></newbeauty-act>
    <newbeauty-update :update="update" :p="pro"></newbeauty-update>
  </div>
</div>
</template>

<script>
    import NewbeautyHeader from "../components/Newbeauty/NewbeautyHeader";
    import NewbeautySwiper from "../components/Newbeauty/NewbeautySwiper";
    import NewbeautyLists from "../components/Newbeauty/NewbeautyLists";
    import NewbeautyAct from "../components/Newbeauty/NewbeautyAct";
    import NewbeautyUpdate from "../components/Newbeauty/NewbeautyUpdate";
    export default {
        name: "Newbeauty",
      components: {NewbeautyUpdate, NewbeautyAct, NewbeautyLists, NewbeautySwiper, NewbeautyHeader},
      data(){
        return{
          title:[
            {"txt":"今日推荐"},
            {"txt":"美妆"},
            {"txt":"母婴"},
            {"txt":"国际"},
            {"txt":"家电"},
            {"txt":"家居"},
            {"txt":"生活"},
            {"txt":"唯品·奢"},
            {"txt":"即将上线"},
          ],
          slide:[
            {"img":"../../static/images/a1.jpg"},
            {"img":"../../static/images/a2.jpg"},
            {"img":"../../static/images/a3.jpg"},
            {"img":"../../static/images/a4.jpg"},
            {"img":"../../static/images/a5.jpg"}
          ],
          list1:[
            {"img":"../../static/images/b1.gif"},
            {"img":"../../static/images/b2.jpg"},
            {"img":"../../static/images/b3.jpg"},
            {"img":"../../static/images/b4.jpg"},
            {"img":"../../static/images/b5.jpg"},
            {"img":"../../static/images/b6.jpg"},
            {"img":"../../static/images/b7.jpg"},
            {"img":"../../static/images/b8.jpg"},
            {"img":"../../static/images/b9.jpg"},
            {"img":"../../static/images/b10.jpg"}
          ],
          list2:[
            {"img":"../../static/images/c1.gif"},
            {"img":"../../static/images/c2.gif"},
            {"img":"../../static/images/c3.jpg"},
            {"img":"../../static/images/c4.jpg"},
          ],
          list3:[
            {"img":"../../static/images/d1.jpg"},
            {"img":"../../static/images/d2.jpg"},
            {"img":"../../static/images/d3.jpg"},
            {"img":"../../static/images/d4.gif"},
          ],
          list4:[
            {"img":"../../static/images/e1.jpg"},
            {"img":"../../static/images/e2.jpg"}
          ],
          act1:[
            {"img":"../../static/images/g2.jpg"},
            {"img":"../../static/images/g3.jpg"},
            {"img":"../../static/images/g4.jpg"}
          ],
          act2:[
            {"img":"../../static/images/g5.jpg"},
            {"img":"../../static/images/g6.jpg"}
          ],
          act3:[
            {"img":"../../static/images/f1.jpg"},
            {"img":"../../static/images/f2.jpg"},
            {"img":"../../static/images/f3.jpg"}
          ],
          update:[
            {"img":"../../static/images/big01.jpg"},
            {"img":"../../static/images/big02.jpg"},
            {"img":"../../static/images/big1.jpg"}
          ],
          pro:[
            {"img":"../../static/images/big2.jpg","num":"5.3","name":"The History of Whoo化妆品专场",
              "day":"1", "icon":"../../static/images/small.png","txt":"购物满2180元即送礼品，数量有限，送完即止",
              "btn":"true"},
            {"img":"../../static/images/big3.jpg","num":"3.9","name":"玉兰油Olay护肤品专场",
              "day":"1","btn":"false"},
            {"img":"../../static/images/big4.jpg","num":"2.7","name":"德国妮维雅NIVEA百年专业护肤品专场",
              "day":"2","btn":"false"},
            {"img":"../../static/images/big5.jpg","num":"4.4","name":"欧莱雅Loreal化妆品专场",
              "day":"1","btn":"false"},
            {"img":"../../static/images/big6.jpg","num":"1.9","name":"洗护沐浴-最后疯抢专场",
              "day":"2","btn":"false"},
            {"img":"../../static/images/big7.jpg","num":"1.1","name":"丸美MARUBI护肤专场",
              "day":"1","btn":"false"},
            {"img":"../../static/images/big8.jpg","num":"7.4","name":"SK-II化妆品专场",
              "day":"1","btn":"false"},
            {"img":"../../static/images/big9.jpg","num":"4.6","name":"雅诗兰黛EsteeLauder化妆品专场",
              "day":"1","btn":"false"},
            {"img":"../../static/images/big10.jpg","num":"2.4","name":"一叶子One Leaf护肤品专场",
              "day":"1","btn":"false"}
          ]
        }
      }
    }
</script>

<style lang="scss" scoped>
.box{
  height: 100%;
  display: flex;
  flex-direction: column;
  .con{
    flex: 1;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
