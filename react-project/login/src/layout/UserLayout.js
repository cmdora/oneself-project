import React, { Component } from 'react';
import {
    Route,
    Switch
} from 'react-router-dom'

import Login from '../views/Login'
import './UserLayout.css'

export default () => {
    return (
        <div className="user-layout">全屏幕魔板
            <Switch>
                <Route path="/user/login" component={Login}></Route>
            </Switch>
        </div>
        
    )
}