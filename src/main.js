import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/vant'

import echarts from './plugins/echarts'

//导入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)
//使用自制插件
Vue.use(echarts)

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
