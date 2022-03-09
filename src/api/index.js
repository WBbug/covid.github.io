import axios from 'axios'
import base from './base.js'
import md5 from 'md5-js'
// 请求方法
const api = {
    getConInfo(){
       return axios.get(base.host+base.covInfo,)
    },
    getChinaData(){
        return axios.get(base.baseUrl+base.chinaData)
    },
    getWorldData(){
        return axios.get(base.baseUrl+base.worldData)
    },
    getCityData(city_name){
        //md5加密获得参数
        let sign  = md5('appid14558city_name'+city_name+'formatjson96efdcd019ecda94dfd13561baf95e0f')
        return axios.get(base.baseUrl+base.cityData+'format=json&appid=14558&city_name='+city_name+'&sign='+sign)//base.baseUrl+
    },
    getSwiperWrap(){
       return axios.get(base.getSwiper)
    },
    getPolicy(){
     return axios.get(base.policy)
    }
}
export default api