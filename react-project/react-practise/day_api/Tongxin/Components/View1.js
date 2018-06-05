import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ViewLast from './ViewLast'


class ViewFirst extends Component {
    constructor (props) {
        super(props)
        this.state= {
            num: 0
        }
    }

    static contextTypes = {
        name: PropTypes.string
    }
    
    render () {
        return (
            <div>
                儿子  爸爸叫.... {this.context.name}
                <ViewLast />
            </div>
        )
    }
}

export default ViewFirst
