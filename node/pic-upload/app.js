var express=require('express')
const app=express()
const fs=require('fs')
const path=require('path')
const multer=require('multer')

//磁盘存储
const storage=multer.diskStorage({
    // destination:function(req,file,cb){
    //     cb(null,'img/')
    // },
    destination:'img/',
    filename:function(req,file,cb){
        //new Date() Wed Aug 28 2019 17:16:53 GMT+0800 (中国标准时间) 不可做为路径名
        cb(null,new Date().getTime()+'-'+file.originalname)
    }
})
const upload=multer({
    storage:storage
})

app.get('/',function(req,res){
    const form=fs.createReadStream(
        path.join(__dirname,'index.html')
    )
    form.pipe(res)
})
//路由
//'pic' filename.filedname
app.post('/upload',upload.single('pic'),function(req,res){
    // var file=req.file //获取文件信息
    // console.log(file)
    res.send({ret_code: '0'});
})

app.listen(3000,function(){
    console.log('running...')
})