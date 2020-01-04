import React from 'react';
import App from './App';
import Home from './pages/home/Home';
import Login from './pages/login/Login'
// loadData: Home.loadData,
export default [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/',
        component: Home,
        loadData: Home.loadData,
        exact: true // 默认路由配置
      },
      {
        path: '/login',
        component: Login
      },
      {
        path: '*',
        render: ({staticContext}) => {
          if (staticContext) staticContext.NOT_FOUND = true
          return <div>404 not found</div>
        }
      }
    ]
  }
]