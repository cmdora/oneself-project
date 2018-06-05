import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
/**
 * reducer
**/
import home from './reducers/home'  //对应容器组件的reducer
import user from './reducers/user'  //对应容器组件的reducer

//合并所有reducer
const reducers = combineReducers({
    user
})

//添加中间件  添加redux-thunk做异步action处理
const middleware = applyMiddleware(thunkMiddleware)

//创建store
const store = createStore(reducers, middleware)

//抛出store
export default store