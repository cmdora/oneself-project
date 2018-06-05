import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login_do } from '../../store/actions/user'
import './style.css'

import FormInput from '../../components/Input'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: '',
            password: ''
        }
    }
    loginDo() {

        //执行登陆action
        this.props.dispatch(login_do({
            phone: this.state.phone,
            password: this.state.password
        })).then(() => {
            this.props.history.push('/home/index') //如果成功跳转到首页面
        }, (error) => {
            alert('用户名密码错误')
        })
    }
    render() {
        return (
            <div className='login-box'>
                <div> 
                    <FormInput
            label="手机号"
            placeholder="请输入手机号"
            value={this.state.phone}
            change={(value) => {
                this.setState({
                    phone: value
                })
            }}
            />
                    <FormInput
            label="密码"
            type="password"
            placeholder="请输入密码"
            value={this.state.password}
            change={(value) => {
                this.setState({
                    password: value
                })
            }}
            />
                    <p>
                        <button onClick={() => {
                this.loginDo()
            }}>登陆</button>
                    </p>
                </div>
            </div>
        )
    }
}


export default connect()(Login)


/**
 * 
 */