import React, { Component } from 'react'
import './FooterItem.css'
import PropTypes from 'prop-types'

class FooterItem extends Component {
    render () {
        const { text, icon } = this.props
        return (
            <div className="footer-item">
                <i className={`${icon}`}></i>
                <span>{text}</span>
            </div>
        )
    }
}

FooterItem.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string
}

export default FooterItem