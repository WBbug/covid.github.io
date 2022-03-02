import axios from 'axios'
import base from './base.js'
// 请求方法
const api = {
    getConInfo(){
       return axios.get(base.host+base.covInfo,)
    }
}
export default api