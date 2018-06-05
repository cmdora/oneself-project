import { GET_USER_SUCCESS,GET_USER_REQUEST,GET_USER_ERROR } from '../actiontypes/mine.js'

const initialinfo = {
    name: 'saga',
    sagaMsg: ''
}

const reducer = (state = initialinfo, action) => {
    switch (action.type) {
        case GET_USER_REQUEST:
            return {...state, sagaMsg: ''}
        case GET_USER_SUCCESS:
            return {...state, sagaMsg: action.sagaMsg}
        case GET_USER_ERROR:
            return {...state, sagaMsg: '404..'}
        default:
            return state
    }
}

export default reducer