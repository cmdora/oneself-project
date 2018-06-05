
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {post_list} from '../../store/modules/AsynAction/actions'
class AsynAction extends Component {
    
    render () {
        return (
            <div>
                {this.props.AsynAction.data}
            </div>
        )
    }
    componentDidMount () {
        // //这么写 在组件中的逻辑变得复杂

        // this.props.dispatch({
        //     type: 'REQUEST_POSTS'
        // }) // 执行请求前的状态变更
        // setTimeout( () => {
        //     this.props.dispatch({
        //         type: 'RECEIVE_POSTS'
        //     }) // 执行请求完成的状态变更
        //     this.props.dispatch({
        //         type: 'SUCCESS_POSTS'
        //     })// 执行请求成功的状态变更
        // }, 2000)
        this.props.dispatch(post_list()).then(() => {
            console.log(this.props.AsynAction)
        })
        
    }
}


export default connect((state) => {
    console.log(state, '异步action')
    return {
        AsynAction: state.AsynAction
    }
})(AsynAction)

/**
 * Middleware 中间
 * 在redux中，中间件的概念是：在发起action之后，调用reducer之前，执行的扩展操作
 * 
 * redux-thunk  解决异步action问题
 * 可以在函数action中使用dispatch触发其他action
 * 
 * 异步action就是可以在函数action中执行dispatch
 * 
 */