
import {SET_USER_INFO, SET_LOGIN_STATUS} from '../actions/user'

const userInfoJSON = window.localStorage.getItem('user')
// 初始化的state
const initState = {
    userInfo: userInfoJSON ? JSON.parse(userInfoJSON) : {} ,
    isLogin: userInfoJSON ? true : false
}

//reducer的规则
const user = (state = initState, actions) => {
    switch (actions.type) {
        //设置用户信息
        case SET_USER_INFO :
            return Object.assign({}, state, {
                userInfo: actions.userInfo
            });
        //设置登录状态
        case SET_LOGIN_STATUS :
            return Object.assign({}, state, {
                isLogin: actions.status
            })
        default :
            return state
    }
}
export default user