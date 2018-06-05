import React, { Component } from 'react'

class SeekDialog extends Component {
	constructor(props) {
		super(props)
		this.state = {
			bors: '',
			type: ''
		}
	}

	strClick (item, flags) {
		let {changeFlag} = this.props
		this.setState({
			bors: item
		})
	}

	render () {
		let {data, flag, tops, changeFlag, type} = this.props
		return (
			<div className="seek-dialog" style={{'display': flag ? 'block':'none', 'top': tops}}>
				<ul className="seek-dialog-mark">
					dsada
				</ul>
			</div>
		)
	}
}

export default SeekDialog