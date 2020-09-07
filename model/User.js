const mongoose = require('mongoose');

const userSchma = mongoose.Schema({
    name: {
      type: String,
      maxlength: 50  
    },
    email: {
        type: String,
        trim: true, //ex) jo yechan@naver.com -> 스페이스바를 없애주는 역할
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number, //유저 or 관리자
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }

})

const User = mongoose.model('User', userSchma) //스키마를 모델로 감싸기

module.exports = {User} //다른곳에서도 사용가능하게