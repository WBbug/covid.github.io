<template>
  <div>
    <div class="title">全国风险地区</div>
    <div class="content">
      <!-- 高风险地区 -->
      <template v-if="high.length > 0">
        <div class="highTitle">
          <img
          height="20px"
            src="https://img1.dxycdn.com/2021/0805/117/0047909708517346943-22.png"
            alt=""
          />高风险地区{{ high.length }}个
        </div>
        <ul class="highWrap">
          <li v-for="(item, index) in high" :key="index">
            {{ item }}
          </li>
        </ul>
      </template>
      <!-- 中风险地区 -->
      <template v-if="high.length > 0">
        <div class="midTitle" >
          <img  height="20px" src="https://img1.dxycdn.com/2021/0805/706/5908150881190446943-22.png" alt="">中风险地区{{ mid.length }}个</div>
        <ul class="lowWrap">
          <li v-for="(item, index) in mid" :key="index">
            {{ item }}
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
import api from "@/api/index";
export default {
  created() {
    api.getConInfo().then((result) => {
      let riskarea = result.data.newslist[0].riskarea;
      this.high = riskarea.high;
      this.mid = riskarea.mid;
      console.log(riskarea);
    });
  },
  data() {
    return {
      //高风险地区
      high: [],
      //中风险地区
      mid: [],
    };
  },
};
</script>

<style lang="less" scoped>
.content{
    margin: 0.1rem 0.1rem;
    padding: 0.2rem 0.2rem;
  .highTitle{
    font-weight: bold;
  }
}
.title {
  border-left: 0.1rem solid #363fd9;
  padding-left: 0.1rem;
}
  .midTitle{
    font-weight: bold;
  }
</style>