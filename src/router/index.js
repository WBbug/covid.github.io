import Vue from "vue"
import VueRouter from "vue-router"
import home from '../views/Home/Home.vue'


const CovArea =()=>import('../views/covArea')
const covItems =()=>import('../views/covItems')
const citys =()=>import('../views/citys')
const outPolicy =()=>import('../views/outPolicy')
Vue.use(VueRouter)

let  router =new VueRouter({
 routes:[
        {
            path:'/',
            name:'Home',
            component:home
        },
        {
            path:'/CovArea',
            name:'CovArea',
            component:CovArea
        },
        {
            path:'/covItems',
            name:'covItems',
            component:covItems
        },
        {
            path:'/citys/:cityName',
            name:'citys',
            component:citys,
            props:true
        },
        {
            path:'/outPolicy',
            name:'outPolicy',
            component:outPolicy,
            props:true
        }
    
    ]
})
export default router


