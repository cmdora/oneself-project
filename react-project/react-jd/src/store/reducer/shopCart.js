import { ADD,JIAN } from '../actiontypes/shopCartTypes'
const reducer = (state = {sum: 0}, action) => {
    switch(action.type){
        case ADD: 
            return {...state, sum: state.sum + 1}
        case JIAN: 
            return {...state, sum: state.sum - 1}
        default:
            return state
    }
}

export default reducer