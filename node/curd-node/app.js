const express=require('express')
const fs=require('fs')
const app=express()

app.engine('html',require('express-art-template'))
app.use('/node_modules/',express.static('../node_modules/'))
app.use('/public/',express.static('./public/'))

app.get('/',function(req,res){
    //fs.readFile的第二个参数将二进制转为字符串
    fs.readFile('./db.json','utf-8',function(err,data){
        if(err){
            return res.status(500).send('Server error')
        }else{
            //将字符串转为json
            var students=JSON.parse(data).students
            res.render('index.html',{
                fruits:[
                    '苹果',
                    '香蕉',
                    '核桃'
                ],
                students:students
            })
        }
    })
})

app.listen(8080,function(){
    console.log('running...')
})