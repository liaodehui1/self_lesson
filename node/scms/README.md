## express项目搭建
1. npm init 配置入口文件为 bin/www
2. 创建config 目录
  + 创建env目录
    - 创建开发环境配置文件 服务器监听端口号、数据库连接
  + 创建config.js文件 根据不同环境读取env下不同配置文件
  + 创建express.js文件 导出一个函数，函数返回app实例
    - 配置插件
    - 读取路由文件
      ```js
      require('../app/routers/news.server.routers')(app)
      ```
    - 404错误处理
    - 500错误处理
  + 创建mongoose.js文件 导出一个函数，函数返回db数据库连接
3. 创建app.js 导出app实例
  + 加载express.js和mongoose.js
  + 执行mongodb()实现数据连接
  + 执行express() 获取到app实例
4. 创建bin目录
  + 创建www脚本文件
    - `#!/usr/bin/env node` 找到PATH变量->找到node路径->使用node执行文件
    - 加载app.js和配置文件config.js
    - 在配置中提供的端口开启服务 
5. 创建app目录 开始业务处理
  + 创建models目录 用于存放所有模型
    - 引入mongoose
    - 创建schema
    - 创建模型
    - 导出模型
  + 创建controllers目录 用于存放不同主题的路由处理
    - 加载模型
    - 导出handle对象 一个包含所有路由处理函数的对象
  + 创建routers目录
    - 加载controller
    - 导出一个函数 函数需要传入app实例 **restful**
