import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import './assets/iconfont/iconfont.css'
import './index.css'
import mock from './mock'
import { getUserInfo } from './api/service'


// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import createStoreConfig from './store'
import { getUserInfoAction} from './store/action/login'

// 判断如果是开发环境 执行 这个 mock 方法
// development 开发环境
// production 生产环境 ， 线上环境 
if (process.env.NODE_ENV === 'development') mock()

const store = createStoreConfig()

// 存在就代表已经登录
if (window.localStorage.userOpenId) {
  getUserInfo({
    userOpenId: window.localStorage.userOpenId
  }) 
  .then(res => {
    store.dispatch(getUserInfoAction(res.data.data))
    // console.log(res, '首次')
  })
}



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


// reducers => (state, action) => { return newState }
// const store = createStore( (state = {name: 'ljh',age: 20, jdList: null}, action)  => {
//   switch(action.type){
//     case 'CHANGE_NAME':
//       return {...state}
//     case 'CHANGE_AGE':
//       return {...state, age: action.age}
//     case 'GET_JDLIST':
//       return {...state, jdList: action.jdList}
//     default:
//     return state
//   }
// })