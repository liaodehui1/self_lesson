- 前期配置  
1. npm init -y  
2. cnpm i webpack webpack-cli -D  
3. 创建webpack.config.js
4. npx webpack -d 编译
5. cnpm i babel-core babel-loader@7 babel-preset-env babel-preset-react -D  
babel-core 调用babel的api进行转码的包  
babel-loader 执行转义的核心包  
babel-preset-env 根据配置的目标运行环境自动启用需要的babel插件  
babel-preset-react 用于转义React的jsx语法
6. 配置loader
7. 创建.babelrc
- React编码
1. cnpm i react react-dom -S
2. package配置：  
```js
"dev": "webpack -d --watch" // webpack监听模式
"build": "webpack -p"
```
- Hello World进阶  
Webpack 模块热替换（HMR）：项目代码被修改，webpack能实时重新打包，并将新的包同步到浏览器  
早期HMR借助EventSource（单向通信），后来使用websocket（基于TCP的全双工通信协议）  
1. cnpm i webpack-dev-server -D
2. cnpm i html-webpack-plugin clean-webpack-plugin -D  
html-webpack-plugin: 生成html，将js加入
clean-webpack-plugin: 先删除build或dist目录文件，生成新的文件
3. npm run build 压缩打包生成dist