import React, {Component} from 'react'
import './seek.css'

import SeekSelect from './seek-select'
import SeekBody from './seek-body'

class SeekPage extends Component {
	constructor (props) {
		super(props)
		this.state = {
			seekObj: {
				newText: '',
				price: '',
				location: '',
				tags: ''
			},
			showIndex: 100
		}
	}

	toggle (index) {
		this.setState({
			showIndex: index
		})
	}

	render () {
		return (
			<div className="seek">
				<div className="seek-page">
					<SeekSelect
						name="合/整"
						show={this.state.showIndex == 0}
						value={this.state.seekObj.newText}
						data={[{text: '不限', value: ''}, {text: '整租', value: 'u1'}, {text: '合租', value: 'u2'}]}
						toggle={
							(show, val) => {
								if (show) {
									this.toggle(0)
								} else {
									this.setState({
										seekObj: Object.assign({}, this.state.seekObj, {
											newText: val
										})
									}, function () {
										console.log(this.state.seekObj)
									})
									this.toggle(100)
								}
							}
						}
					/>
					<SeekSelect
						name="位置"
						show={this.state.showIndex == 1}
						value={this.state.seekObj.location}
						data={
							[
								{text: '不限', value: ''},
								{text: '附近', children: [
									{text: '1000米', value: '1000'},
									{text: '2000米', value: '2000'},
									{text: '3000米', value: '3000'}
								]},
								{text: '地铁', children: [
									{text: '1号线', children: [
										{text: '不限', value: '2号线'},
										{text: '苹果园', value: '1号线'},
										{text: '八角游乐园', value: '1号线'},
										{text: '八宝山', value: '1号线'},
										{text: '玉泉路', value: '1号线'}
									]},
									{text: '2号线', children: [
										{text: '不限', value: '2号线'},
										{text: '建国门', value: '2号线'},
										{text: '安定门', value: '2号线'},
										{text: '朝阳门', value: '2号线'}
									]}
								]}
							]
						}
						toggle={
							(show, val) => {
								if (show) {
									this.toggle(1)
								} else {
									this.setState({
										seekObj: Object.assign({}, this.state.seekObj, {
											location: val
										})
									}, function () {
										console.log(this.state.seekObj)
									})
									this.toggle(100)
								}
							}
						}
					/>
					<SeekSelect
						name="价格"
						show={this.state.showIndex == 2}
						value={this.state.seekObj.price}
						data={[{text: '不限', value: ''}, {text: '1500元以下', value: '1500'}, {text: '1500~2000元', value: '1500&2000'}, {text: '2000~2500元', value: '2000&2500'}, {text: '2500~3000元', value: '2500&3000'}]}
						toggle={
							(show, val) => {
								if (show) {
									this.toggle(2)
								} else {
									this.setState({
										seekObj: Object.assign({}, this.state.seekObj, {
											price: val
										})
									}, function () {
										console.log(this.state.seekObj)
									})
									this.toggle(100)
								}
							}
						}
					/>
					<SeekSelect
						name="更多"
						show={this.state.showIndex == 3}
						toggle={
							(show, val) => {
								if (show) {
									this.toggle(3)
								} else {
									this.toggle(100)
								}
							}
						}
					/>
				</div>
				<SeekBody seekObj={this.state.seekObj} />
			</div>
		)
	}
}

export default SeekPage