// 突变时处理的数据
import * as types from './mutations-type'

export default {
	[types.SET_USER_INFO] (state, data) {	// 设置用户信息
		state.userInfo = data
	}
}