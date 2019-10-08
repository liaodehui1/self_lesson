## MVVM模式
+ MVVM：（Model-View-ViewModel）
+ MVVM实现了数据驱动视图，无需关心DOM操作
+ MVVM实现机理是defineProperty/proxy
## 传统前端开发模式
+ jQuery + RequireJS ( SeaJS ) + artTemplate (doT) +Gulp (Grunt)
+ RequireJS与node.js中的require
```
requireJS浏览器加载
node中的require -> CommonJS规范
浏览器无法运行node.js
```
## Vue生命周期

| 周期名称 | 描述 | data | $el |
| --- | --- | --- | --- |
| beforeCreate | Vue实例创建之前 | undefined | undefined |
| created | 实例创建完成，开始监测data | 可获取 | undefined |
| beforeMount | 会调用render函数，数据和模板生成了html,但未挂载到el上 | 可获取 | 虚拟DOM |
| mounted | 挂载完成，带有数据的模板挂载到了指定的DOM对象上 | 可获取 | 真实DOM |
| beforeUpdate | 数据更新之前 | oldData | 真实DOM |
| updated | 数据和组件DOM更新完成 | newData | 真实DOM |
| beforeDestrioy  | 实例销毁之前，清除定时器和监听DOM事件 | 可获取 | 真实DOM |
| destroyed | 实例销毁之后 | undefined | undefined |
## 插值
+ v-html：将数据以html插入，不被解释编译
+ v-pre：显示{{}}标签，他和他的子元素不会被编译
## 过滤器——文本格式化
+ filters
+ {{data | method}}
+ 过滤器可以串联或接收参数
## 计算属性
+ 计算属性可以依赖其他计算属性
+ 可以依赖其他实例的数据
+ {{method()}}与{{计算属性}}
  * 计算属性基于依赖缓存，依赖需是响应式
## 基本指令
1. v-clock：解决初始化慢导致页面闪动