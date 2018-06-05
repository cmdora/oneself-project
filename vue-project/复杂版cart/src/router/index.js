import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

import '../assets/css/reset.css'
import '../assets/css/common.css'
import '../assets/css/style.css'

Vue.prototype.axios = axios
Vue.prototype.bus = new Vue()

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: "/",
    	name: "home",
    	component: () => import("../components/router/home/home.vue")
    },
    {
    	path: "/home",
    	name: "home",
    	component: () => import("../components/router/home/home.vue")
    },
    {
    	path: "/class",
    	name: "class",
    	component: () => import("../components/router/class/class.vue")
    },
    {
    	path: "/discover",
    	name: "discover",
    	component: () => import("../components/router/discover/discover.vue")
    },
    {
    	path: "/cart",
    	name: "cart",
    	component: () => import("../components/router/cart/cart.vue")
    },
    {
    	path: "/mine",
    	name: "mine",
    	component: () => import("../components/router/mine/mine.vue")
    }
  ]
})
