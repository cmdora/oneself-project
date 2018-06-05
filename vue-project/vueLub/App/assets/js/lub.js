export default class Lub {
    constructor (args) {
        this.init(args)
        this.leftFn()
        this.rightFn()
        this.initBc()
        this.clickFn()
        this.autoplay()
        this.mouseFn()
    }
    init (args) {   // 初始化从 createBox.js 那儿获取到的条件以及所需条件
        this.box = this.id(args.box)
        this.imgList = this.id(args.imgList)
        this.imgs = this.imgList.getElementsByTagName(args.imgs)
        this.olist = this.id(args.olist)
        this.olis = this.olist.getElementsByTagName(args.olis)
        this.left = this.id(args.left)
        this.right = this.id(args.right)
        this.imgW = this.imgs[0].width
        this.timer = null
        this.count = 0
        this.imgList.style.width = this.imgW * this.imgs.length + 'px'
    }
    id (dom) {  // 封装id名
        return typeof dom === "string" ? document.getElementById(dom) : dom
    }
    rightFn () {    // 图片向右滑动事件
        if (this.count < this.imgs.length-1) {
            this.count++
            this.imgList.style.marginLeft = -this.count * this.imgW + 'px'
        }else {
            this.count = 0
            this.imgList.style.marginLeft = -this.count * this.imgW + 'px'
        }
        this.bgColor(this.count)
    }
    leftFn () { // 图片向左滑动事件
        if (this.count > 0) {
            this.count--
            this.imgList.style.marginLeft = -this.count * this.imgW + 'px'
        }else {
            this.count = this.imgs.length - 1
            this.imgList.style.marginLeft = -this.count * this.imgW + 'px'
        }
        this.bgColor(this.count)
    }
    clickFn () {    // 点击左右按钮触发事件
        this.left.addEventListener('click', () => { // 触发左滑事件
            this.leftFn()
        })
        this.right.addEventListener('click', () => {    // 触发右滑事件
            this.rightFn()
        })
    }
    bgColor (nIndex) {  // 分页器的背景颜色事件
        [...this.olis].map((item, index) => {
            item.className = ''
        })
        this.olis[nIndex].className = 'bgColor'
    }
    initBc () { // 初始化分页器
        this.olis[0].className = 'bgColor'; // 分页器默认颜色
        [...this.olis].map((item, index) => {
            item.onmouseover = () => { // 当滑过分页器页面转换分页器背景色变化
                this.bgColor(index)
                this.count = index
                this.leftFn()
                this.rightFn()
            }
        })
    }
    autoplay () {   // 自动轮播事件  向右轮播
        this.timer = setInterval(() => {
            this.rightFn()
        },1000)
    }
    mouseFn () {
        this.box.onmouseover = () => {  // 当滑过轮播图范围时，停止自动轮播
            clearInterval(this.timer)
        }
        this.box.onmouseout = () => {   // 当滑出轮播图范围时，开始自动轮播
            this.autoplay()
        }
    }
}
