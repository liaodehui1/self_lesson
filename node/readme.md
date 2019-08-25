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
+ 与export有何不同?
    - export是ES6中用来导出模块 导入import
    - export 命名变量=变量值 用作命名导出 =>import {} from ''
    - export defalut 变量 只能有一个export default 不需要{}
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