// 1. 导入 express
const express = require('express')
    // 2. 创建路由对象
const router = express.Router()
const handle = require('./router-handle')

// 3. 挂载路由
// router.get('/user/list', (req, res) => {
//     res.send('Get user list.')
// })

// router.post('/user/add', (req, res) => {
//     res.send('Add new user.')
// })
router.get('/user/list', handle.list)
router.post('/user/add', handle.add)
    // 4. 暴露路由对象
module.exports = router

//router只做路由的挂载