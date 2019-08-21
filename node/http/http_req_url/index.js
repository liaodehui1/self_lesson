const http=require('http')

var server=http.createServer()

server.on('request',function(req,res){
    console.log('收到客户端请求')

    //简化 省略write
    // res.end('hello world')

    //根据不同url返回不同内容
    //req.url获取端口号后面的路径
    
    var url=req.url

    if(url==='/products'){
        var products=[
            {
                name:'苹果',
                price:100
            },
            {
                name:'香蕉',
                price:10
            }
        ]

        //响应内容只能是二进制或字符串
        //JSON.stringify将对象转为字符串
        res.end(JSON.stringify(products))

        //JSON.parse将json字符串转为json对象
        //以下字符串错误
        // let b="[{'a':1}]"
        // let b="[{a:1}]"
        //对象属性必须要使用"
        // let b='[{"a":1}]'
    }
})

//默认端口号80
server.listen(3000,function(){
    console.log('服务器启动了')
})