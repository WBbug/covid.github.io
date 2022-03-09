<template>
  <div>
    <div class="title">风险地区</div>
    <div class="content">
      <!-- 高风险地区 -->
      <template v-if="high.length>0">
        <div class="title"> 高风险地区{{high.length}}个</div>
      <ul>
        <li v-for="(item,index) in high" :key="index">
          {{item}}
        </li>
      </ul>
      </template>
      <!-- 中风险地区 -->
      <template v-if="high.length>0">
              <div class="title">中风险地区{{mid.length}}个</div>
          <ul>
        <li v-for="(item,index) in mid" :key="index">
          {{item}}
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

<style>
</style>