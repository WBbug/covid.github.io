<template>
  <div class="num">
    <div class="content">
      <div class="title">截止至北京时间{{ time }}</div>
      <ul class="wrap">
        <li>
          <div>
            较昨日<em>{{ covNums.currentConfirmedIncr | number }}</em>
          </div>
          <strong>{{ covNums.currentConfirmedCount }}</strong>
          <span>现存确诊</span>
        </li>
        <li>
          <div>
            较昨日<em>{{ covNums.suspectedIncr | number }}</em>
          </div>
          <strong>{{ covNums.suspectedCount }}</strong>
          <span>境外输入</span>
        </li>
        <li>
          <div>
            较昨日<em>{{ covNums.seriousIncr | number }}</em>
          </div>
          <strong>{{ covNums.seriousCount }}</strong>
          <span>现存无症状</span>
        </li>
        <li>
          <div>
            较昨日<em>{{ covNums.confirmedIncr | number }}</em>
          </div>
          <strong>{{ covNums.confirmedCount }}</strong>
          <span>累计确诊</span>
        </li>
        <li>
          <div>
            较昨日<em>{{ covNums.deadIncr | number }}</em>
          </div>
          <strong>{{ covNums.deadCount }}</strong>
          <span>累计死亡</span>
        </li>
        <li>
          <div>
            较昨日<em>{{ covNums.curedIncr | number }}</em>
          </div>
          <strong>{{ covNums.curedCount }}</strong>
          <span>累计治愈</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["covNums"],
  computed: {
    time: function () {
      let data = new Date(this.covNums.modifyTime);
      return ` ${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}`;
    },
  },
  filters: {
    //数字补加号
    number: function (val) {
      return val > 0 ? "+" + val : val;
    },
  },
};
</script>

<style scoped lang='less' >
.num {
  background: #f5f5f5;
  padding-top: 0.2rem;
  .content {
    background: #fff;
    padding: 0.2rem;
    min-height: 2rem;
    border-radius: 0.2rem;
    .title {
      color: #666;
      margin-bottom: 0.2rem;
    }
    .wrap {
      display: flex;
      flex-wrap: wrap;
      border: 0.01rem solid #ebebeb;
      box-shadow: 0 0.04rem 0.12rem 0 rgb(0 0 0 / 5%);
      li {
        width: 33.33333%;
        text-align: center;
        margin-top: 0.2rem;
        span {
          font-size: 0.01rem;
          display: block;
          font-weight: bold;
          color: #333;
        }
        strong {
          font-size: 0.33rem;
        }
        div {
          font-size: 0.008rem;
          em {
            font-weight: 400;
            font-style: normal;
          }
        }
      }
      li:nth-child(1) strong {
        color: rgb(247, 76, 49);
      }
      li:nth-child(2) strong {
        color: rgb(247, 130, 7);
      }
      li:nth-child(3) strong {
        color: rgb(162, 90, 78);
      }
      li:nth-child(4) strong {
        color: rgb(174, 33, 44);
      }
      li:nth-child(5) strong {
        color: rgb(93, 112, 146);
      }
      li:nth-child(6) strong {
        color: rgb(40, 183, 163);
      }
    }
  }
}
</style>