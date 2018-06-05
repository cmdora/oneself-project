import React, {Component} from 'react'
import {createStore} from 'redux'

//定义reducer  初始化state为一个对象{count:0}, 接受action
//内部通过对action.type的判断对state的进行加减操作
const counter1 = (state = {
    count: 0
}, action) => {
    switch (action.type) {
        case 'ADD' :
            return state = {
                count: state.count+1
            };
        case 'REMOVE':
            return state = {
                count: state.count-1
            };
        default:
            return state
    }
}

const counter2 = (state = {
    count: 0
}, action) => {
    switch (action.type) {
        case 'ADD' :
            return state = {
                count: state.count+1
            };
        case 'REMOVE':
            return state = {
                count: state.count-1
            };
        default:
            return state
    }
}

const counter = combineReducers({
    counter1,
    counter2
})

//创建store  使用store作为变量，值是使用creacteStore接受reducer生成的
const store = createStore(counter)
//store提供了getState方法用来获取state，提供了dispatch方法执行reducer


//action  指的是一个描述对象，通过type字段描述事实
store.dispatch({
    type: 'ADD'
})
//执行reducer的时候必须传递action

store.dispatch({
    type: 'ADD'
})

console.log(store.getState())

class ReduxPage extends Component {
    
    render () {
        return (
            <div></div>
        )
    }
}

export default ReduxPage

/**
 * redux状态管理器
 * 
 * 为什么要用?
 * redux是为了解决项目中数据共享的问题， 
 * 
 * 如果开发react项目的话，就会用到redux
 * 
 * 而redux并不是只能用在react中，
 * 而像vue里面的vuex他是只能用在vue中，而redux可以用在任何框架中
 * 
 * 可以吧这种全局状态管理器，理解为一个全局变量
 * 什么样的全局变量那？
 * 一个有规则，并且可以响应视图的全局变量
 * 
 * 
 * 
 * Store   reducer    action
 * 
 * 
 * 
 * reducer:
 * 其实可以理解为一个管理规则，那么管理规则是如何和store，action关联起来的那
 * reducer就是一个方法，这个方法接受两个参数，state，action
 * reducer必须有返回值，返回值就是新的state
 * 
 * 所以在reducer中可以根据action.type（指令），生成新的state，并且返回新的state
 * 
 * 
 * store
 * 用来管理数据，但是创建store是通过createStore方法创建的
 * 而createStore方法需要接受一个reducer作为参数
 * 
 * 最后创建出来的store提供了一些方法
 * getState()  获取到state
 * state其实就是reducer的第一个参数
 * dispatch方法执行reducer，执行的时候需要传递action
 * 传递的action必须有type字段，因为reducer中是根据action.type去执行操作的
 * 
 * 
 * 
 */