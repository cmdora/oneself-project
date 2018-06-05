import {combineReducers} from 'redux'
import home from './home'
import car from './car'
import fenlei from './fenlei'
import mine from './mine'

const rootReducers=combineReducers({
    home,
    car,
    fenlei,
    mine
})
export default rootReducers