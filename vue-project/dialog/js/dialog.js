class Dialog {
    constructor (title='我是标题', content='今天真是一个美好的一天') {
        this.title = title
        this.content = content
        this.init()
    }
    init () {
        this.createBox()
    }
    createBox () {
        let nDiv = document.createElement('div')
        let nTit = this.createTitle()
        let nCon = this.createContent()

        nDiv.append(nTit)
        nDiv.append(nCon)

        nDiv.className = 'mask'

        document.body.append(nDiv)

        this.addEvent()
    }
    createTitle () {
        let p = document.createElement('p')
        let spanT = document.createElement('span')
        let spanE = document.createElement('span')

        spanE.className = 'close'
        p.className = 'title'

        spanT.innerHTML = this.title
        spanE.innerHTML = '关闭'

        p.append(spanT)
        p.append(spanE)

        return p
    }
    createBtn (sure, cancel) {
        
    }
    createContent () {
        let ul = document.createElement('ul')
        let liC = document.createElement('li')
        let liB = document.createElement('li')
        
        let spanClose = document.createElement('span')
        let spanCancel = document.createElement('span')

        spanClose.className = 'sure'
        spanCancel.className = 'cancel'
        liB.className = 'btn'
        ul.className = 'content'

        spanClose.innerHTML = '确定'
        spanCancel.innerHTML = '取消'

        liB.append(spanClose)
        liB.append(spanCancel)
        liC.innerHTML = this.content

        ul.append(liC)
        ul.append(liB)

        return ul
    }
    addEvent () {
        let close = document.querySelector('.close')
        let sure = document.querySelector('.sure')
        let cancel = document.querySelector('.cancel')

        close.addEventListener('click', (event) => {
            this.hide()
        })
        sure.addEventListener('click', (event) => {
            this.hide()
        })
    }
    hide () {
        let mask = document.querySelector('.mask')
        mask.style.display = 'none'
    }
}