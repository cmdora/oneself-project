import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import jdList from './datas/jdList.json'

const mock = new AxiosMockAdapter(axios)

const jdDatas = () => {
    mock.onGet('/api/jdlist').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, jdList])
        })
    })
    mock.onGet('/api/jdlist1').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, {name: 'zkt1111'}])
        })
    })
}

export default jdDatas