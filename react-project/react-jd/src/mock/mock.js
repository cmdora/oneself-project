import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'

import jdList from './datas/jdList.json';// 列表数据
import shopc from './datas/shopc.json';// 列表数据
import slide from './datas/slide.json';

const mock = new AxiosMockAdapter(axios);

const login = {
    code: 0,
    message: 'ok',
    userOpenId: 'asdfghrewqassdghgf4165',
    data: {
            name: '刘',
            nicName: '努力努力再努力',
            phone: 17600075431,
            money: 999999
        },
    timestamp: new Date().getTime()   
    }
const errorlogin = {
    code: 1,
    message: '登录超时'
}

const jdDatas = () => {
    mock.onGet('/api/jdlist').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, jdList])
        })
    })

    mock.onGet('/api/classify').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, slide])
        })
    })

    mock.onPost('/api/login').reply((config) => {
        // const data = JSON.parse(config.data)

        return new Promise((resolve, reject) => {
            if (config.data) {
                resolve([200, login])
                // reject([400001, errorlogin])      
            } else {
                
            }
        })
    })

    mock.onGet('/api/shopc').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, shopc])
        })
    })

    mock.onGet('/api/saga').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, {message: 'saga请求成功', code: 0}])
        })
    })

    mock.onPost('/api/shopc').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, shopc])
        })
    })

    mock.onPost('/api/shopc_add').reply((config) => {
        const data = JSON.parse(config.data)
        const {id , type} = data
        const newArr = [...shopc]
        let key = 0

        // entries()  es6 获取 对象的下标 和 内容的 方法 
        for (let [index, list] of newArr[0].active_item.entries()) {
            if (list.id === id) {
                key = index
            }
        }
        // 改变当前的数据
        newArr[0].active_item[key].quantity = newArr[0].active_item[key].quantity + type

        return new Promise((resolve, reject) => {
            resolve([200, newArr])
        })
    })
}

export default jdDatas