import Home from '../components/Home'
import ClassIfy from '../components/ClassIfy'
import Year from '../components/Year'
import ShopCart from '../components/ShopCart'
import Mine from '../components/Mine'
import Detail from '../components/Detail'
import Login from '../components/Login'
import Register from '../components/Register'
import NotFound from '../components/NotFound'
import Content from '../components/Content'

// import Loading from '../components/Common/Loading'
// // 路由的懒加载
// import Loadable from 'react-loadable'

// const Home = Loadable({
//     loader: () => import('../components/Home'),
//     loading: Loading
// })

// const ClassIfy = Loadable({
//     loader: () => import('../components/ClassIfy'),
//     loading: Loading
// })

// const Year = Loadable({
//     loader: () => import('../components/Year'),
//     loading: Loading
// })

// const ShopCart = Loadable({
//     loader: () => import('../components/ShopCart'),
//     loading: Loading
// })

// const Mine = Loadable({
//     loader: () => import('../components/Mine'),
//     loading: Loading
// })

// const Detail = Loadable({
//     loader: () => import('../components/Detail'),
//     loading: Loading
// })

// const Login = Loadable({
//     loader: () => import('../components/Login'),
//     loading: Loading
// })

export const routerMap = {
    ENV: [
        {
            active: 'active',
            to: '/',
            text: '首页',
            iconfont: 'home'
        },
        {
            active: 'active',
            to: '/classify',
            text: '分类',
            iconfont: 'searchlist'
        },
        {
            active: 'active',
            to: '/year',
            text: '年货节',
            iconfont: 'girl'
        },
        {
            active: 'active',
            to: '/shopcart',
            text: '购物车',
            iconfont: 'cart'
        },
        {
            active: 'active',
            to: '/mine',
            text: '我的',
            iconfont: 'user'
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
        },
        {
            path: '/login',
            component: Login        
        },
        {
            path: '/register',
            component: Register        
        },
        {
            path: '/content',
            component: Content        
        },
        {
            path: '/*',
            component: NotFound        
        }
    ] 
}