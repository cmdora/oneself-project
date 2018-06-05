import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import Home from './components/Home'
import Search from './components/Search'
import VueResource from 'vue-resource'
import store from './store'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/home',
  component: Home
}, {
  path: '/search',
  component: Search
}]

const router = new VueRouter({
  routes
})

// new Vue({
//   router,
//   template: '<App />',
//   components: {
//     App
//   }
// }).$mount('#app')

new Vue({
  router,
  store,
  ...App
}).$mount('#app')
