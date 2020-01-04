import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import routes from '../routers';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import { getClientStore } from '../store/index';

const App = function() {
  const insertCss = (...styles) => {
    const removeCss = styles.map(style => style._insertCss())
    return () => removeCss.forEach(dispose => dispose())
  }
  const context = { insertCss }
  return (
    <StyleContext.Provider value={context}>
      <Provider store={getClientStore()}>
        <BrowserRouter>
          <div>
            { renderRoutes(routes) }
          </div>
        </BrowserRouter>
      </Provider>
    </StyleContext.Provider>
  )
}

ReactDom.hydrate(<App />, document.getElementById('app'));