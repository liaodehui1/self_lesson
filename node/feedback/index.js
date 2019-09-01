//express+art-template
const express=require('express')
const app=express()
const bodyParser = require('body-parser')

var comments=[
    {
        name:'张三',
        comment:'今天天气真好!',
        date:'2019-08-27 17:58:12'
    },
    {
        name:'王五',
        comment:'今天天气真好!',
        date:'2019-08-27 17:58:12'
    }
]

app.engine('html',require('express-art-template'))

app.use('/public/',express.static('./public/'))

//配置body-parser中间件
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/',function(req,res){
   res.render("index.html",{
        comments:comments
   })
})

app.get('/post',function(req,res){
    res.render("post.html")
 })

 app.get('/comment',function(req,res){
    var comment=req.query //只能在get请求
    var date=new Date()
    comment.date=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    comments.unshift(comment)
    res.redirect('/')
 })

 app.post('/comment',function(req,res){
    var comment=req.body //post请求
    console.log(comment)
    var date=new Date()
    comment.date=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    comments.unshift(comment)
    res.redirect('/')
 })

app.listen(8080,function(){
    console.log('running...')
})