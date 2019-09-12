const mongoose=require('mongoose')
var Schema = mongoose.Schema

//连接数据库
//指定的数据库不需要存在，当插入数据时自动创建
mongoose.connect('mongodb://localhost/demo1');

//设计表结构
var userSchema=new Schema({
  username:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  email:{
    type:String
  }
})

//将文档发布为模型
//第一个参数：传入大写字母的字符串来表示表名称
//  mongoose会自动转化为小写复数的集合名称
//返回模型构造函数
var User=mongoose.model('User',userSchema)

//实例化
var admin=new User({
  username:"Andy",
  password:"123456",
  email:"admin@qq.com"
})

/**
 * 保存
 */
// admin.save(function (err,ret) {
//   if(err){
//     console.log('保存失败')
//   }else{
//     console.log('保存成功')
//     console.log(ret)
//   }
// })


/**
 * 查询
 */
//查询所有
// User.find(function (err,ret) {
//   if(err){
//     console.log('查询失败')
//   }else{
//     console.log('查询结果：')
//     console.log(ret)
//   }
// })

//按条件查询 返回一个包含所有符合条件的对象的数组
// User.find({username:'TOM'},function (err,ret) {
//   if(err){
//     console.log('查询失败')
//   }else{
//     console.log('查询结果：')
//     console.log(ret)
//   }
// })
//  返回符合条件的第一个对象 没有为null
// User.findOne({username:'Admin'},function (err,ret) {
//   if(err){
//     console.log('查询失败')
//   }else{
//     console.log('查询结果：')
//     console.log(ret)
//   }
// })

/**
 * 删除
 */
// User.remove({username:"Andy"},function (err,ret) {
//   if(err){
//     console.log('删除失败')
//   }else{
//     console.log('删除成功')
//     console.log(ret)
//   }
// })

/**
 * 更新
 */
//更据id更新
User.findByIdAndUpdate("5d766f50e8f0785b4c6335e9",{
  phone:"123456789"
},function (err,ret) {
  if(err){
    console.log('更新失败')
  }else{
    console.log('更新成功')
  }
})
