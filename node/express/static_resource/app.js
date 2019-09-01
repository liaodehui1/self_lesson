const express=require('express')
const app=express()

//请求路径需要以/public/开头 127.0.0.1:8080/public/index.html
// app.use('/public/',express.static('./public/'))

//请求路径 127.0.0.1:8080/index.html
app.use(express.static('./public/'))

app.listen(8080,function(){
    console.log('running...')
})