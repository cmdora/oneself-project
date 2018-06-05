import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropsTypes from 'prop-types'
import './List.css'

class List extends Component {
    static PropsTypes = {
        imageurl: PropsTypes.number,
        wname: PropsTypes.string
    }
    detail () {
        const { history,imageurl,wname } = this.props
        history.push({
            pathname: '/detail',
            state: {
                imageurl: imageurl,
                wname: wname
            }
        })
    }
    render () {
        const item = this.props
        return (
            <div className='list' onClick={this.detail.bind(this)}>
                <div className="list-box">
                    <img src={item.imageurl} alt={item.wname}/>
                    <p>{item.wname}</p>
                </div>
            </div>
        )
    }
}

export default withRouter(List)