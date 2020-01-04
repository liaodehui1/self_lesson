import express from 'express';
import render from './render';
import { matchRoutes } from 'react-router-config';
import { getServerStore } from '../store/index';
import routes from '../routers';

const app = new express();

// 前端打包完的 静态资源
app.use(express.static('public'));

app.get('*', (req, res) => {
  // console.log('>>>', req.path)
  const store = getServerStore()
  const matchedRoutes = matchRoutes(routes, req.path)
  const promises = []
  matchedRoutes.forEach(mRouter => {
    if(mRouter.route.loadData) {
      promises.push(mRouter.route.loadData(store))
    }
  })
  Promise.all(promises)
    .then(resArr => {
      const context = {}
      const html = render(req, store, context);
      if (context.NOT_FOUND) res.status(404)
      return res.send(html)
    })
    .catch(err => {
      console.log('服务端出错：', err)
    })
})

app.listen(3000, () => {
  console.log('server is running on port 3000');
})