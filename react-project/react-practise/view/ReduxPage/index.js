
import React, {Component} from 'react'
import {createStore, combineReducers} from 'redux'

const ADD_TODO = 'ADD_TODO'
const todoList = (state = [
    {text: '列表文字1'},
    {text: '列表文字2'},
    {text: '列表文字3'}
], actions) => {
    switch (actions.type) {
        case ADD_TODO :
            return state.concat({
                text: actions.text
            })
        break;
        case 'REMOVE_TODO' :
            return state
        break;
        default :
            return state    
    }
}



const visibilityFilter = (state = 'SHOW_ALL', actions) => {
    switch (actions.type) {
        case 'SET_FILTER' :
            return actions.filter
        // case ADD_TODO: 
        //     return '添加数据'
        // break;
        default :
            return state    
    }
}

// const todoApp = (state= {}, actions) => {
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, actions),
//         todoList: todoList(state.todoList, actions)
//     }
// }
// ===
// const todoApp = combineReducers({
//     visibilityFilter,
//     todoList
// })

const todoApp = combineReducers({
    visibilityFilter,
    todoList
})

const store = createStore(todoApp)
//store提供的监听方法，监听state的改变
store.subscribe(() => {
    console.log('state改变执行监听',store.getState()) //store提供的获取方法，获取最新的state
})
//store提供的执行方法，传递action，执行reducer
store.dispatch({
    type: ADD_TODO,
    text: '新加的数据'
})
store.dispatch({
    type: 'SET_FILTER',
    filter: 'SHOW_NUM'
})
store.dispatch({
    type: ADD_TODO,
    text: '新加的数据'
})
setTimeout(() => {
    store.dispatch({
        type: ADD_TODO,
        text: '新加的数据'
    })
}, 5000)

class ReduxPage extends Component {
    
    render () {
        return (
            <div></div>
        )
    }
}

export default ReduxPage


/**
 * 合并reducer，可以使用，combineReducers,  
 * 合并后生成的state会以reducer的函数名称，作为字段名称,值都是他们对应的自己的state
 * 
 * redux的原则
 * 单一数据流
 * state是只读的
 * (使用纯函数修改)改变state的方法是dispatch一个action，执行reducer，在reducer内根据action.type生成
 * 新的state并且返回
 * 
 * 
 * 数据流：
 * 调用 store.dispatch(action)。
 * Redux store 调用传入的 reducer 函数。
 * 根 reducer 应该把多个子 reducer 输出合并成一个单一的 state 树。
 * Redux store 保存了根 reducer 返回的完整 state 树。
 * 
 * 
 * 跟reducer其实就是createStore(reducer)传递的这个
 * 
 * 
 * 为什么action.type推荐使用常量来定义
 * 因为store是根据actions.type，执行对应的reducer，如果多个reducer中拥有相同的action.type判断
 * 那么dispatch的时候就会执行多个，为了避免这种情况的发生，所以应该定义常量，避免冲突
 * 
 * 
 */