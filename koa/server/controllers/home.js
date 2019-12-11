const request = require('request')
const api = require('../api/home')
const options = require('../api/options')

// 有格调/狠优惠
let getScenesList = function(qs){
  return new Promise((resolve,reject) => {
    request.get({url:api.getScenesList,qs:qs},(err,res,data) => {
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

// 正在热映
let getHotFilms = function(qs){
  return new Promise((resolve,reject) => {
    request.get({url:api.getHotFilms,qs:qs},(err,res,data) => {
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}
// 即将上映
let getComingFilms = function(qs){
  return new Promise((resolve,reject) => {
    request.get({url:api.getComingFilms,qs:qs},(err,res,data) => {
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

// 民宿城市
let minsuCitys = function(qs){
  return new Promise((resolve,reject) => {
    request.get({url:api.minsuCitys,qs:qs,...options},(err,res,data) => {
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}
// 民宿
let minsu = function(qs){
  return new Promise((resolve,reject) => {
    request.get({url:api.minsu,qs:qs,...options},(err,res,data) => {
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

// 猜你喜欢
let recommends = function(){
  return new Promise((resolve,reject) => {
    request.get(api.recommends,options,(err,res,data) => {
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

module.exports = {
  getScenesList,
  getHotFilms,
  getComingFilms,
  minsuCitys,
  minsu,
  recommends
}