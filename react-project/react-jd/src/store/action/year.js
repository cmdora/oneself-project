import * as types from '../actiontypes/year'

export const getShopc = (ShopCart) => {
    return (dispatch, getState) => {
        dispatch(requestShopc())
        dispatch({
            type: types.YEAR,
            ShopCart
        })  
    }
}

export const requestShopc = () => {
    return {
        type: types.REQUEST
    }
}