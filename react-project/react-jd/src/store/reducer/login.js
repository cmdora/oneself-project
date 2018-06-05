import * as types from '../actiontypes/login'

const initalState = {
    name: 'login',
    userInfo: null
}

const login = (state = initalState, action) => {
    switch (action.type) {
        case types.GET_USERINFO:
            return {...state, userInfo: action.userInfo}
        default:
            return state
    }
}

export default login