import Vue from "vue"
import VueRouter from "vue-router"
import home from '../views/Home/Home.vue'


const CovArea =()=>import('../views/covArea')

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
            component:CovArea
        }
    
    ]
})
export default router


