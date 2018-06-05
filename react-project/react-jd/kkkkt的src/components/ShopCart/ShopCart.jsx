import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAction, jianAction } from '../../store/action/shopCart'

class ShopCart extends Component {
    handleAdd () {
        const { dispatch } = this.props
        dispatch(addAction())
    }
    handleJian () {
        const { dispatch, total } = this.props
        if (total > 0) {
            dispatch(jianAction())
        }
        
    }
    render () {
        const { total } = this.props
        return (
            <div>
                ShopCart
                <button onClick={this.handleAdd.bind(this)}>+++++</button>
                <button onClick={this.handleJian.bind(this)}>--------</button>
                总数： {total}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
   return {
        total: state.shopCart.total
   } 
}

export default connect(mapStateToProps)(ShopCart)