import {
	SET_USER_INFO,
	SET_TOKEN_DATA
} from '@/store/actions'

const initState = {
	info: {
		name: 'dora',
		phone: '18311256237',
		password: '1234',
		sex: '女'
	},
	tokenData: ''
}

const user = (state=initState, actions) => {
	switch (actions.type) {
		case SET_USER_INFO:
			return Object.assign({}, state, {
				info: actions.info
			})
		case SET_TOKEN_DATA:
			return Object.assign({}, state, {
				tokenData: actions.tokenData
			})
		default:
			return state
	}	 
}

export default user