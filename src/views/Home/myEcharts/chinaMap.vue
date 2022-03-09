<template>
  <div>
    <div class="title">国内疫情地图</div>
    <van-tabs v-model="active" animated @change="change">
      <van-tab title="累计确诊 ">
        <!-- 累计确诊 -->
        <div id="map" style="width: 7.5rem; height: 7rem"></div>
      </van-tab>
      <van-tab title="现存确诊 ">
        <!-- 现存确诊 -->
        <div id="nowData" style="width: 7.5rem; height: 7rem"></div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      active: 0,
      nowData: [], //现存
    };
  },
  mounted() {
        this.$nextTick(() => {
          this.$myChart.chinaMap("map",[]);
        });
    api.getChinaData().then((res) => {
      //获取接口的数据
      let citys = res.data.retdata;
      //
      let nowData =[],allData = []
      for (let i in citys) {
        let obj = {};
        obj.name = citys[i].xArea;
        obj.value = citys[i].confirm; //累计确诊人数
        allData.push(obj);
        let now = {};
        now.name = citys[i].xArea;
        now.value = citys[i].curConfirm; //累计确诊人数
        nowData.push(now);
      }
      //nowData在外面需要赋值
      this.nowData = nowData;
       this.$nextTick(()=>{
         console.log(document.querySelector('#map'));
        this.$myChart.chinaMap("map", allData);
       }) 

    });
    
  },
  methods: {
    change(title) {
      if (title === 1) {
        this.$nextTick(() => {
          this.$myChart.chinaMap("nowData", this.nowData);
        });
      }
    },
  },
};
</script>

<style lang='less' scoped>
.title{
  margin: 0.2rem;
  border-top: 1px solid #eee;
}


</style>