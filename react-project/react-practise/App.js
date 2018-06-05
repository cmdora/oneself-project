import React, { Component } from 'react';
import {
    BrowserRouter as Router,  //history路由配置，hash路由配置HashRouter
    Route,  //配置路由，path对应路由地址， component对应路由渲染的组件
    Link,   //做跳转用的组件   和 vue中router-link
    Switch
} from 'react-router-dom'   //react路由配置需要引入的包
import {Provider} from 'react-redux'
import store from './store'

import logo from './logo.svg';
import './App.css';

import TabPage from './day_api/Tab'
import Dialog from './day_api/Dialog'
import Collapse from './day_api/Collapse'
import CirclePage from './day_api/CircleChart'
import FormPage from './view/Form'
import ReduxPage from './view/ReduxPage'
import TodoPage from './view/TodoList'
import AsynAction from './view/AsynAction'

const navStyle = {
    margin: '20px'
}
console.log(store.getState())

class App extends Component {
  render() {
    return (
    <Provider store={store}> 
      <div className="App">
        
        <Router> 
            <div>
                <nav>
                    <Link to="/tab_page" style={navStyle} replace >tab切换页面</Link>
                    <Link to="/dialog_page" style={navStyle} replace >弹出框页面</Link>
                    <Link to="/collapse_page" style={navStyle} replace >折叠面板页面</Link>
                    <Link to="/circle_page" style={navStyle} replace >圆环效果</Link>
                    <Link to="/form/liuyu" style={navStyle} replace >受控组件</Link>
                    <Link to="/redux/demo" style={navStyle} replace >redux基础</Link>
                    <Link to="/redux/todo" style={navStyle} replace >todoList案例</Link>
                    <Link to="/redux/asyn_action" style={navStyle} replace >异步action</Link>
                </nav>
                <div>
                    <Switch>
                    <Route exact={true} path='/' render={() => {
                        return <div>内容</div>
                    }} />
                    <Route exact={true} path="/tab_page" component={TabPage} />
                    <Route exact={true} path="/dialog_page" render={({match, location, history}) => {
                        console.log(location)
                        return <Dialog />
                    }} />
                    <Route exact={true} path="/collapse_page" component={Collapse}/>
                    <Route exact={true} path="/circle_page" component={CirclePage} />
                    <Route exact={true} path="/form/liuyu" component={FormPage} />
                    
                    <Route exact={true} path="/redux/demo" component={ReduxPage} />
                    <Route exact={true} path="/redux/todo" component={TodoPage} />
                    <Route exact={true} path="/redux/asyn_action" component={AsynAction} />
                    </Switch>
                </div>
            </div>
        </Router>
      </div>
      </Provider>
    )
  }
}

export default App;
/***
 * react中路由的配置是通过组件完成的
 * 使用react-router-dom
 * 
 * Route
 * 在route组件上对应3种不同的render method（渲染） 方法
 * component   对应一个已有组件
 * render   渲染一个组件
 * children  可以返回一组组件
 * 
 * exact   可以理解为全匹配
 * 若果不设置 exact 那么
 * 比如路由设置为  /   /path  /path/name /path/age
 * 访问 /path  的时候会匹配到  /   和  /path两个路由对应组件
 * 访问 /path/name 的时候会匹配到   /   /path   /path/name  三个路由对应组件
 * 
 * 如果设置了exact的话，就属于全匹配了
 * 访问 /path/name 的时候会只会匹配/path/name
 * 
 * 
 * Link
 * 用来控制跳转，渲染的是a标签
 * 属性
 * to  可以是字符串（跳转的路径） ，  可以是对象，（跳转到对应路由的地址对象）
 * replace 如果配置该属性则在跳转的时候不会添加历史记录
 * 
 * 
 * react配置路由的方法
 * 使用react-router-dom 提供的对应路由组件
 * BrowserRouter   history路由配置
 * HashRouter  hash路由配置
 * Route配置路由，path对应路由地址， component对应路由渲染的组件
 * Link   做跳转用的组件   和 vue中router-link
 * 
 * 使用的时候必须使用
 * BrowserRouter或HashRouter组件将路由的配置包裹起来，并且只有一个顶级组件
 * 在内部使用Route组件进行路由得配置
 */