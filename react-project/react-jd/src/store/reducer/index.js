import { combineReducers } from 'redux'
import home from './home'
import mine from './mine'
import year from './year'
import classIfy from './classIfy'
import shopCart from './shopCart'
import login from './login'
import textSaga from './textSaga'

//combineReducers 合并 reducer
const rootReducer = combineReducers({
    home,
    mine,
    year,
    classIfy,
    shopCart,
    login,
    textSaga
})

export default rootReducer