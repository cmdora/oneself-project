import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Header.css'

class Header extends Component {
    GoBack () {
        const { history } = this.props
        history.goBack()
    }

    toLogin () {
        const { history } = this.props
        history.push('/login')
    }

    isLogin () {
        // userInfo !== null && window.localStorage.userInfo 
        // ? userInfo.name 
        // : <span onClick={this.toLogin.bind(this)}>登录</span>
        if (window.localStorage.userInfo) {
            const user = JSON.parse(window.localStorage.userInfo)
            return user.name
        } else {
            return <span onClick={this.toLogin.bind(this)}>登录</span>
        }
    }

    changeinput () {

    }

    render () {
        const { location, userInfo } = this.props
        return (
            <div className="header">
                {
                    /\/classify/.test(location.pathname)
                    ? <div onClick={this.GoBack.bind(this)}>
                        <i className="back"></i>
                      </div>
                    : ''
                }
                <input type="text" onChange={this.changeinput.bind(this)} value="请输入你要搜索的商品"/>
                <div>{userInfo !== null ? userInfo.name : <div>{this.isLogin(this)}</div>}</div>
            </div>
        )
    }
}

export default withRouter(Header)