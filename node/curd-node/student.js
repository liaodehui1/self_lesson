/**
 * student.js
 * 职责:
 * 专门负责操作db.json文件数据
 */
const fs=require('fs')

const dbPath='./db.json'

//获取异步操作中的数据必须使用回调函数callback
exports.find=function(callback){
    //fs.readFile的第二个参数将二进制转为字符串
    fs.readFile(dbPath,'utf-8',function(err,data){
        if(err){
            return callback(err)
        }else{
            //将字符串转为json
            var students=JSON.parse(data).students
            callback(null,students)
        }
    })
}
exports.save=function(student,callback){
     //1. 获取提交数据
    //2. 数据持久化
    // 2.1 读取文件
    //  2.2 获取json
    //  2.3 添加对象
    // 2.4 json转为字符串
    // 2.5 写入文件
    //3. 返回响应
    fs.readFile(dbPath,'utf-8',function(err,data){
        if(err){
            return callback(err)
        }else{
            let students=JSON.parse(data).students
            student.id=students[students.length-1].id+1
            students.push(student)
            // console.log(students)
            fs.writeFile(dbPath,JSON.stringify({"students":students}),function(err){
                if(err){
                    return callback(err)
                }else{
                    callback(null)
                }
            })
        }
    })
}
exports.updateById=function(student,callback){
    fs.readFile(dbPath,'utf-8',function(err,data){
        if(err){
            return callback(err)
        }else{
            //将字符串转为json
            var students=JSON.parse(data).students

            //将id改为整型,保证对象id为整型
            student.id=parseInt(student.id)
            //根据id找到学生
            //stu 浅复制
            var stu=students.find(item=>item.id===student.id)

            //循环修改
            for(let key in student){
                stu[key]=student[key]
            }

            //写入
            fs.writeFile(dbPath,JSON.stringify({"students":students}),function(err){
                if(err){
                    return callback(err)
                }else{
                    callback(null)
                }
            })
        }
    })
}
exports.deleteById=function(id,callback){
    //1. 读取文件
    //2. 根据id找到对象
    //3. 删除
    //4. 写入
    fs.readFile(dbPath,'utf-8',function(err,data){
        if(err){
            return callback(err)
        }else{
            //将字符串转为json
            var students=JSON.parse(data).students

            //findIndex 查找下标
            var deleteId=students.findIndex(item=>item.id === parseInt(id))
            //splice 删除数组项
            students.splice(deleteId,1)
            
            //写入
            fs.writeFile(dbPath,JSON.stringify({"students":students}),function(err){
                if(err){
                    return callback(err)
                }else{
                    callback(null)
                }
            })
        }
    })
}
exports.findById=function(id,callback){
    fs.readFile(dbPath,'utf-8',function(err,data){
        if(err){
            return callback(err)
        }else{
            var students=JSON.parse(data).students
            // item.id为整数 id为字符串
            var stu=students.find(item=>item.id === parseInt(id))
            console.log(students)
            callback(null,stu)
        }
    })
}