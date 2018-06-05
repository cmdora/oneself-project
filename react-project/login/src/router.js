import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import BaseLayout from './layout/BaseLayout'
import UserLayout from './layout/UserLayout';

class RouterConfig extends Component {
    render () {
        return (
            <Router>
                <Switch>
                    
                    {/**用户相关布局魔板(登陆，注册，...)**/}
                    <Route path="/user" component={UserLayout} />

                    {/**登陆后内容相关布局魔板（登陆后导航相关的功能页面）**/}
                    <Route path="/" component={BaseLayout}  />

                </Switch>
            </Router>
        )
    }
}
export default RouterConfig