ajax({
    url: "http://localhost:3000",
    method: "GET"
}).then((result) => {
    // 创建轮播图结构
    const box = document.createElement('div')
    box.id = 'box'
    let imgStr = '<ul id="imgList">'
    let olStr = '<ol id="olist">'
    result.map((item, index) => {
        imgStr += `<li><img src=${item.url} ></li>`
        olStr += `<li>${index}</li>`
    })
    imgStr += '</ul><span id="left"><</span><span id="right">></span>'
    olStr += '</ol>'
    box.innerHTML = imgStr
    box.innerHTML += olStr
    document.body.append(box)
    
    // 在结构完成后给class赋值
    new Lub({
        box: 'box',
        imgList: 'imgList',
        olist: 'olist',
        olis: 'li',
        imgs: 'img',
        left: 'left',
        right: 'right'
    })
},(error) => {
    console.log('error')
})