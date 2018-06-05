import React, {Component} from 'react'

class EventPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            zan: false,
            isSlider: false
        }
        // this.eventClick = this.eventClick.bind(this)
    }
    // eventClick = (e) => {
    //     console.log(this)
    //     console.log(e)
    // }
    eventClick (aa, e) {
        console.log(this, aa)
        console.log(e)
        this.setState({
            zan: !this.state.zan
        })
    }
    slideDown () {
        this.setState({
            isSlider: !this.state.isSlider
        })
    }
    render () {
        return (
            <div>
                {/* <button onClick={(e) => {
                    this.eventClick(e, 'haha')
                }}>点击事件</button> */}
                {this.state.zan ? '点赞了'  :   '没有点赞'}
                <button onClick={this.eventClick.bind(this,'1123')}>点击事件</button>
                <ul>
                    <li>
                        <h2 onClick={
                            () => {
                                this.slideDown()
                            }
                        }>一级导航</h2>
                        <ul style={
                            {display: (this.state.isSlider?  'block' : 'none')}
                        }>
                            <li>二级-1</li>
                            <li>二级-2</li>
                            <li>二级-3</li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default EventPage

/**
 * react 添加事件类似于DOM0级操作
 * 但是React中 采用驼峰命名的形式 onClick onMouseover  onMouseout
 * 
 * React事件绑定属性的命名采用驼峰式写法，而不是小写。
   如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM元素的写法) 
   dom 写法  <button onclick="alert('aaa')">原生DOM</button>
   react写法 <button onClick={() => {alert('bb')}}>点击事件</button>

 * 在dom事件处理函数中this指的是绑定当前事件的DOM元素
 * 
 * 而在react事件处理函数中this指的是undefined
 * 可以通过如下方法解决
 * 1，将绑定事件处理函数，提前绑定好this，可以使用bind()绑定
 * 2，可以将事件处理函数写成箭头函数，因为箭头函数本身就已经绑定this为当前对象
 * 
 * 
 * 
 * 
 * 在react事件处理函数中，如果值绑定的是一个函数的话，会默认传递一个对象e，在这里e代表合成事件，
 * 不存在兼容问题
 * 
 * 
 * 如果事件处理函数使用bind绑定那么e将会被指定为最后一个参数接收
 * 
 * 
 * 在react中把这种事件处理的形式称为合成事件
 * 兼容性好
 * 和元素Api一样
 * 支持冒泡，可以使用stopPropagation()和preventDefault()来中断它
 * 
 * 
 * 不能使用react false； 来组织默认行为，
 * 只能使用 e.preventDefault() 来阻止默认行为
 * 
 * 梳理
 * 
 * 
 * 
 * 
 * 1，react合成事件的绑定类似于dom0级事件绑定
 *    但是react合成事件的事件名必须是驼峰命名，绑定的值必须是事件处理函数
 *    在dom0级处理事件中，名字是小写的，值是字符串
 * 2，react合成事件中绑定的事件处理函数中没有this
 *      可以是bind提前绑定
 *      可以使用箭头函数
 * 3，react合成事件中会自动给事件处理函数传递e，如果是使用bind绑定，那么e回是最后一个参数
 * 
 * 4，在react合成事件中只能使用 e.preventDefault() 来阻止默认行为
 * 
 * 5, 兼容性好
 * 6， 用法基本和原生一样
 * 
 * 
 */