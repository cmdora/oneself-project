import React, { Component } from 'react'
import './Main.css'

const className = 'main'

class Main extends Component {
    render () {
        const { children } = this.props
        return (
            <div className={className}>
                {children}
            </div>
        )
    }
}

export default Main