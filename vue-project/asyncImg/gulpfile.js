const gulp = require('gulp')
const connect = require('gulp-connect')
const webserver = require('gulp-webserver')
const data = require('./data/data.json')
let url = require('url')
// 启动服务
gulp.task('connect', () => {
    connect.server({
        port: 8080,
        livereload: true
    })
})
// 传输数据
gulp.task('httpServer', () => {
    gulp.src('.')
        .pipe(webserver({
            port: 3000,
            middleware: (req, res, next) => {
                res.setHeader("Access-Control-Allow-Origin", "*")
                let method = req.method

                if (method === "GET") {
                    res.setHeader("Content-Type", "application/json;charset=utf-8")
                    res.write(JSON.stringify(data))
                    res.end()
                }else if(method === "POST") {
                    res.end('POST')
                } else if (method === "OPTIONS") {
                    res.writeHead(200, {
                        "content-type": "application/json;charset=utf-8",
                        "access-control-allow-origin": "*",
                        "access-control-allow-methods": "GET,POST,PUT,DELETE",
                        "access-control-allow-headers": "origin,x-requested-with,content-type,accept"
                    })
                    res.end('OPTIONS')
                }
            }
        }))
})

gulp.task('default', ['connect','httpServer'])