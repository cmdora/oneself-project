import * as types from '../actiontypes/year'

const obj = {
    name: 'year',
    ShopCart: null
}

const reducer = (state = obj, action) => {
    switch (action.type) {
        case types.REQUEST:
            return {...state, ShopCart: null}
        case types.YEAR:
            return {...state, ShopCart: action.ShopCart}
        default:
            return state
    }

}

export default reducer