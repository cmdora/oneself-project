// 触发的事件
import * as types from './mutations-type'
import $http from '../../../commen/plugins/http.js'

export default {
	// 登陆
	login_in ({commit}, data) {
		return new Promise((resolve, reject) => {
			$http.post('/api/login', {
				...data
			}).then((result) => {
				commit(types.SET_USER_INFO, result)
				resolve(result)
			}, (error) => {
				reject(error)
			})
		})
	},

	// 登出
	login_out ({commit}, data) {
		return new Promise((resolve, reject) => {
			document.cookie = 'userInfo' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
			commit(types.SET_USER_INFO, {})
			resolve()
		})
	},

	// 获取用户信息
	get_user_info ({commit}) {
		return new Promise((resolve, reject) => {
			$http.get('/api/user_info', {}).then((result) => {
				commit(types.SET_USER_INFO, result.result[0])
				resolve()
			})
		})
	}
}