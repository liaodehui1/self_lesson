const request = require('request')
const api = require('../api/detail')
const options = require('../api/options')

// 影院
let cateById = function(id){
  return new Promise((resolve,reject) => {
    request.get({url:api.cate + id, ...options},(err,res,data) => {
      if(err){
        reject(err)
      }else{
        // console.log(data)
        let reg = /(?<=window.AppData = ).*?(?=\,\"\$config\")/
        let res = JSON.parse(data.match(reg)[0] + '}')
        resolve(res)
      }
    })
  })
}

module.exports = {
  cateById
}