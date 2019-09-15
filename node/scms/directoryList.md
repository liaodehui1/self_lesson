```
|-- scms
    |-- app.js  // 创建app实例
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- app
    |   |-- controllers // 路由处理handle
    |   |   |-- news.server.controller.js
    |   |-- models  // 模型
    |   |   |-- news.server.model.js
    |   |-- routers // 路由
    |       |-- news.server.routers.js
    |-- bin
    |   |-- www // 入口文件
    |-- config
        |-- config.js   // 根据不同环境读取不同配置文件
        |-- express.js  // express基本配置
        |-- mongoose.js // 数据库连接
        |-- env
            |-- development.js // 开发环境配置文件

```