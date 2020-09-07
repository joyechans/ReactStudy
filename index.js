const express = require('express') //express 모듈 가져오기
const app = express() //NEW express App 만들기
const port = 3000 //포트
const bodyParser = require('body-parser');
const config = require('./config/key');
const { User } = require("./model/User");

app.use(bodyParser.urlencoded({extended: true})); //application/x-www-form-urlencoded 타입의 데이터를 분석하여 가져와줌
app.use(bodyParser.json()); //application/json 타입의 데이터를 분석하여 가져와줌

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,
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

app.post('/register', (req, res) => {
    //회원 가입 할때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터 베이스에 넣어준다.
    
    const user = new User(req.body)

    user.save((err, doc) => { //콜백 함수
      if(err) return res.json({ success: false, err })
      return res.status(200).json({ //성공
        success: true
      })
    }) //정보들이 User 모델에 저장

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})