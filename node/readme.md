# Node.js
## node是什么
+ node是JavaScript运行时环境
+ node构建与Chrome的V8引擎之上
+ node能像浏览器一样解析和执行JS代码
+ node**没有BOM和DOM**，只有Ecmascript JavaScript基本语言部分
+ 事件驱动、非阻塞I/O模型(异步)
+ node.js为JavaScript提供了一些服务器级别的API
    * 文件操作的能力
    * http服务的能力
## node核心模块
1. 文件操作-fs模块系统
2. http服务构建-http模块系统
3. 路径操作-path模块系统
4. 操作系统信息-os模块系统
## node模块系统
node中没有全局作用域,只有模块作用域
### 模块种类
1. 核心模块(fs,http...)
2. 自定义模块
3. 第三方模块
### require
+ 用来执行模块代码并加载导出模块
+ 能拿到一个模块导出的接口对象(exports)
### 模块加载机制
+ 加载规则
    - 优先从缓存加载  
        加载过的模块不会再次加载执行,为了取到模块的导出对象  
    - 从当前目录一级一级往外查找
    - 加载自定义模块的相对路径必须有 ./ ../等
    - 加载第三方模块
        * 找到node_modules目录下的模块名目录
        * 找到模块名目录下的package.json文件
        * 找到文件内的main属性
        * 根据main属性值找到模块文件 执行加载  
            main属性值没有或package.json文件没有 默认加载index.js  
+ 多个子目录需要node_modules =>项目根目录中存放node_modules
### exports
+ Node采用CommonJS模块规范
+ Node为每个模块提供了一个exports变量(var exports=module.exoprts)
+ 将要暴露的成员挂载到exports对象上
+ 如果要直接导出模块中的某个成员 导出单个成员  
    - module.exports=成员
+ 与export有何不同?
    - export是ES6中用来导出模块 导入import
    - export 命名变量=变量值 用作命名导出 =>import {} from ''
    - export defalut 变量 只能有一个export default 不需要{}
## Node中使用模板引擎
使用户界面与业务数据（内容）分离
### art-template
+ 安装 npm i art-template -S
+ 模板引擎使用
    - 浏览器 template('script 标签 id',{对象})
    - node template.render(字符串内容,{对象})

# npm
## package.json
+ 建议每个项目根目录下建立一个package.json => npm init
+ 如果node_modules被删除,没关系,npm install 会重新下载找回
+ 建议每次安装包时加上'--save' 保存依赖项信息
## package-lock.json
+ 用于锁定版本
+ 当package-lock.json和package.json中包版本相同时 'npm i'不会安装最新版本
## npm常用命令
1. npm init
    + npm init -y 快速生成
2. npm install
    + 一次性把dependencies
    + npm i
3. npm install 包名
    + 只下载
4. npm install --save 包名
    + 下载并保存依赖项(package.json文件中的dependencies选项)
    + npm i -S 包名
5. npm uninstall 包名
    + 只删除 如果有依赖项仍然保存
    + npm un 包名
6. npm uninstall --save 包名
    + 删除的同时也删除依赖项
7. npm 命令 --help
    + 如果忘记命令简写,可以使用
## npm被墙问题
+ 安装 cnpm
    - npm install --global cnpm
+ 不想安装cnpm又想使用淘宝的服务器下载
    - npm install 包名 --registry=http://registry.npm.taobao.org
    - 每次按照上面下载会很麻烦 把这个选项加入配置文件中
        * npm config set registry http://registry.npm.taobao.org

# express
## 介绍
+ 开放资源,目录
    - `app.use(url,express.static('相对路径'))`
    - `app.use('/public/',express.static('./public/'))`
+ 获取查询字符串参数
    - req.query //get
## 路由处理
### 步骤
1. 建立router.js模块专门处理路由
2. express提供了一个更好的方式专门用来包装路由 `const router=express.Router()`
3. 根据不同请求方式处理请求
    + router.get 路由处理以GET方式的请求
    + router.post 路由处理以POST方式的请求
4. 导出router `module.exports=router`
5. app.js 作为入口
    + 加载路由模块
    + 挂载路由容器 `app.use(router)`
## express中使用art-template模板引擎
+ 安装
    - npm install --save art-template express-art-template
+ 配置
    - app.engine('渲染文件后缀',require('express-art-template'))
+ 修改渲染文件所在路径
    - 默认存放在views目录下
    - 修改 => app.set('views','渲染文件所在路径')
+ 路由处理中渲染
    - res.render('index.art') views下的index.art
    - res.render('index.html') views下的index.html
    - res.render('admin/index.html') views下的admin目录下的index.html
## express中使用body-parser插件
+ express提供的req.query只能获取到get请求的参数并返回对象
+ 处理post请求
    - 安装body-parser npm i -S body-parser
    - 引入模块 `const bodyParser = require('body-parser')`
    - 配置
        ```js
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())
        ```
    - 获取post请求参数 req.body

# web服务
## ip与端口号
+ ip地址定位计算机 req.scoket.remoteAddress
+ 端口号定位具体的应用程序 req.scoket.remotePort
+ 端口号0-65536 不要使用一些默认端口号(http服务80)
## Content-Type
+ 服务端默认发送的数据编码是utf-8,而客户端默认编码是操作系统的编码(gbk)
+ 告诉客户端要使用的编码 res.setHeader('Content-Type','text/plain,charset=utf-8')
    - text/plain 返回普通文本
    - text/html 返回html文本
    - [常用对照](http://tool.oschina.net/commons)
## 客户端渲染与服务端渲染
1. 客户端渲染
+ 客户端渲染是指通过异步请求数据进行页面渲染
+ 一般商品评论使用的是客户端渲染 有利于用户体验 比客户端渲染更快速
2. 服务端渲染
+ 服务端渲染是指直接在返回页面之前在服务端做好页面渲染,返回完整的页面
+ 一般商品列表使用的是服务端渲染 有利于SEO搜索 爬虫
## 静态资源加载
+ 一般使用一个目录存放开放资源  
    通过判断请求路径 url.indexOf('/public/')===0  
    把请求路径当作文件路径读取资源  
+ url中的'/'表示的是根目录 浏览器请求时会把127.0.0.1:8080拼上
## 重定向
1. 设置响应状态码为302 statusCode
    - 301 永久重定向 下次访问直接重定向
    - 302 临时重定向 下次访问还是先访问再重定向
2. 设置响应头的'Location'为重定向路径

# MongoDB
## 关系型数据库和非关系型数据库
1. 关系型数据库
    + 所有关系型数据库需要使用sql语言来操作
    + 在操作前需要设计表结构
2. MongoDB是长得最像关系型数据库的非关系型数据库
    + 数据库 -> 数据库
    + 数据表 -> 集合(数组)
    + 表记录 -> 文档对象
## 操作
1. 安装 [ZIP安装教程](https://www.cnblogs.com/jpfss/p/11247703.html)
2. 启动服务 net start MongoDB
3. 命令行使用MongoDB -> mongo
4. 命令
    + 展示所有数据库 `show dbs`
    + 切换数据库，没有新建  `use 数据库名`
    + 显示当前数据库 `db`
    + 创建集合 db.createCollection('集合名称')
    + 插入文档 db.集合名.insert(JSON对象)
    + 查找表内所有文档 db.集合名.find()
    + 查找表 show collections
## mongoose
1. 安装 npm i mongoose 
2. 操作
    + 增加 admin.save
    + 查询
        - 查询所有 User.find
        - 按条件查询所有 User.find({username:'Admin'},callback) 没有为[]
        - 按条件查询单个 User.findOne({username:'Admin'},callback) 没有为null
    + 删除
        - 删除所有 User.remove
        - 根据条件删除一个 removeOne(condition,callback)
        - 按条件删除所有 User.remove({username:'Admin'},callback)
    + 修改
        - 根据条件修改一个 updateOne(condition,doc,callback)
        - 根据id更新 User.findByIdAndUpdate
            * mongodb中有id和_id id的值为_id的值去掉引号后的值
# 总结
1. 不写;结尾?
    + 不写时=>以'(','[','`'开头,前面加上;
2. jQuery的each和原生js的forEach的区别?
    + 原生js的forEach ES5提供的 不兼容IE8
    + jQuery的each
        - jQuery2 以下的版本兼容IE8 
        - 他的each主要用来遍历jQuery获取的元素对象数组(伪数组) $('div')
        - 可以作为低版本浏览器中forEach的替代品
        - jQuery获取的元素对象数组不能用forEach遍历,如果需要必须转为数组
            * `[].slice.call($('div'))`
