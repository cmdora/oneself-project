/**
	GET和post的时候发送的数据不一样
	GET: key=value&key=value
	POST: 需要将数据传递到body属性上 是一个JSON对象
**/

/**
 * 将对象转成 a=1&b=2的形式
 * @param obj 对象
 */
function obj2String (obj) {
	let objArr = []

	for (let key in obj) {
		objArr.push(
			key+"="+( typeof obj[key] == 'object' ? JSON.stringify(obj[key]) : obj[key] )
		)
	}
	return objArr.join('&')
}

/**
 * 真正的请求
 * @param url 请求地址
 * @param data 请求参数
 * @param method 请求方式
 */
function commonFetcdh(url, data, method = 'GET', callback) {

	let initObj = {}

	if (method == 'GET') {
		url = url+"?"+obj2String(data),
		initObj = {
			method,
			mode: 'no-cors',
			credentials: 'include'
		}
	} else {
		initObj = {
			method,
			headers: {
				'Content-Type': 'application/json'
			},
			mode: 'no-cors',
			credentials: 'include',
			body: obj2String(data)
		}
	}

	return fetch(url, initObj).then((res) => {
		callback()
		if (res.status >= 400) {

			return res.json().then((error) => {
				return Promise.reject(error)
			})
		} else {
			return res.json()
		}

	})
}

export default {
	install (Vue, options) {
		Vue.prototype.$http = {
	    	get : (url, data) => {
	    		options.beforEach()
	    		return commonFetcdh(url, data, 'GET', () => {
	    			options.afterEach()
	    		}).catch((error) => {
	    			options.catchEach(error)
	    			return Promise.reject(error)
	    		})
	    	},
	    	post : (url, data) => {
	    		options.beforEach()
	    		return commonFetcdh(url, data, 'POST', () => {
	    			options.afterEach()
	    		}).catch((error) => {
	    			options.catchEach(error)
	    			return Promise.reject(error)
	    		})
	    	},
	    	put : (url, data) => {
	    		options.beforEach()
	    		return commonFetcdh(url, data, 'PUT', () => {
	    			options.afterEach()
	    		}).catch((error) => {
	    			options.catchEach(error)
	    			return Promise.reject(error)
	    		})
	    	},
	    	delete : (url, data) => {
	    		options.beforEach()
	    		return commonFetcdh(url, data, 'DELETE', () => {
	    			options.afterEach()
	    		}).catch((error) => {
	    			options.catchEach(error)
	    			return Promise.reject(error)
	    		})
	    	},
	    	patch : (url, data) => {
	    		options.beforEach()
	    		return commonFetcdh(url, data, 'PATCH', () => {
	    			options.afterEach()
	    		}).catch((error) => {
	    			options.catchEach(error)
	    			return Promise.reject(error)
	    		})
	    	}
	  	}
	}
}
