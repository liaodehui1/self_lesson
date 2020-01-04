import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import routes from '../routers';

export default (req, store, ctx) => {
  const css = new Set()
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
  const context = { insertCss }
  const App = (
    <StyleContext.Provider value={context}>
      <Provider store={store}>
        <StaticRouter location={req.path} context={ctx}>
          <div>
            {renderRoutes(routes)}
          </div>
        </StaticRouter>
      </Provider>
    </StyleContext.Provider>
  )
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <style>${[...css].join('')}</style>
  <title>Document</title>
</head>
<body>
  <div id="app">${renderToString(App)}</div>
  <script>
    window.__context__ = {state: ${JSON.stringify(store.getState())}}
  </script>
  <script src="/index.js"></script>
</body>
</html>
  `
}