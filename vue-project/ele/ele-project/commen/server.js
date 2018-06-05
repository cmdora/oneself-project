const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()
const mysql =require('mysql')
const path = require('path')
const cookieParser = require('cookie-parser')
const uploads = require('./fileupload.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'upload')))
app.use(express.static(path.join(__dirname, 'dist')))

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '1234',
  database: 'dl_ele'
})

connection.connect(function (error) {
  if (error) {
    console.log('连接失败')
  } else {
    console.log('连接成功')
  }
})


//设置跨域
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", req.get('origin'))
  res.header("Access-Control-Allow-Headers", "Content-Type,Token,credentials")
  res.header("Content-Type", "application/json;charset=utf-8")
  res.header("Access-Control-Allow-Credentials", true)
  next()
})

// 登陆判断数据库是否有登陆的数据，有就返回登陆的数据并进入登陆后首页
app.post('/api/login', (req, res) => {
  const {
    userName,
    password
  } = req.body
  console.log(req.body)

  connection.query('select * from dl_ele_table where name=? and password=?', [userName, password], function (err, result) {
    if (err) {
      res.send(res.status)
    }
    result.forEach((item, index) => {
      if (item.name !== userName || item.password !== password) {
        console.log('失败')
      }else {
        res.cookie('userInfo', {
          ...item
        }, {maxAge: 6000*60*24})
        res.send(JSON.stringify(item))
      }
    })
  })
})

// 获取cookie值判断数据库中有没有相匹配的数据
app.get('/api/user_info', (req, res) => {
  if (req.cookies['userInfo']) {
    connection.query('select * from dl_ele_table where name=?', [req.cookies['userInfo'].name], function (err, result) {
      if (err) {
        res.send(res.status)
      }
      res.send({result})
    })
  }
})

// 从运营分类触发添加父分类，并插入数据到数据库中去
app.post('/api/classify', (req, res) => {
  let {
    title,
    msg,
    food,
    icon,
    child
  } = req.body
  let newChild = child.join(',')
  let sql = 'insert into food_list (shop_title, shop_msg, shop_food, shop_img, shop_child) values (?,?,?,?,?)'
  connection.query(sql, [title, msg, food, icon, newChild], function(err, result) {
    res.send({
      status: 200,
      msg: 'ok'
    })
  })
})

// 获取运营分类插入的父类数据
app.get('/api/get_classify', (req, res) => {
  connection.query('select * from food_list', function(err, result) {
    if (err) {
      res.send(res.status)
    }
    res.send({result})
  })
})

// 上传文件
app.post('/api/upload', uploads.single('file'), function(req, res) {
  if (req.file) {
    res.send({
      url: req.file.filename
    })
  }
})

// 获取运营分类并插入子类数据
app.post('/api/get_child', (req, res) => {
  let child = req.body.child.join(',')
  let id = req.body.id

  connection.query('select * from food_list where id=?',[id], function (err, result) {
    if (err) {
      res.send(res.status)
    }

    let newChild = result[0].shop_child + ',' + child
    let sql = `update food_list set shop_child='${newChild}' where id='${id}'`
    connection.query(sql, [id], function(err, data) {
      if (err) {
        res.send(res.status)
      }
      res.send({
        status: 200,
        code: '更新成功'
      })
    })

  })
})

// 添加商品信息
app.post('/api/shop/add', (req, res) => {
  let {
    shop_title,
    shop_tel,
    people_name,
    people_tel,
    shop_class_main,
    shop_class_less,
    shop_time,
    shop_city1,
    shop_city2,
    shop_city3
  } = req.body
  // let {id} = req.query
  let shop_city = shop_city1 + ' ' + shop_city2 + ' ' + shop_city3

  let sql = 'insert into shop_info (shop_title, shop_tel, people_name, people_tel, shop_class_main, shop_class_less, shop_time, shop_city) values (?,?,?,?,?,?,?,?)'
  connection.query(sql, [shop_title, shop_tel, people_name, people_tel, shop_class_main, shop_class_less, shop_time, shop_city], function (err, result) {
    if (err) {
      res.send(res.status)
    }

    res.send({
      status: 200,
      code: '添加商品信息成功'
    })
  })
})

// 获取商品信息
app.get('/api/shop/list', (req, res) => {
  connection.query('select * from shop_info', function(err, result) {
    if (err) {
      res.send(res.status)
    }

    res.send(JSON.stringify(result))
  })
})

// 获取并改变商品的审核信息
app.post('/api/shop/audit', (req, res) => {
  let {
    state,
    id
  } = req.body
  console.log(state, id)
  let sql = `update shop_info set status='${state}' where id=${id}`
  console.log(sql)
  connection.query(sql, [id], function (err, result) {
    if (err) {
      res.send(res.status)
    }

    res.send({
      status: 200,
      code: '获取商品的审核信息'
    })
  })
})

// 分页商品信息
app.post('/api/shop/page', (req, res) => {
  let {
    page = 1
  } = req.body
  let array = []

  connection.query('select * from shop_info', function(err, result) {
    if (err) {
      res.send(res.status)
    }

    array = result.slice((page-1)*10, (page-1)*10+10)
    res.send(JSON.stringify(array))
  })
})

//监听端口号
app.listen(9001, function() {
  console.log('this is a 9001')
})
