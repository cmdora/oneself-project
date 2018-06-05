import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './assets/fontSize/iconfont.css'
import './assets/style/base.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import mock from './mock'
import { Provider } from 'react-redux'
import store from './store'

if (process.env.NODE_ENV === "development") mock()

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();



    // import { createStore } from 'redux'

    // const store = createStore((state={name: '000', age: 98, jdList: null}, action) => {
    //     // {type: 'CHAGNE_AGE', age: 99}
    //     console.log(action, '===')
    //     switch (action.type) {
    //         case 'CHANGE_NAME':
    //             return {...state, name: '赵阔田'}
    //         case 'CHANGE_AGE':
    //             return {...state, age: action.age}
    //         case 'GET_JDLIST':
    //             return {...state, jdList: action.jdList}
    //         default:
    //             return state
    //     }
        
    // }) //reducer 【fn】 {name: '000', age: 9}