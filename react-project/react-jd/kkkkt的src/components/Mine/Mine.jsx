import React, { Component } from 'react'
import { connect } from 'react-redux'

class Mine extends Component {
    render () {
        return (
            <div>
                Mine
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { }
}

export default connect(mapStateToProps)(Mine)