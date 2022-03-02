<template>
  <div>
    <div class="title">奉贤地区</div>
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