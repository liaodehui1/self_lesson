# WEB案例
## 路由设计
| 路径 | 方法 | get参数 | post参数 | 是否需要登录 | 备注 |
| ---- | ---- | ---- | ---- | ---- | ----|
| / |  GET | | | | 首页 |
| /register |  GET | | | | 注册页面 |
| /register |  POST | | email、nickname、password | | 处理注册请求 |
| /login |  GET | | | | 登录页面 |
| /login |  POST | | email、password | | 处理登录请求 |
| /logout |  GET | | | | 处理退出请求 |