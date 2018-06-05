import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

@withRouter
class List extends Component {
    goDetail () {
        const { history, imageurl, wname } = this.props
        history.push({
            pathname: '/detail',
            state: {
                imageurl,
                wname
            }
        })
    }
    render () {
        const { imageurl, wname } = this.props
        return (
            <div onClick={this.goDetail.bind(this)}>
                <img src={imageurl} alt=""/>
                <div>{wname}</div>
            </div>
        )
    }
}

export default List