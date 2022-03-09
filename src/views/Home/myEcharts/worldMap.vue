<template>
  <div>
<div class="title">国外疫情地图</div>
        <!-- 累计确诊 -->
        <div id="worldMap" style="width: 7.5rem; height: 7rem"></div>

  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  mounted() {
        this.$nextTick(() => {
          this.$myChart.worldMap("worldMap",[]);
        });
    api.getWorldData().then((res) => {
      //获取接口的数据
      let country = res.data.retdata;
      console.log('world----');
      //
      let allData =[]
      for (let i in country) {
        let obj = {};
        obj.name = country[i].xArea;
        obj.value = country[i].confirm; //累计确诊人数
        allData.push(obj);
      }
       this.$nextTick(()=>{
         console.log(document.querySelector('#map'));
        this.$myChart.worldMap("worldMap", allData);
       }) 

    });
    
  },
}
</script>

<style>

</style>