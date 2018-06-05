import React, { Component } from 'react'

class Detail extends Component {
    render () {
        const { location } = this.props
        return (
            <div>
                <img src={location.state.imageurl} alt=""/>
                {location.state.wname}
            </div>
        )
    }
}

export default Detail