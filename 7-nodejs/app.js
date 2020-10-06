const express = require('express')
const app = express()

// 2. 注册路由模块
// const router = 
// app.use('/api', router)

app.use(require('./router'))

// 注意： app.use() 函数的作用，就是来注册全局中间件

app.listen(80, () => {
    console.log('http://127.0.0.1')
})

//只作服务器的启动 和 路由的挂载