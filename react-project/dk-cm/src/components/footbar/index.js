import React, { Component } from 'react'
import './footbar.css'
import {
	NavLink
} from 'react-router-dom'

class FootBar extends Component {
	render () {
		return (
			<div className="footer">
				<NavLink to="/home" activeClassName="active">首页</NavLink>
				<NavLink to="/seek" activeClassName="active">快速找房</NavLink>
				<NavLink to="/join" activeClassName="active">业主加盟</NavLink>
				<NavLink to="/user" activeClassName="active">我的</NavLink>
				<NavLink to="/work" activeClassName="active">考试</NavLink>
			</div>
		)
	}
}

export default FootBar