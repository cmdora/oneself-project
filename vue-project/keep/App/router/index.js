import Vue from 'vue'
import '../assets/css/common.css'
import '../assets/css/reset.css'
import '../assets/css/style.css'
import Router from 'vue-router'
import axios from 'axios'

import train from '../components/router/train/train.vue'
import discover from '../components/router/discover/discover.vue'
import information from '../components/router/information/information.vue'
import my from '../components/router/my/my.vue'

import choild from '../components/router/discover/router/choild.vue'
import distrain from '../components/router/discover/router/train.vue'
import strategy from '../components/router/discover/router/strategy.vue'
import food from '../components/router/discover/router/food.vue'
import shop from '../components/router/discover/router/shop.vue'
import city from '../components/router/discover/router/city.vue'

import MintUI from 'mint-ui';
import {Loadmore} from 'mint-ui';
Vue.use(MintUI);

Vue.prototype.axios = axios
Vue.prototype.bus = new Vue()
Vue.component(Loadmore.name, Loadmore)

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "*",
            redirect: '/train/train',
            name: "Train",
            component: train
        },
        {
            path: "/train/:type",
            name: "Train",
            component: train
        },
        {
            path: "/discover/:type",
            name: "Discover",
            component: discover,
            children: [
                {
                    path: "/discover/:type/choild/:id",
                    component: choild
                },
                {
                    path: "/discover/:type/train/:id",
                    component: distrain
                },
                {
                    path: "/discover/:type/strategy/:id",
                    component: strategy
                },
                {
                    path: "/discover/:type/food/:id",
                    component: food
                },
                {
                    path: "/discover/:type/shop/:id",
                    component: shop
                },
                {
                    path: "/discover/:type/city/:id",
                    component: city
                }                
            ]
        },
        {
            path: "/information/:type",
            name: "Information",
            component: information
        },
        {
            path: "/my/:type",
            name: "My",
            component: my
        }
    ]
})