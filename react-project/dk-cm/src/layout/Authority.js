import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginPage from '@/views/login'

export default (AuthComponent) => {
	
	class Authority extends Component {
		render () {
			if (this.props.tokenData == '') {
				return <LoginPage />
			} else {
				return <AuthComponent />
			}
		}
	}

	return connect((state) => {
		return {
			...state.user
		}
	})(Authority)

}