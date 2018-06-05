import * as types from '../actiontypes/login'

export const getUserInfoAction = (userInfo) => {
    return (dispatch, getstate) => {
        dispatch({
            type: types.GET_USERINFO,
            userInfo
        })
    }
}