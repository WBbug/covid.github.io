<template>
<div>
<div class="title">{{cityName}}疫情地图</div>

        <!-- 累计确诊 -->
<div id="cityMap" style="width: 7.5rem; height: 9rem"></div>
</div>
</template>

<script>
import api from '@/api/index.js'
export default {
props:['cityName'],
mounted(){
    api.getCityData(this.cityName).then(res=>{
        let list = res.data.retdata.subList
        let arr =[]
        list.forEach(el => {
            let obj = {}        
            if ( el.city.endsWith("区") ||el.city.endsWith("州") ||el.city.endsWith("盟")||el.city.endsWith("旗")) {
          obj.name = el.city;
        } else {
          obj.name = el.city + "市";
        }
            obj.value = el.confirm
            arr.push(obj)
        });
        this.$myChart.cityMap('cityMap',this.cityName,arr)
    })

}
}
</script>

<style>

</style>