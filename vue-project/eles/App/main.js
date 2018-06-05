import Vue from "vue"
import './Static/css/common.css'
import './Static/css/reset.css'
import './Static/css/style.css'
import "../index.html"
import Router from "vue-router"
import axios from "axios"
import routes from "./Router/routes.js"
import footers from "./Component/template/footer/footer.vue"
import headers from "./Component/template/header/header.vue"

Vue.prototype.$http = axios
Vue.prototype.bus = new Vue()

Vue.use(Router)

const router = new Router({
    routes
})

new Vue({
    el: "#app",
    data () {
        return {
            msg: "heelo",
            list: [
                {text: "外卖", path: "/takeout"},
                {text: "分类", path: "/classify"},
                {text: "订单", path: "/order"},
                {text: "我的", path: "/mine"}
            ]
        }
    },
    router,
    components: {
        footers,
        headers
    }
})