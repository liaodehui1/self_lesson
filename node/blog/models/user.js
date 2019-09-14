var mongoose = require('mongoose')
var Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/test');

var userSchema=new Schema({
  email:{
    type:String,
    required:true
  },
  nickname:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  created_time:{
    type:Date,
    // 这里不要写Date.now() 因为这样所有用户创建时间相同
    // 这里只传一个方法 当new实例时没有传created_time mongoose会自动调用Date.now
    default:Date.now
  },
  last_modified_time:{
    type:Date,
    default:Date.now
  },
  avatar:{
    type:String,
    default:'/public/img/avatar-default.png'
  },
  bio:{
    type:String,
    default:''
  },
  gender:{
    type:Number,
    // -1 保密
    // 0 男
    // 1 女
    enum:[-1,0,1],
    default:-1
  },
  birthday:{
    type:Date
  },
  status:{
    type:Number,
    // 0 没有权限限制
    // 1 不可以评论
    // 2 不可登录
    enum:[0,1,2],
    default:0
  }
})

var User=mongoose.model('User',userSchema)

module.exports=User