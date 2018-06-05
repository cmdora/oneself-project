import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import {UserArr} from './data/user'
const mock = new MockAdapter(axios)


mock.onPost('/api/user/login').reply(function(config) {
    //接受手机号和密码判断用户登录
    let login_info = JSON.parse(config.data)

    let login_user = UserArr.filter((item) => {
        if (item.phone == login_info.phone && item.password == login_info.password) {
            return true
        } else {
            return false
        }
    })
    
    if (login_user.length >= 1) {
        return [200, login_user[0]];
    } else {
        return [402, {
            error: '用户名密码错误'
        }];
    }

    
});


export default axios