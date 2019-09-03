/**
 *  router.js 路由模块
 * 职责:
 *  处理路由
 *  根据不同请求方式和请求路径设置具体函数
 * 模块职责要单一 
 * 可维护性 提升开发效率
 */
const fs=require('fs')
const express=require('express')
const student=require('./student')
// express提供了一个更好的方式
//专门用来包装路由
// 1. 创建一个路由容器
const router=express.Router()

// 2. 把路由都挂载到路由容器中
router.get('/student',function(req,res){
    student.find(function(err,data){
        if(err){
            res.status(500).send('Server error')
        }else{
            res.render('index.html',{
                fruits:[
                    '苹果',
                    '香蕉',
                    '核桃'
                ],
                students:data
            })
        }
    })    
})
router.get('/student/new',function(req,res){
    res.render('new.html')
})
router.post('/student/new',function(req,res){
    // console.log(req.body)

    student.save(req.body,function(err){
        if(err){
            return res.status(500).send('Server error')
        }else{
            res.redirect('/student')
        }
    })
})
router.get('/student/edit',function(req,res){
    student.findById(req.query.id,function(err,data){
        if(err){
            return res.status(500).send('Server error')
        }else{
            // console.log(data)
            res.render('edit.html',{
                student:data
            })
        }
    })

})
router.post('/student/edit',function(req,res){
    // console.log(req.body)
    student.updateById(req.body,function(err){
        if(err){
            return res.status(500).send('Server error')
        }else{
            res.redirect('/student')
        }
    })
})
router.get('/student/delete',function(req,res){
    student.deleteById(req.query.id,function(err){
        if(err){
            return res.status(500).send('Server error')
        }else[
            res.redirect('/student')
        ]
    })
})
//3. 导出
module.exports=router

// 不提倡
// module.exports=function(app){
//     app.get('/',function(req,res){
//         //fs.readFile的第二个参数将二进制转为字符串
//         fs.readFile('./db.json','utf-8',function(err,data){
//             if(err){
//                 return res.status(500).send('Server error')
//             }else{
//                 //将字符串转为json
//                 var students=JSON.parse(data).students
//                 res.render('index.html',{
//                     fruits:[
//                         '苹果',
//                         '香蕉',
//                         '核桃'
//                     ],
//                     students:students
//                 })
//             }
//         })
//     })
// }