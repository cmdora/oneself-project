import React, {Component} from 'react'

class TabPage extends Component {
	constructor (props) {
		super(props)
		this.state = {
			keys: this.props.keys
		}
	}
	render () {
		return (
			<div className="tab-page" key={this.props.keys} style={{'display': this.state.keys == this.props.pages ? 'block':'none'}}>
				{this.props.children}
			</div>
		)
	}
}

export default TabPage