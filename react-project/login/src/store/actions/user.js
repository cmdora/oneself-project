import axios from '../../mock'

export const SET_USER_INFO = 'SET_USER_INFO'
export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS'

const set_user_info = (userInfo) => {
    return {
        type: SET_USER_INFO,
        userInfo
    }
}

export const get_user_info = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                dispatch(set_user_info({
                    userName: 'cm',
                    userAge: 1000
                }))
                resolve()
            }, 1000)
        })
        
    }
}

//登陆action
export const login_do = ({
    phone,
    password
}) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios.post('/api/user/login', {
                phone,
                password
            }).then((data) => {
                resolve(data.data)
                dispatch(set_user_info(data.data)) //修改当前state里面的用户信息
                //修改登录状态为，已登陆
                dispatch({
                    type: SET_LOGIN_STATUS,
                    status: true
                })
                window.localStorage.setItem('user', JSON.stringify(data.data))
            }, (error) => {
                reject(error)
            })
        })
        
    }
}

export const login_out = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(set_user_info({})) //重新设置user信息
            dispatch({
                type: SET_LOGIN_STATUS,
                status: false
            }) //重新设置登陆状态
            window.localStorage.clear() //清除本地存储信息
            resolve()
        })
    }
}
