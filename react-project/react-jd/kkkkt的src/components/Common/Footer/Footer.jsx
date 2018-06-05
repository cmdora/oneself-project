import React, { Component } from 'react'
import './Footer.css'

const className = 'footer'

class Footer extends Component {
    render () {
        const { children } = this.props
        return (
            <div className={className}>
                {children}
            </div>
        )
    }
}

export default Footer