import React, {Component} from 'react'
import PropTypes from 'prop-types'


class ViewLast extends Component {
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
                孙子 爷爷叫.... {this.context.name}
            </div>
        )
    }
}

export default ViewLast
