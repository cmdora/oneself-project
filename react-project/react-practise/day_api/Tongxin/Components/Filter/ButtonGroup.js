import React, {Component} from 'react'
import PropTypes from 'prop-types'
import emitter from '../../../../events';

class ButtonGroup extends Component {
    constructor (props) {
        super(props)
        this.state= {
            status: 0 //0全部  1小于10  2小于5
        }
    }
    
    render () {
        return (
            <div>
                {this.state.status}
                <button onClick={() => {
                    this.setState({
                        status: 0
                    })
                    emitter.emit('changeFilter', 0)
                }}>显示全部</button>
                <button onClick={() => {
                    this.setState({
                        status: 1
                    })
                    emitter.emit('changeFilter', 1)
                }}>小于10的</button>
                <button onClick={() => {
                    emitter.emit('changeFilter', 2)
                    this.setState({
                        status: 2
                    })
                }}>小于5的</button>
            </div>
        )
    }
}

export default ButtonGroup
