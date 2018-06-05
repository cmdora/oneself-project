import Mock from 'mock/fetch'
import {
	SET_USER_INFO,
	SET_TOKEN_DATA
} from '@/store/actions'

// 登陆
export const login = (userInfo) => {
	return (dispatch) => {
		Mock.post('/api/login', userInfo).then((data) => {
			dispatch({
				type: SET_USER_INFO,
				info: data
			})
		})
	}
}

// 获取用户信息
export const getUserInfo = () => {
	return (dispatch) => {
		Mock.get('/api/getUserInfo', {}).then((data) => {
			dispatch({
				type: SET_USER_INFO,
				info: data
			})
		})
	}
}