class Page {
    constructor (obj) {
        this.init()
        this.data = obj.data
        this.pageLength = obj.pageLength
        this.cb1 = obj.cb1
        this.cb2 = obj.cb2
    }
    init () {
        this.cb1()
    }
    cb1 () {
        let _this = this
        let pages = document.querySelector("#page").querySelectorAll('span')
        let num = null
        let page = 1
        for (let i=0; i<pages.length; i++) {
            pages[i].innerHTML = i+1
            num = i+1
        }
        // 点击下一页
        next.addEventListener('click', function () {
            pagess.innerHTML = ++page
            for (let j=0; j<pages.length; j++) {
                num++
                pages[j].innerHTML = num
                pages[j].className = ''
            }
        })
        // 点击上一页
        prev.addEventListener('click', function () {
            if (page > 0) {
                pagess.innerHTML = --page
            }
            let sum = num-pages.length
            if (sum >= 4) {
                for (let n=0; n<pages.length; n++){
                    num = n+sum-3
                    pages[n].innerHTML = num
                    pages[n].className = ''
                }
            }
        })
        this.cb2()
    }
    cb2 () {
        let pages = document.querySelector("#page").querySelectorAll('span')
        for (let i=0; i<pages.length; i++) {
            pages[i].addEventListener('click', function () {
                for (let j=0; j<pages.length; j++) {
                    pages[j].className = ''
                }
                this.className = 'blue'
                console.log(this.innerHTML)
            })
        }
    }
}