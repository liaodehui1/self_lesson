const fs=require('fs')
const template=require('art-template')

fs.readFile('./tpl.html',function(err,data){
    if(err){
        return  console.log('读取文件失败')
    }

    var ret=template.render(data.toString(),{
        title: 'art-template',
        name: 'art-template',
        hobbies: [
            '敲代码',
            '打游戏',
            '看电视'
        ]
    })
    console.log(ret)
})