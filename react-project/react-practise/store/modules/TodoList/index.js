import {combineReducers} from 'redux'
import filterTodo from './filter.js'
import todo from './todo.js'
// 做reducer的合并
/**
 * filterTodo: state
 * tod: state
 * 
 * {
 *      filterTodo: 'SHOW_ALL',
 *      todo: [
 *         {text: '写代码', status: 0}
 *      ]
 * }
 */
export default combineReducers({
    filterTodo,
    todo
})