import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMineSuccess, getMineRequest } from '../../store/action/testSaga.js'
import { getTextSage } from '../../api/service.js'

class Mine extends Component {
    componentDidMount () {
        const { dispatch } = this.props
        
        dispatch({
            type: 'GET_USER_REQUEST'
        })
    }
    render () {
        return (
            <div>
                Mine
            </div>
        )
    }
}

export default connect()(Mine)