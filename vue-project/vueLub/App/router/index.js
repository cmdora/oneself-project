import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

Vue.prototype.axios = axios
Vue.prototype.bus = new Vue()

Vue.use(Router)

export default new Router({
	routes: []
})
