import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Router from './router'


class App extends Component {
    render() {
        return (
            <Router/>
        );
    }
}

export default App;
/**
 * 目录规范
 * components  公共的（展示组件）（表单元素，弹框，按钮，...）
 * layout      布局模板(模板组件)
 * views       (路由对应组件)
 * store       就是stroe[ actions, reducers ]
 *  --xxxx     容器组件 (包含业务组件)
 *  --xxxx     容器组件 (包含业务组件)
 */