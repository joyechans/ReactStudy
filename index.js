const express = require('express') //express 모듈 가져오기
const app = express() // NEW express App 만들기
const port = 3000 // 포트

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jo:jo@jo.g64e0.mongodb.net/<dbname>?retryWrites=true&w=majority', 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false  
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})