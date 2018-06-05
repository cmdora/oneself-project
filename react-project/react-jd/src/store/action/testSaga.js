import * as types from '../actiontypes/mine'

export const getMineRequest = () => {
    return {
        type: 'GET_USER_REQUEST'
    }
}

export const getMineSuccess = sagaMsg => {
    return  {
        type: 'GET_USER_SUCCESS',
        sagaMsg
    }
}

export const getMineError = () => {
    return {
        type: types.GET_USER_ERROR
    }
}