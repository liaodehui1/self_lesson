const request = require('request')
const api = require('../api/public')
const options = require('../api/options')

// 头部搜索
let suggest = function(qs){
  return new Promise((resolve,reject) => {
    request.get({url:api.suggest,qs:qs,...options},(err,res,data) => {
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

//猜你喜欢
let recommendList = function(qs){
  return new Promise((resolve,reject) => {
    request.get({url:api.recommendList,qs:qs,...options},(err,res,data) => {
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

//获取客户评论
let getcomment = function(qs){
  return new Promise((resolve,reject) => {
    request.get({url:api.getcomment,qs:qs,...options},(err,res,data) => {
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

module.exports = {
  suggest,
  recommendList,
  getcomment
}