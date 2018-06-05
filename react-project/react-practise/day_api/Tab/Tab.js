import React, {Component} from 'react'

import './tab.css'
class Tab extends Component {
    constructor (props) {
        super(props)
       
        console.log(this.props.children)
        this.state = {
            active_index: 0
        }
    }
    tabClick (e, index) {
        this.setState({
            active_index: index
        })
    }
    render () {
        return (
            <div className="tab-box">
                <nav>
                    {
                        this.props.children.map((item, i) => {
                            return (
                                <a 
                                    href="javascript:;" 
                                    key={i}
                                    className={(i == this.state.active_index ? 'active' : '')}
                                    onClick={(e) => {
                                        this.tabClick(e, i)
                                    }}
                                >{item.props.title}</a>
                            )
                        })
                    }
                </nav>
                <div className="content">
                    {
                        this.props.children.map((item, i) => {
                            return (
                                <div 
                                    className="content-item" 
                                    key={i}
                                    style={
                                        {display: (i == this.state.active_index ? 'block' : 'none')}
                                    }
                                >{item}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Tab

