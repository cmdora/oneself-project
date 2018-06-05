import React, { Component } from 'react'
import './projectLayout.css'
import Authority from './Authority'
import FootBar from '@/components/footbar'

export default (PageComponent, options={}) => {
	
	class ProjectLayout extends Component {
		constructor(props) {
			super(props)
		}

		render () {
			return (
				<div className="App">
					<header className="header">头部</header>
					<section className="section">
						<PageComponent />
					</section>
					<FootBar />
				</div>
			)
		}
	}

	if (options.Authority) {
		return Authority(ProjectLayout)
	}

	return ProjectLayout

}