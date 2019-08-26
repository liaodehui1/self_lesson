const http=require('http')
const fs=require('fs')
const template=require('art-template')

const server=http.createServer()

var dir='F:/lm_workspace'
server.on('request',function(req,res){
    var url=req.url
    fs.readFile('./template.html',function(err,data){
        if(err){
            return res.end('404 Not Found.')
        }
        //1. 得到目录
        //   fs.readdir
        //2. 将目录名和文件名替换到template.html
        fs.readdir(dir,function(err,files){
            if(err){
                return res.end('目录不存在')
            }

            // console.log(files)//数组
            // var content=''
            // files.forEach(item=>{
            //     content+=`
            //     <tr>
            //     <td data-value="qt_lesson/"><a class="icon dir" href="/F:/lm_workspace/qt_lesson/">${item}/</a></td>
            //     <td class="detailsColumn" data-value="0"></td>
            //     <td class="detailsColumn" data-value="1563589007">2019/7/20 上午10:16:47</td>
            //     </tr>
            //     `
            // })
            // //二进制转为字符串
            // data=data.toString()
            // data=data.replace('^_^',content)
            // console.log(data)

            
            //使用模块引擎
            var htmlstr=template.render(data.toString(),{
                files:files,
                title:dir
            })
            // console.log(htmlstr)

            //判断名字是文件还是目录
                fs.stat(`${dir}/${files[0]}`,(err,stat)=>{
            // fs.stat(`template.html`,(err,stat)=>{
                if(err){
                    return console.log(err)
                }
                // console.log(stat)
                console.log(`${dir}/${files[0]} is file? ${stat.isFile()}`)
                console.log(`${dir}/${files[0]} is directory? ${stat.isDirectory()}`)
                // console.log(`template is file? ${stat.isFile()}`)
            })

            res.end(htmlstr)
        })
    })
})

server.listen(8080,function(){
    console.log('running...')
})