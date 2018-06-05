import { resolve } from "url";


export const post_list = () => {
    return (dispatch) => {
        dispatch({
            type: 'REQUEST_POSTS'
        })
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                dispatch({
                    type: 'RECEIVE_POSTS'
                })
                
                dispatch({
                    type: 'SUCCESS_POSTS'
                })
                resolve()
            }, 5000)
        })
    }
    
}
/***
 * redux-thunk
 * 可以实现异步action的操作，其实就是可在函数action中执行dispatch
 */