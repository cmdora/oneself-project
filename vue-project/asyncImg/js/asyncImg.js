class AsyncImg {
    constructor () {
        this.init()
    }
    ajax (obj) {
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
    init () {
        this.ajax({
            url: 'http://localhost:3000',
            method: 'GET'
        }).then((result) => {
            console.log(result)
            this.loadImgs(result).then((imageArr) => {
                for (let url of imageArr) {
                    box.append(url)
                }
            })
        },(error) => {
            console.log('error')
        })
    }
    loadImg (url) {//加载图片
        let image = new Image()
        const promise = new Promise((resolve, reject) => {
            image.onload = function () {
                resolve(image)
            }
            image.onerror = function () {
                reject(error)
            }
        })
        image.src = url
        return promise
    }
    loadImgs (...urls) {
        const urlsArr = urls[0] instanceof Array ? urls[0] : urls   // 转化为数组
        const [num, imageArr] = [urlsArr.length, []]    // 新建你需要返回的对象以及返回条件
        const promise = new Promise((resolve, reject) => {
            urlsArr.map((item, index) => {
                this.loadImg(item.url).then((image) => {
                    imageArr.push(image)
                    if (imageArr.length === num) {
                        resolve(imageArr)
                    }
                }, (error) => {
                    reject(error)
                })
            })
        })
        return promise
    }
}