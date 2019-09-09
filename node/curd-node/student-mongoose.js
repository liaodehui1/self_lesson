const mongoose = require('mongoose')
var Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/itcast');
var StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: Number,
    enum: [0, 1],
    default: 0
  },
  age: {
    type: Number
  },
  hobby: {
    type: String
  }
})

var Student = mongoose.model('Student', StudentSchema)

/**
 * 增加学生
 */
exports.save = function (student, callback) {
  var stu=new Student(student)
  stu.save(function (err, ret) {
    if (err) {
      return callback(err)
    } else {
      callback(null)
    }
  })
}
/**
 * 根据id更新
 */
exports.updateById = function (student, callback) {
  //student中只有id没有_id 没有的属性不更新
  //换为_id
  Student.updateOne({_id:student._id},student,function (err,ret) {
    if (err) {
      return callback(err)
    } else {
      callback(null)
    }
  })
  // Student.findByIdAndUpdate(student._id, student, function (err, ret) {
  //   if (err) {
  //     return callback(err)
  //   } else {
  //     callback(null)
  //   }
  // })
}
/**
 * 根据id删除学生
 */
exports.deleteById=function(id,callback){
  Student.deleteOne({_id:id},function (err,ret) {
    if (err) {
      return callback(err)
    } else {
      callback(null)
    }
  })
  // Student.findByIdAndDelete(id,function (err,ret) {
  //   if (err) {
  //     return callback(err)
  //   } else {
  //     callback(null)
  //   }
  // })
}
/**
 * 查询所有学生
 */
exports.find = function (callback) {
  Student.find(function (err, students) {
    if (err) {
      return callback(err)
    } else {
      // console.log(students)
      callback(null, students)
    }
  })
}
/**
 * 根据id查找
 */
exports.findById = function (id, callback) {
  Student.findById(id, function (err, student) {
    if (err) {
      return callback(err)
    } else {
      callback(null, student)
    }
  })
}
