var NewsController = require('../controllers/news.server.controller')

module.exports = function (app) {
  app.route('/news')
    .get(NewsController.list)
    .post(NewsController.create)
  
  // 顺序无关 先执行
  app.param('nid',NewsController.getById)

  // :nid 表示新闻id restful
  app.route('/news/:nid')
    .get(NewsController.get)

}