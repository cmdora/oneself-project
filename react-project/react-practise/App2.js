import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import EventApi from './day_api/EventApi'
import TongXin from './day_api/Tongxin'
import TabPage from './day_api/Tab'
import Dialog from './day_api/Dialog'
import Collapse from './day_api/Collapse'
import Hoc from './day_api/Hoc'
import CirclePage from './day_api/CircleChart'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h2>事件处理</h2>
        <EventApi />
        <h2>组件通信</h2>
        <TongXin />

        <h2>tab案例</h2>
        <TabPage /> */}

        {/* <h2>弹框案例</h2>
        <Dialog /> */}

         {/*<h2>折叠面板案例</h2>
         <Collapse />

        <h2>高阶组件</h2>
         <Hoc />*/}
         <h2>圆环进度条</h2>
         <CirclePage />
      </div>
    );
  }
}

export default App;
