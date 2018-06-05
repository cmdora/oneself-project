import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AddAction,JianAction } from '../../store/action/shopCart'

class ShopCart extends Component {
    addSum () {
        const { dispatch } = this.props
        dispatch(AddAction())
    }
    JianSum () {
        const { dispatch,sum } = this.props
        if(sum > 0){
            dispatch(JianAction())
        }
    }
    render () {
        const { sum } = this.props
        return (
            <div>
                <button onClick={this.addSum.bind(this)}>++++</button>
                <button onClick={this.JianSum.bind(this)}>----</button>
                总数：{sum}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        sum: state.shopCart.sum
    }
}

export default connect(mapStateToProps)(ShopCart)