import { combineReducers } from 'redux'
import home from './home'
import mine from './mine'
import shopCart from './shopCart'
import classify from './classify'
import year from './year'

const rootReducer = combineReducers({
    home,
    mine,
    shopCart,
    year,
    classify
})

export default rootReducer