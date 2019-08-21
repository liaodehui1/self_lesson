// Node中进行文件操作必须要引入fs这个核心模块
//fs提供了所有文件操作相关的API

//1. 使用require方法加载fs核心模块
const fs = require('fs')

//2. 读取文件
//第一个参数为文件路径
//第二个参数为回调函数
fs.readFile('../data/hello.txt',function(err,data){
    // <Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 2e 6a 73 0d 0a e4 bd a0 e5 a5 bd ef bc 8c 6e 6f 64 65 2e 6a 73>
    //文件存储为二进制 读取到的文件转为了16进制
    // console.log(data)
    
    //通过toString转为认识的字符
    // console.log(data.toString())

    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
    // var str=data.toString().split('\r\n')
    // console.log(str)
})