import React, {Component} from 'react'
import ViewFirst from './View1'
import PropTypes from 'prop-types'


class Content extends Component {
    constructor (props) {
        super(props)
        this.state= {
            num: 0,
            name: 'cm'
        }
    }
    static childContextTypes = {
        name: PropTypes.string
    }

    getChildContext () {
        return {
            name: this.state.name
        }
    }
    
    render () {
        return (
            <div>
                <div>我叫{this.state.name}</div> 
                <ViewFirst />
            </div>
        )
    }
}

export default Content
