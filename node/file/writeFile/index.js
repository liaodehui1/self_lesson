const fs = require('fs')

//第一个参数是要写入文件的路径
//第二个参数是文件内容
//第三个参数是回调函数
fs.writeFile('../data/你好.md','大家好，我是Node.js',function(err){
    if(err){
        console.log(err)
    }else{
        console.log('写入文件成功')
    }
})