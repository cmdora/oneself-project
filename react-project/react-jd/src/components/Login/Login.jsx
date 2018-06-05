import React, { Component } from 'react'
import { getUserInfo } from '../../api/service.js'
import * as loginAction from '../../store/action/login'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Login extends Component {
    constructor () {
        super ()

        this.state = {
            name: '',
            pwd: ''
        }
    }

    changeName (e) {
        this.setState({
            name: e.target.value
        })
    }

    changePwd (e) {
        this.setState({
            pwd: e.target.value
        })
    }

    login () {
        getUserInfo({
            userOpenId: window.localStorage.userOpenId
        })
        .then(res => {
            // 错误信息 时
            if (res.data.code != 0) return
            // 跳转页面
            const { history, loginActions } = this.props
            history.push('/')
            // 存储到  location
            // window.localStorage.userInfo = JSON.stringify(res.data.data)
            window.localStorage.userOpenId = res.data.userOpenId
            // 存到 store  传参
            loginActions.getUserInfoAction(res.data.data)
        })
    }

    render () {
        const { name, pwd } = this.state
        return (
            <div>
                用户名： <input type="text" value={name} onChange={this.changeName.bind(this)}/><br /><br />
                用户名： <input type="password" value={pwd} onChange={this.changePwd.bind(this)}/><br /><br />
                <button onClick={this.login.bind(this)}>登录</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginActions: bindActionCreators(loginAction, dispatch) // actionCreators
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)