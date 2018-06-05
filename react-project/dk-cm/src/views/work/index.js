import React, {Component} from 'react'
import './work.css'
import TabPage from './tab.js'

class WorkPage extends Component {
	constructor (props) {
		super(props)
		this.state = {
			list: [
				{text: 'page 1', tit: '1'},
				{text: 'page 2', tit: '2'},
				{text: 'page 3', tit: '3'},
				{text: 'page 4', tit: '4'}
			],
			page: ''
		}
	}
	render () {
		return (
			<div className="tab">
				<div className="tab-title">
					{
						this.state.list.map((item, v) => {
							return (
								<span key={v} onClick={() => {
									this.setState({
										page: v+1
									})
								}}>{item.text}</span>
							)
						})
					}
				</div>
				<div className="tab-con">
					<TabPage keys="1" pages={this.state.page}>page 1</TabPage>
					<TabPage keys="2" pages={this.state.page}>page 2</TabPage>
					<TabPage keys="3" pages={this.state.page}>page 3</TabPage>
					<TabPage keys="4" pages={this.state.page}>page 4</TabPage>
				</div>
			</div>
		)
	}
}

export default WorkPage