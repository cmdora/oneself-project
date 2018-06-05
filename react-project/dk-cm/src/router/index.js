import React, { Component } from 'react'
import config from './config'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'

class RouterConfig extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<Router>
				<Switch>
					{
						config.routers.map((item, index) => {
							if (item.component) {
								return <Route path={item.path} exact key={index} component={item.component} />
							} else {
								return <Route path={item.path} exact key={index} render={() => {
									return <Redirect to={item.redirect} />
								}} />
							}
						})
					}
				</Switch>
			</Router>
		)
	}
}

export default RouterConfig