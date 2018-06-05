import React, {Component} from 'react'



class HeaderBar extends Component {
    constructor (props) {
        super(props)
    }
    renderLeftIcon () {
        return (
            <div className="left-icon-group">
                {this.props.leftIcon}
            </div>
        )
    }
    renderRightIcon () {
        return (
            <div className="left-icon-group">
                {this.props.rightIcon}
            </div>
        )
    }
    render () {
        return (
            <header>
                {this.renderLeftIcon()}
                <h2>{this.props.title}</h2>
                {this.renderRightIcon()}
            </header>
        )
    }
}

export default HeaderBar
