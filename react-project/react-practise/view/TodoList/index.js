
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import FooterTodo from './components/FooterTodo'


class TodoPage extends Component {
    
    render () {
        const {
            todo,
            add_todo,
            action_todo,
            set_filter,
            filterTodo
        } = this.props
        return (
            <div>
                <AddTodo
                    onAddTodo={add_todo}
                    
                />
                <TodoList todo={todo} filterTodo={filterTodo} onActionTodo={action_todo} />
                <FooterTodo 
                    onSetFilter={set_filter}
                />
            </div>
        )
    }
}


export default connect((state) => {
    console.log(state)
    //在这个函数内容部可以获取到state数据，这个函数返回一个对象，对象的内容会被添加到对应组件的props上
    return {
        todo: state.TodoList.todo,
        filterTodo: state.TodoList.filterTodo
    }
}, (dispatch) => {
    return {
        add_todo (text) {
            dispatch({
                type: 'ADD_TODO',
                text: text
            }) //触发对应的添加数据
        },
        action_todo (index) {
            dispatch({
                type: 'ACTION_TODO',
                action: index
            })   //触发对应的修改状态
        },
        set_filter (filter) {
            dispatch({
                type: 'SET_FILTER',
                filter: filter
            })  //修改过滤条件
        }
    }
})(TodoPage)

/**
 * react 和 redux关联
 * 需要使用react-redux包提供的
 * Provider组件 需要传递store作为属性   provider组件使用在根节点上, 这样就会把store传递到组件中
 * connect方法接收（回调1读取state，回调2读取dispatch）（组件）
 * 
 * 
 * 
 * redux
 * 状态管理器，可以应用到任何框架中，包括原生js，如果使用react，最好搭配redux
 * 
 * redux的概念（reducer， store， action）
 * action：可以当成一个指令，也就是命令（比如: npm -v ）命令都是固定的命令执行对应固定的任务
 * store：通过store执行任务
 * reducer：任务（利用指令通过store执行任务）
 * 
 * 容器组件   和    展示组件
 * 
 * 容器组件，操作数据，（增删改查），关联redux
 * 展示组件接受props进行展示，不需要关联redux
 * 
 * 只有使用了provider组件并且传递了store，在组件中才可以使用connect高阶组件，读取state，dispatch
 * 
 * provider组件作用在根元素，并且需要传递创建的store，这样才能把react和stroe关联在一起
 * 使用connect可以将state，dispatch扩展到组件上
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */