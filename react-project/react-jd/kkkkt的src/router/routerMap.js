import Home from '../components/Home'
import ClassIfy from '../components/ClassIfy'
import Year from '../components/Year'
import ShopCart from '../components/ShopCart'
import Mine from '../components/Mine'
import Detail from '../components/Detail'

export const ROUTER_MAP = {
    NAV: [
        {
            title: '首页',
            to: '/',
            active: 'active',
            icon: 'home'
        },
        {
            title: '分类',
            to: '/classify',
            active: 'active',
            icon: 'searchlist'
        },
        {
            title: '年货节',
            to: '/year',
            active: 'active',
            icon: 'like'
        },
        {
            title: '购物车',
            to: '/shopcart',
            active: 'active',
            icon: 'cart'
        },
        {
            title: '我的',
            to: '/mine',
            active: 'active',
            icon: 'user'
        }
    ],
    ROUTER_VIEW: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/classify',
            component: ClassIfy
        },
        {
            path: '/year',
            component: Year
        },
        {
            path: '/shopcart',
            component: ShopCart
        },
        {
            path: '/mine',
            component: Mine
        },
        {
            path: '/detail',
            component: Detail
        }
    ]
}