import takeOut from "../Component/router/takeOut.vue"
import classify from "../Component/router/classify.vue"
import order from "../Component/router/order.vue"
import mine from "../Component/router/mine.vue"

export const routes = [
    {
        path: "*",
        redirct: "/takeOut",
        component: takeOut
    },
    {
        path: "/takeout",
        component: takeOut
    },
    {
        path: "/classify",
        component: classify
    },
    {
        path: "/order",
        component: order
    },
    {
        path: "/mine",
        component: mine
    }
]

export default routes