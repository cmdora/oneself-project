import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    // 原始 jsonp 的三个参数，url、option、回调函数
    originJSONP(url, option, (err, data) => {
      // 类似 node 的设计，如果 err 是 null，表示成功，data 是后端返回的数据
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

export function param(data) {
  let url = ''
  for (var key in data) {
    let value = data[key] !== undefined ? data[key] : ''
    url += '&' + key + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}