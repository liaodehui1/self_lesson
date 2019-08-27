const http=require('http')
const fs=require('fs')
const template=require('art-template')
const url=require('url')

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

http
    .createServer(function(req,res){
        //解析url返回对象 默认query参数为字符串 true=>query为对象
        var parseObj=url.parse(req.url,true)
        // console.log(parseObj)
        var pathname=parseObj.pathname//端口号之后?之前的字符串

        if(pathname==='/'){
            fs.readFile('./views/index.html',function(err,data){
                if(err){
                    return res.end('404 Not Found.')
                }else{
                    var ret=template.render(data.toString(),{
                        comments:comments
                    })
                    res.end(ret)
                }
            })
        }else if(pathname==='/comment'){
            // console.log('发表评论',parseObj.query)
            var comment=parseObj.query

            var date=new Date()
            comment.date=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            // console.log(comment.date)
            comments.unshift(comment)

            //重定向
            res.statusCode=302
            res.setHeader('Location','/')
            //每次请求需要一次响应结束
            res.end()
        }else if(pathname==='/post'){
            fs.readFile('./views/post.html',function(err,data){
                if(err){
                    return res.end('404 Not Found.')
                }
                res.end(data)
            })
        }else if(pathname.indexOf('/public/')===0){
            fs.readFile('.'+pathname,function(err,data){
                if(err){
                    return res.end('404 Not Found.')
                }
                res.end(data)
            })
        }else{
            fs.readFile('./views/err.html',function(err,data){
                if(err){
                    return res.end('404 Not Found.')
                }
                res.end(data)
            })
        }
    })
    .listen('8080',function(){
        console.log('running...')
    })