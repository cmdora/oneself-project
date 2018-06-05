import React, { Component } from 'react'
import './Details.css'

class Details extends Component {
    render () {
        const { location, match } = this.props
        const { item } = location.state
        const data = JSON.parse(item.catalogBranch).data
        return (
            <div className="details">
                {
                    data.map((item, index) => {
                        return (
                            <div
                            className="boxs"
                            key={index}>
                                <h3>{item.name}</h3>
                                <ul>
                                    {
                                        item.catelogyList.map((item1, index1) => {
                                            return (
                                                <li
                                                key={index1}>
                                                    <img src={item1.icon} alt=""/>
                                                    <div>{item1.name}</div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Details