function ajax (obj) {
    const xml = new XMLHttpRequest()
    xml.open(obj['method'], obj['url'])
    const promise = new Promise((resolve, reject) => {
        xml.onreadystatechange = function () {
            if (this.readyState !== 4) {
                return
            }
            if (this.status === 200) {
                resolve(JSON.parse(this.response))
            }else {
                reject(this.statusText)
            }
        }
    })
    xml.send(obj['data'])
    return promise
}