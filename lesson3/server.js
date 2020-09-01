const express = require('express')
const app = express()

const mockData = require('./mock.json')
// console.log(mockData)

app.get('/api/info', (req, res) => {
  res.json({
    name: '开课吧',
    age: 5,
    msg: '欢迎来到开课吧学习前端⾼级课程'
  })
})

app.post('/mock/areaList', (req, res) => {
  res.end(JSON.stringify(mockData))
})




app.listen('4000')
