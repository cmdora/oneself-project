import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './assets/fonts/iconfont.css'
import mock from './mock'
import {Provider} from 'react-redux'
import store from './store'
mock()
ReactDOM.render(
        <Provider store={store}>    
            <App />
        </Provider>
            ,
            document.getElementById('root')
        );
registerServiceWorker();
