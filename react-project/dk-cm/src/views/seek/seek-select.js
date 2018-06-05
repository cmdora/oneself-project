import React, { Component } from 'react'
import Mock from 'mock/fetch'

const SelectList = ({data, onClick}) => {
	return (
		<ul>
			{
				data.map((item, index) => {
					return (
						<li key={index} onClick={() => {
							onClick(item)
						}}>{item.text}</li>
					)
				})
			}
		</ul>
	)
}

class SeekSelect extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			showFlag: false,
			top: 0,
			selectArr: [this.props.data],
			selectedItem: {},
			colors: ''
		}
	}

	show () {
		this.setState({
			showFlag: true,
			top: this.refs.select.offsetTop+this.refs.select.clientHeight+45
		})
	}

	hide () {
		this.setState({
			showFlag: false
		})
	}

	toggleSelect () {
		this.props.toggle(!this.state.showFlag)
		this.setState({
			colors: this.state.showFlag ? '' : 'colors'
		})
		if (this.state.showFlag) {
			this.hide()
		} else {
			this.show()
		}
	}

	componentWillReceiveProps (nextProps) {
		if (nextProps.show) {
			this.show()
		} else {
			this.hide()
		}
	}

	selectItem (item) {
		this.hide()
		this.props.toggle(!this.state.showFlag, item.value)
		this.setState({
			selectedItem: item
		})
	}

	render () {
		let {
			name,
			value,
			data = [],
			children
		} = this.props
		let {house} = this.state
		return (
			<div className="seek-select" ref="select">
				<span className={this.state.colors} onClick={() => {
					this.toggleSelect()
				}}>{value ? this.state.selectedItem.text : name}</span>

				<div className="seek-mark" style={{
					'display': this.state.showFlag ? 'block' : 'none',
					'top': this.state.top
				}}>
					<div className="seek-mark-content">
						{
							data.length >= 1 && this.state.selectArr.map((item, index) => {
								return (
									<SelectList key={index} data={item} onClick={(item) => {
										if (item.children) {
											var arr = []
											arr.push(item.children)
											this.state.selectArr.splice(index+1, index+1+1)
											this.setState({
												selectArr: this.state.selectArr.concat(arr)
											})
										} else {
											this.selectItem(item)
											this.setState({
												colors: this.state.showFlag ? '' : 'colors'
											})
										}
									}} />
								)
							})
						}
					</div>
				</div>
			</div>
		)
	}
}

export default SeekSelect