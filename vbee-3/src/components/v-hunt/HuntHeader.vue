<template>
  <section>
    <div class="header">
      <i class="iconfont icon-left-arrow"></i>
      <div class="heacen">
        <input type="text" placeholder="衣服">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-xiangji"></i>
      </div>
    </div>
    <div class="center">
      <ul class="centerul">
        <li>价格
          <p class="icon">
            <i class="iconfont icon-shang"></i>
            <i class="iconfont icon-Group-"></i>
          </p>
        </li>
        <li>折扣
          <p class="icon">
            <i class="iconfont icon-shang"></i>
            <i class="iconfont icon-Group-"></i>
          </p>
        </li>
        <li>品牌
          <p class="icon">
            <i class="iconfont icon-02"></i>
          </p>
        </li>
        <li>筛选
          <p class="icon">
            <i class="iconfont icon-shaixuan"></i>
          </p>
        </li>
        <li>
          <i class="iconfont  icon-fenlei"></i>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <p @click="ponea">
        领型
        <i class="iconfont icon-Group-"></i>
      </p>
      <p @click="poneb">
        版型
        <i class="iconfont icon-Group-"></i>
      </p>
      <p @click="ponec">
        款式
        <i class="iconfont icon-Group-"></i>
      </p>
      <p @click="poned">
        衣长
        <i class="iconfont icon-Group-"></i>
      </p>

    </div>

      <div class="pone" style="height:300px;overflow-y:auto" v-show="isShowa" @touchmove.prevent>
        <ul class="poneul">
          <li>V领1</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
          <li>V领1</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
          <li>V领1</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
          <li>V领1</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
          <li>V领1</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
          <li>V领1</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
        </ul>
        <div class="bottons">
          <van-button class="button" type="default">重置</van-button>
          <van-button class="buttonss" type="primary">确认</van-button>
        </div>
      </div>
      <div class="pone" v-show="isShowb" style="height:300px;overflow-y:auto">
        <ul class="poneul">
          <li>V领2</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
          <li>V领1</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
          <li>V领1</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
          <li>V领1</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
          <li>V领1</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
          <li>V领1</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
          <li>
            <div class="bottons">
              <van-button class="button" type="default">重置</van-button>
              <van-button class="buttons" type="primary">确认</van-button>
            </div>
          </li>
        </ul>
      </div>
      <div class="pone" v-show="isShowc" style="height:300px;overflow-y:auto">
        <ul class="poneul">
          <li>V领3</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
          <li>V领1</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
          <li>V领1</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
          <li>V领1</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
          <li>V领1</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
          <li>V领1</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
          <li>
            <div class="bottons">
              <van-button class="button" type="default">重置</van-button>
              <van-button class="buttons" type="primary">确认</van-button>
            </div>
          </li>
        </ul>
      </div>
      <div class="pone" v-show="isShowd" style="height:300px;overflow-y:auto">
        <ul class="poneul">
          <li>V领4</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
          <li>V领1</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
          <li>V领1</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
          <li>V领1</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
          <li>V领1</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
          <li>V领1</li>
          <li>方领</li>
          <li>高领</li>
          <li>挂脖</li>
          <li>立领</li>
          <li>
            <div class="bottons">
              <van-button class="button" type="default">重置</van-button>
              <van-button class="buttons" type="primary">确认</van-button>
            </div>
          </li>
        </ul>
      </div>

  </section>
</template>

<script>


  export default {
    name: "HuntHeader",
    data() {
      return {
        isShowa: false,
        isShowb: false,
        isShowc: false,
        isShowd: false,
      }
    },
    methods: {
      ponea() {
        this.isShowa = !this.isShowa;
      },
      poneb() {
        this.isShowb = !this.isShowb;
      },
      ponec() {
        this.isShowc = !this.isShowc;
      },
      poned() {
        this.isShowd = !this.isShowd;
      }
    }
  }
</script>

<style scoped>
  section {
    width: 100%;
    height: 1.24rem;
    background: white;
  }

  .header {
    width: 100%;
    height: 0.4rem;
    border-bottom: 1px solid #f5f5f5;
    display: flex;
    align-items: center;
  }

  .icon-left-arrow {
    line-height: 0.4rem;
    margin-left: 0.1rem;
  }

  .header input {
    width: 3.24rem;
    height: 0.29rem;
    background: #f3f4f6;
    border: 1px solid #dfe0e2;
    margin-left: 0.05rem;
    text-indent: 0.25rem;
  }

  .heacen {
    position: relative;
  }

  .icon-sousuo {
    position: absolute;
    left: 0.1rem;
    top: 0.08rem;

  }

  .icon-xiangji {
    position: absolute;
    right: 0.1rem;
    top: 0.08rem;
  }

  .centerul {
    display: flex;
  }

  .centerul li {
    display: flex;
    margin: 0 0.1771rem;
    line-height: 0.38rem;
  }

  .center {
    width: 100%;
    height: 0.38rem;
    border-bottom: 1px solid #f5f5f5;
  }

  .icon {
    display: flex;
    flex-direction: column;
  }

  .icon-shang {
    font-size: 0.17rem;
    margin-left: 0.02rem;
    line-height: 0.1rem;
    margin-top: 0.1rem;
  }

  .icon-Group- {
    font-size: 0.1rem;
    margin-left: 0.05rem;
    line-height: 0.1rem;
  }

  .icon-fenlei {
    font-size: 0.1rem;
  }

  .bottom {
    width: 100%;
    height: 0.46rem;
    display: flex;

  }

  .bottom p {
    width: 0.81rem;
    height: 0.27rem;
    background: #f6f6f6;
    border-radius: 5px;
    margin: 0.08rem 0 0 0.1rem;
    text-align: center;
    line-height: 0.27rem;
  }

  .cur {
    border: 1px solid #767574;
    border-bottom: none;
  }

  .pone {
    width: 100%;
    height: 40%;
    background: white;
    position: absolute;
  }

  .poneul {
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }

  .poneul li {
    width: 50%;
    font-size: 0.14rem;
    margin-top: 0.1rem;
    text-indent: 0.1rem;
    line-height: 0.2rem;
  }

  .bottons {
    display: flex;
    margin-top: 0.5rem;

  }

  .button {
    width: 50%;
    margin-top: 1.32rem;
    position: fixed;
    left: 0;
    bottom: 38%;
  }

  .buttonss {
    width: 50%;
    margin-top: 1.32rem;
    position: fixed;
    left: 50%;
    bottom: 38%;
  }
</style>
