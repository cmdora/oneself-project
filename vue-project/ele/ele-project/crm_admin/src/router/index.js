import Vue from 'vue'
import Router from 'vue-router'
import ElementUi from 'element-ui'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'element-ui/lib/theme-chalk/index.css'
// 引入封装好的fetch包
import fetchApi from '../../../commen/plugins/fetch.js'
import menuRouter from './index.config.js'


// 挂在fetch
Vue.use(fetchApi, {
  afterEach() {
    console.log('请求后')
  },
  beforEach() {
    console.log('请求前')

  },
  catchEach () {
    console.log('错误')
  }
})

Vue.use(Router)
Vue.use(ElementUi)
Vue.use(iView)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'Home',
      component: resolve => require(["@/views/home"], resolve),
      redirect: 'shop/chart',
      children: [
        ...menuRouter
      ]
    },
    {
    	path: '/login',
    	name: 'Login',
    	component: resolve => require(["@/views/login"], resolve)
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (['Login'].indexOf(to.name) != -1) {
    next()
  } else {
    if (document.cookie != '') {
      next()
    }else {
      next('/login')
    }
  }
})

export default router