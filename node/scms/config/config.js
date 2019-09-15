// 读取配置文件
// 根据不同环境读取不同配置文件
var config = null
// process.env 属性返回包含用户环境的对象
if (process && process.env && process.env.NODE_ENV) {
  config = require('./env/' + process.env.NODE_ENV + '.js')
} else {
  config = require('./env/development.js')// 默认开发环境
}
module.exports = config