<template>
  <div class="rights">
    <ul>
      <li v-for="taba  in tabs" >
        <h3>{{taba.tith}}</h3>
        <ul class="sec_right_top">
          <li v-for="s in taba.sec">
            <img :src="s.imge">
            <span>{{s.spans}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "select5",
    data(){
      return {
        tabs: [
          {
            tith:"猜你喜欢5",
            sec: [
              {
                imge: "../../static/ficationimages/li_1.jpg",
                spans: "秋冬上新"
              },
              {
                imge: "../../static/ficationimages/li_2.jpg",
                spans: "秋冬上新"
              },
              {
                imge: "../../static/ficationimages/li_3.jpg",
                spans: "秋冬上新"
              },
              {
                imge: "../../static/ficationimages/li_4.jpg",
                spans: "秋冬上新"
              },
              {
                imge: "../../static/ficationimages/li_5.jpg",
                spans: "秋冬上新"
              },
              {
                imge: "../../static/ficationimages/li_6.jpg",
                spans: "秋冬上新"
              },
              {
                imge: "../../static/ficationimages/li_7.jpg",
                spans: "秋冬上新"
              },
              {
                imge: "../../static/ficationimages/li_8.jpg",
                spans: "秋冬上新"
              }
            ]
          },
          {
            tith:"猜你还喜欢",
            sec: [
              {
                imge: "../../static/ficationimages/li_1.jpg",
                spans: "秋冬上新"
              },
              {
                imge: "../../static/ficationimages/li_2.jpg",
                spans: "秋冬上新"
              },
              {
                imge: "../../static/ficationimages/li_3.jpg",
                spans: "秋冬上新"
              },
              {
                imge: "../../static/ficationimages/li_4.jpg",
                spans: "秋冬上新"
              },
              {
                imge: "../../static/ficationimages/li_5.jpg",
                spans: "秋冬上新"
              },
              {
                imge: "../../static/ficationimages/li_6.jpg",
                spans: "秋冬上新"
              },
              {
                imge: "../../static/ficationimages/li_7.jpg",
                spans: "秋冬上新"
              },
              {
                imge: "../../static/ficationimages/li_8.jpg",
                spans: "秋冬上新"
              }
            ]
          }
        ],
      }
    }
  }
</script>

<style scoped>
  .rights {
    width: 77%;
    height: 6.3rem;
    overflow-y: scroll;
  }

  .sec_right_top {

    font-size: 0.12rem;
    text-align: center;
    line-height: 0.4rem;
    display: flex;
    flex-wrap: wrap;
    background: #ffffff;
    border-bottom: 1px solid #f6f6f6;
  }

  .sec_right_top li {
    margin-left: 0.25rem;
  }

  .sec_right_top img {
    width: 0.65rem;
    height: 0.65rem;
    margin-top: 0.1rem;
  }

  .sec_right_top span {
    display: block;
  }

  .rights h3 {
    background: white;
    font-size: 0.14rem;
    padding: 0.15rem 0 0.08rem 0.3rem;
  }
</style>
