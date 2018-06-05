import Vue from 'vue'
import '../assets/css/common.css'
import '../assets/css/reset.css'
import '../assets/css/style.css'
import Router from 'vue-router'
import axios from 'axios'

import home from '../components/router/home/home.vue'
import project from '../components/router/project/project.vue'
import welfare from '../components/router/welfare/welfare.vue'
import account from '../components/router/account/account.vue'

import uplane from '../components/router/project/router/uplane.vue'
import nplane from '../components/router/project/router/nplane.vue'
import mark from '../components/router/project/router/mark.vue'
import personam from '../components/router/project/router/personam.vue'


Vue.prototype.axios = axios
Vue.prototype.bus = new Vue()

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "*",
            redirect: '/home/home',
            name: "Home",
            component: home
        },
        {
            path: "/home/:type",
            name: "Home",
            component: home
        },
        {
            path: "/project/:type",
            name: "Project",
            component: project,
            children: [
                {
                    path: "/project/:type/uplane/:id",
                    component: uplane
                },
                {
                    path: "/project/:type/nplane/:id",
                    component: nplane
                },
                {
                    path: "/project/:type/mark/:id",
                    component: mark
                },
                {
                    path: "/project/:type/personam/:id",
                    component: personam
                }               
            ]
        },
        {
            path: "/welfare/:type",
            name: "Welfare",
            component: welfare
        },
        {
            path: "/account/:type",
            name: "Account",
            component: account
        }
    ]
})