import React, { Component } from 'react'

class LoginPage extends Component {
	render () {
		return (
			<ul className="login-page">
				<li><label><span>用户名：</span><input type="text" /></label></li>
				<li><label><span>密码：</span><input type="password" /></label></li>
				<li><button>登陆</button><button>注册</button></li>
			</ul>
		)
	}
}

export default LoginPage