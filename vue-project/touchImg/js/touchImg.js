class Touch {
    constructor () {
        this.init()
        this.startY = 0
        this.endY = 0
        this.img = 1
        this.imgs = null
    }
    init () {   // 初始化一张图片
        this.ajax({
            url: "http://localhost:3001",
            method: "GET"
        }).then((result) => {
            console.log(result)
            this.imgs = result
            this.touchFn()
            this.loadImg(result[0].url).then((image) => {
                box.append(image)
                image.className = 'img'
            })
        })
    }
    ajax (obj) {    // 定义ajax
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
    loadImg (url) { // 加载图片
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
    touchFn () {    // 滑动图片事件
        document.body.addEventListener("touchstart", (event) => {
            // 获取起始点 Y 轴坐标
            this.startY = event.touches[0].clientY
        })
        document.body.addEventListener("touchmove", (event) => {
            // 获取结束点 Y 轴坐标
            this.endY = event.touches[0].clientY
            // 获取滑动距离
            let abs = Math.abs(this.startY - this.endY)
            // 获取屏幕高度
            let screen = document.body.clientHeight
            // 当滑动距离小于屏幕一半，就return掉
            if (abs < screen/2) {
                return
            }
            // 当滑动距离大于屏幕的一半时，就生成一张图片
            ++this.img
            if (this.img > this.imgs.length) {
                return
            }
            this.loadImg(this.imgs[this.img-1].url).then((image) => {
                box.append(image)
            })
        })
    }
}