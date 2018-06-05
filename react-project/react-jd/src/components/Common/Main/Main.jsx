import React, { Component } from 'react'
import './Main.css'

class Main extends Component {
    render () {
        const { children } = this.props
        return (
            <div className="mains">
                {children}
            </div>
        )
    }
}

export default Main