
let newState = {}

const asynAction = (
    state = {
        status: '未请求',
        data: []
    },
    actions
) => {
    switch (actions.type) {
        case 'REQUEST_POSTS':
            newState = Object.assign({
                state: '请求前'
            })
            return newState
        case 'RECEIVE_POSTS':
            newState = Object.assign({
                state: '请求完成'
            })
            return newState
        case 'SUCCESS_POSTS':
            newState = Object.assign({
                state: '请求陈宫',
                data: [1,2,3,4,5]
            })
            return newState
        case 'ERROR_POSTS':
            newState = Object.assign({
                state: '请求失败'
            })
            return newState
        default:
            return state

    }
}

export default asynAction