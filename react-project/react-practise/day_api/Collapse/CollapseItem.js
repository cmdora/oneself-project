import React, {Component} from 'react'
// import './Dialog.css'

class CollapseItem extends Component {
    constructor (props) {
        super(props)
    }
    
    render () {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default CollapseItem
