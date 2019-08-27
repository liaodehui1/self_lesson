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
+ 加载模块的相对路径必须./
+ 用来加载模块并执行模块代码
+ 能拿到一个模块导出的接口对象(exports)
### exports
+ Node采用CommonJS模块规范
+ Node为每个模块提供了一个exports变量(var exports=module.exoprts)
+ 将要暴露的成员挂载到exports对象上
+ 与export有何不同?
    - export是ES6中用来导出模块 导入import
    - export 命名变量=变量值 用作命名导出 =>import {} from ''
    - export defalut 变量 只能有一个export default 不需要{}
## Node中使用模板引擎
使用户界面与业务数据（内容）分离
## art-template
+ 安装 npm i art-template -S
+ 模板引擎使用
    - 浏览器 template('script 标签 id',{对象})
    - node template.rend(字符串内容,{对象})
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
2. 设置响应头的'Location'为重定向路径