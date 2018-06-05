import React, { Component } from 'react'
import Mock from 'mock/fetch.js'

class SeekBody extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: [],
			newData: []
		}
	}
	
	componentDidMount() {
		Mock.get('/api/houses/list', {}).then((result) => {
			this.setState({
				data: result.list
			})
		})
	}

	componentWillReceiveProps (newProps) {
		let {data=[]} = this.state
		let {seekObj} = newProps
		this.house(seekObj)
	}

	house (val) {
		let {newData} = this.state
		Mock.get('/api/houses/list', {
			newText: val.newText
		}).then((result) => {
			this.setState({
				data: result.list
			})
			console.log(result)
		})
	}

	render () {
		let { data } = this.state
		return (
			<div className="seek-body">
				{
					data && data.map((item, index) => {
						return (
							<dl className="seek-home" key={index}>
								<dt><img src={item.coverImage} /></dt>
								<dd>
									<p className="seek-home-tit">{item.title}<span className="red">{item.bors}</span></p>
									<p className="seek-home-msg"><span>{item.hx}</span><span>{item.pric}</span></p>
									<p className="seek-home-info">{item.info}</p>
								</dd>
							</dl>
						)
					})
				}
			</div>
		)
	}
}

export default SeekBody