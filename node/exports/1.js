//默认开头
// var module={
//     exports:{

//     }
// }
//每次导出成员时,module.exports.xxx=xxx,很麻烦
//定义一个变量 操作module.exports
// var exports=module.exports

function add(x,y){
    return x+y
}

exports.add1=add //module.exports.add1add
module.exports.add2=add //exports.add2=add

//以下都会断开exports和module.exports之间的联系
// module.exports=add
// exports=add

// exports=add //最后返回的是module.exports而不是exports
//默认结尾 
// return module.exports