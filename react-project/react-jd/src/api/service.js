import axios from 'axios'
import { SHOPCART, LOGIN, SAGE } from './interface.js'

export const getShopCart = () => {
    return axios.get(SHOPCART)
}


export const getUserInfo = (params) => {
    return axios.post(LOGIN, params)
}

export const getTextSage = () => {
    return axios.get(SAGE)
}