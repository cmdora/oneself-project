import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Header.css'

@withRouter
class Header extends Component {
    goBack () {
        const { history } = this.props
        history.push('/')
    }
    render () {
        const { location } = this.props
        return (
            <div>
                {
                    /\/classify/.test(location.pathname)
                    ? <span className='icon back' onClick={this.goBack.bind(this)}></span>
                    : ''
                }
                <input type="text" placeholder='请输入要搜索的内容'/>
                <span>登陆</span>
            </div>
        )
    }
}

export default Header