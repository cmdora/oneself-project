import { ADD, JIAN } from '../actionTypes/shopCartTypes'

const initalState = {
    name: 'shopCart',
    total: 0
}

const reducer = (state=initalState, action) => {
    // {type: 'JIAN', a: 9}
    switch (action.type) {
        case ADD:
            return {...state, total: state.total + 1 }
        case JIAN:
            return {...state, total: state.total - 1 }
        default:
            return state
    }
}

export default reducer