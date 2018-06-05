class Tab {
    constructor (obj) {
        this.tabList = obj.content,
        this.init()
    }
    init () {
        this.createTab ()
    }
    createTab () {
        let nDiv = document.createElement('div')
        let nTit = this.createTitle()
        let nCon = this.createContent()

        nDiv.append(nTit)
        nDiv.append(nCon)
        nDiv.className = 'tabBox'

        document.body.append(nDiv)
        this.addEvent()
    }
    createTitle () {
        let ul = document.createElement('ul')
        ul.className = 'title'
        for (let i=0; i<this.tabList.length; i++) {
            let li = document.createElement('li')
            li.innerHTML = this.tabList[i].type
            ul.append(li)
        }
        return ul
    }
    createContent () {
        let div = document.createElement('div')
        div.className = 'content'
        div.innerHTML = this.tabList[0]['list']
        return div
    }
    addEvent () {
        let title = document.querySelector('.title')
        let li = title.querySelectorAll('li')
        let content = document.querySelector('.content')
        li.forEach((item, index) => {
            item.addEventListener('click', (event) => {
                content.innerHTML = this.tabList[index].list
            }, false)
        })
    }
}