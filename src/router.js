import Vue from "vue";
import VueRouter from "vue-router";

// 在Vue中使用vue-router
Vue.use(VueRouter);

import Elem from '@/components/Elem.vue';
import Find from '@/views/Find.vue';
import Order from '@/views/Order.vue';
import Personal from '@/views/Personal.vue';


// 二级组件
import RestaurantList from '@/components/RestaurantList.vue';
import Distance from '@/views/Distance.vue';
import Union from '@/views/Union.vue';
import Sorting from '@/views/Sorting.vue';
// import Screening from '@/views/Screening.vue';

const router = new VueRouter({
    // 配置相应路径 
    routes: [
        {
            path: "/index",
            component: Elem,
            children:[
                {
                    path:"screening",
                    component:RestaurantList
                },
                {
                    path:"distance",
                    component:Distance
                },
                {
                    path:"union",
                    component:Union
                },
                {
                    path:"sorting",
                    component:Sorting
                },
                {
                    path:"",
                    redirect: 'screening'
                }
            ]
        },
        {
            path: "/find",
            component: Find
        },
        {
            path: "/order",
            component: Order
        },
        {
            path: "/personal",
            component: Personal
            
        },
        {
            path:'/',
            redirect:'/index/screening'
        }

    ]
})

export default router;