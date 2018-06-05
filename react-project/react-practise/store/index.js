import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import TodoList from './modules/TodoList/index'
import AsynAction from './modules/AsynAction/'

let reducer = combineReducers({
    TodoList,
    AsynAction
})

export default createStore(reducer,applyMiddleware(
    thunkMiddleware
))