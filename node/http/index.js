//使用Node可以构建一个web服务器

//1. 加载http核心模块
const http=require('http')

//2. 创建一个web服务器
//返回一个server实例
var server=http.createServer()

//3. 注册request请求事件
//当客户端请求过来，就会自动触发服务器的request事件，然后执行回调函数
//request 请求事件处理函数需要两个参数
//  request 请求对象
//  请求对象用来获取客户端的请求信息
//  response 响应对象
//  响应对象用于向客户端发送响应消息
server.on('request',function(request,response){
    console.log('收到客户端请求')
    console.log('请求路径:'+request.url)

    //response.write()给客户端发送响应数据
    // write可以使用多次 最后需要使用end结束响应
    response.write('hello')
    response.write('Node.js')
    //告诉客户端响应完毕
    response.end()
})

//4. 绑定端口号：启动服务器
server.listen(3000,function(){
    console.log('服务器启动了')
})