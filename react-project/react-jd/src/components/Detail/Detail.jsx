import React, { Component } from 'react'
import './Detail.css'

class Detail extends Component {
    render () {
        const { location } = this.props
        const { imageurl, wname } = location.state
        return (
            <div className="detail">
                <img src={imageurl} alt=""/>
                <div>{wname}</div>
            </div>
        )
    }
}

export default Detail