const http = require('http')
const fs=require('fs')

const server=http.createServer()

server.on('request',function(req,res){
    var url=req.url
    
    if(url=='/home'){
        fs.readFile('./resource/index.html',function(err,data){
            if(err){
                res.setHeader('Content-Type','text/plain,charset=utf-8')
                red.end('文件读取失败')
            }else{
                res.setHeader('Content-Type','text/html,charset=utf-8')
                //data是二进制数据
                //end返回的数据可以是二进制或字符串
                res.end(data)
            }
        })
    }else if(url=='/image'){
        fs.readFile('./resource/wode.png',function(err,data){
            if(err){
                res.setHeader('Content-Type','text/plain,charset=utf-8')
                red.end('文件读取失败')
            }else{
                //图片不需要指定编码
                res.setHeader('Content-Type','image/png')
                res.end(data)
            }
        })

        //文件操作 创建可读流
        // const readStream=fs.createReadStream('./resource/wode.png')
        // readStream.pipe(res)
    }else if(url=='/'){
        res.setHeader('Content-Type','text/plain,charset=utf-8')
        res.end('首页')
    }
})

server.listen('8080',function(){
    console.log('服务器启动')
})