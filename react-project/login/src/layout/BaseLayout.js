import React, { Component } from 'react';
import {connect} from 'react-redux'
import {login_out} from '../store/actions/user'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

import Home from '../views/Home'

const BaseLayout = (props) => {
    console.log(props)
    if (props.isLogin) {
        return (
            <div>
                <h1>当前登录用户 {props.userInfo.name} <button onClick={() => {
                    //触发退出登录action
                    props.dispatch(login_out()).then(() => {
                        props.history.replace('/user/login')
                    })
                }}>退出登录</button></h1>
                    <div className="left-menu">
                    
                        <nav className="menu">
                            <a href="#">首页</a>
                            <a href="#">首页</a>
                            <a href="#">首页</a>
                            <a href="#">首页</a>
                            <a href="#">首页</a>
                        </nav>
                    </div>
                    <div className="base-content">
                        <Switch>
                            <Redirect form="/" to="/home/index"></Redirect>
                        </Switch>
                        <Switch>
                            <Route path="/home/index" component={Home}></Route>
                        </Switch>
                    </div>
            </div>
            
        )
    } else {
        return <Redirect to="/user/login" />
    }
}
// 关联store
export default connect((state) => {
    return {
        ...state.user
    }
})(BaseLayout)