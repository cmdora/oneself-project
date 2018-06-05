/*
  GET 和 POST的数据格式不一样，所以他们的获取数据方式也不一样
  GET：key=value&key=value
  POST：{}
*/
/*
  首先：判断出数据的格式，然后根据格式的不同，用不同的方式发送或获取数据
  然后：封装一个vue的插件，挂载在vue的原型上调用
*/
function dataString (data) {
  let dataArr = []
  for (let key in data) {
    dataArr.push(
      key + '=' + (typeof data[key] === 'object' ? JSON.stringify(data[key]) : data[key])
    )
  }
  return dataArr.join('&')
}

function optionsObj (url, data, method = 'GET') {
  let initObj = {}
  if (method === 'GET') {
    url += (url.indexOf('?') < 0) ? '?' : '&' + dataString(data)
    initObj = {
      method,
      credentials: true,
      mode: 'no-cors'
    }
  } else {
    initObj = {
      method,
      credentials: true,
      headers: {
        'Content-Type': 'application/json'
      },
      body: data,
      mode: 'no-cors'
    }
  }

  return fetch(url, initObj).then((res) => {
    return res.json()
  })
}

export default {
  install (Vue, options) {
    Vue.prototype.$fetch = {
      get(url, data) {
        return optionsObj(url, data, 'GET')
      },
      post(url, data) {
        return optionsObj(url, data, 'POST')
      },
      put(url, data) {
        return optionsObj(url, data, 'PUT')
      },
      delete(url, data) {
        return optionsObj(url, data, 'DELETE')
      },
      patch(url, data) {
        return optionsObj(url, data, 'PATCH')
      }
    }
  }
}