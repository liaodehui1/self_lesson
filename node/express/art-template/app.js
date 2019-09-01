const express=require('express')
const app=express()

// 第一个参数表示渲染文件的后缀 .art
// express-art-template用来把art-template整合到express上
// 虽然art-template不需要加载 但也需要安装
// 因为express-art-template依赖art-template
// app.engine('art', require('express-art-template'))

// 以.html结尾
app.engine('html',require('express-art-template'))

//修改渲染文件默认路径 默认views
app.set('views','./resources/')

// express为response对象提供了render
// render默认不可使用 当配置了模板引擎就可以使用
// res.render('html模板名',{模板数据})
// 第一个参数不能写路径,默认会去当前目录下的views目录下查找
// app.get('/',function(req,res){
//     res.render('index.art')//渲染views下的index.art文件
// })

//渲染views下的index.html文件
// app.get('/',function(req,res){
//     res.render('index.html')
// })

//渲染views下的admin目录下的index.html
// app.get('/',function(req,res){
//     res.render('admin/index.html')
// })

//渲染/resources下的index.html文件
app.get('/',function(req,res){
    res.render('index.html',{
        title:"resources"
    })
})

app.listen(8080,function(){
    console.log('running...')
})