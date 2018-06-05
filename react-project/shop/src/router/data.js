import Home from '../components/Home'
import Car from '../components/Car'
import Mine from '../components/Mine'
import Fenlei from '../components/Fenlei'
import Login from '../components/Login'
export const data={
    nav:[
        {
            text:'首页',
            to:'/',
            icon:'icon iconfont icon-user'
        },{
            text:'分类',
            to:'/fenlei',
            icon:'icon iconfont icon-29'
        },{
            text:'购物车',
            to:'/car',
            icon:'icon iconfont icon-pingguo'
        },{
            text:'我的',
            to:'/mine',
            icon:'icon iconfont icon-wode'
        },{
            text:'',
            to:'/login',
            icon:''
        }
    ],
    nav_link:[
        {
            path:'/',
            component:Home
        },{
            path:'/fenlei',
            component:Fenlei
        },{
            path:'/car',
            component:Car
        },{
            path:'/mine',
            component:Mine
        },{
            path:'/login',
            component:Login
        }
    ]
}