import React, {Component} from 'react'

import HeaderBar from './Components/HeaderBar'
import Nummber from './Components/Nummber'
import Content from './Components/Content'

import List from './Components/Filter/List'
import ButtonGroup from './Components/Filter/ButtonGroup'

const LeftIcon = () => {
    function user() {
        alert('点击了user按钮')
    }
    return (
        <a href="javascript:;" onClick={() => {
            user()
        }}>
            <i>图标</i>
        </a>
    )
}
const RightIcon = () => {
    function user() {
        alert('点击了youbb按钮')
    }
    return (
        <a href="javascript:;" onClick={() => {
            user()
        }}>
            <i>图标</i>
        </a>
    )
}

class TongXinPage extends Component {
    constructor (props) {
        super(props)
       
    }
    getNum (num) {
        console.log(num) //得到了子组件内部的状态num
    }

    getNum2 () {
        console.log( this.refs.numComponent.state.num )
        //使用refs读取子组件实例，并且读取到它的state状态
    }

    render () {
        return (
            <div>
                <h3>父子组件通信</h3>
                <HeaderBar 
                    title="北京市" 
                    leftIcon={<LeftIcon/>} 
                    rightIcon = {<RightIcon />}
                /> {/**父子通信手段，传递title供子组件使用**/}

                {/**子父通信手段，使用props传递回调函数，子组件调用并且传递数据**/}
                {/**子父通信手段，refs获取子组件实例，直接读取子组件内部状态**/}
                <h3>子父组件通信</h3>
                <Nummber numchange={this.getNum}  ref="numComponent" />{/**子组件**/}
                <button onClick={() => {
                    this.getNum2()
                }}>点击获取数字</button>

                <h3>跨级组件通信</h3>
                {/**跨级通讯**/}
                <Content />

                <h3>同级组件通信</h3>
                <ButtonGroup />  {/**同级关系  执行并且传递参数**/}
                <List />  {/**同级关系   定义**/}
            </div>
        )
    }
}

export default TongXinPage

/**
 * 常见的通信场景
 * 
 * 父子通信  ->    子组件使用父组件的数据 props
 * 子父通信  ->    父组件使用子组件的数据 props传递回调函数
 * 跨级组件通信  ->    子孙组件使用祖先组件的数据
 * 同级组件通信  ->    两个同级组件的数据共享
 * 
 *  通信场景的由来？
 * 就是谁要使用谁的数据，
 * 
 * 
 * 
 * 父子组件通信  
 *    父组件吧数据当成属性，使用props传递的形式传递到子组件 
 * 
 * 跨级组件通信
 * 可以使用层级传递 一层一层的传递(但是这样会出现一个问题，可能会造数据混乱，不好维护)
 * 父组件A  ->{props}  子组件B  ->{props}  子组件C  ->{props} 子组件D(使用A组件的数据)
 * 
 * context虫洞  解决跨级组件逐层传递的问题
 * 
 * 首页需要定义context
 *   祖先组件
 *   static childContextTypes = {
 *       name: PropTypes.string
 *   }
 * 
 *   getChildContext () {return {name: 'xxxx'}}
 * 
 *   子孙组件
 *   static childContextTypes = {
 *       name: PropTypes.string
 *   }
 * 
 *   可以通过this.context['xxxx属性名'] 访问
 * 
 * 同级组件如何通信？
 *   使用自定义事件
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 组件的通信
 * 通信场景：父子，子父，同级，跨级
 * 
 * 父子使用props
 * 子父使用props传递回调函数，或者使用ref获取子组件实例
 * 同级
 * 使用自定义事件，也可以将属性代理到父组件上，通过父组件做代理实现
 * 跨级
 * 使用context，也可逐层传递（太麻烦）
 * 
 * 
 * 跨级使用context
 * 首页需要在祖先组件定义context
 *   祖先组件
 *   static childContextTypes = {
 *       name: PropTypes.string
 *   }  context类型
 * 
 *   getChildContext () {return {name: 'xxxx'}}  返回contenxt属性
 * 
 *   子孙组件
 *   static childContextTypes = {
 *       name: PropTypes.string
 *   }
 * 
 *   可以通过this.context['xxxx属性名'] 访问
 * 
 * 
 * 同级使用自定义事件
 * events模块，  创建全局的EventEmitter()实例
 * 使用 addListener 创建自定义事件
 * 使用 emit触发自定义事件
 * 
 */
