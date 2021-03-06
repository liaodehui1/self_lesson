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
2. v-for：列表渲染也支持用of来代替in，除数组外也可以遍历对象属性，还可以迭代整数
## 数组更新
+ 数组变化时，不会新生成DOM元素，不会更新不变项
+ 通过索引修改数组某一项不会引发视图更新
```js
Vue.set( target, propertyName/index, value )
vm.$set( target, propertyName/index, value )
```
## 表单与v-model
1. radio
+ 原生 name分组
+ vue :checked 实现选择
+ vue v-model+value实现互斥单选
+ v-model="picked" value为picked的值的项将被选中，选中的项的值将会是picked的值
2. checkbox
+ 原生 name分组
+ vue v-model+value实现多选
+ v-model="checked" checked为数组 数组内的值将会被选中，勾选将会将值push进数组
3. select
+ v-model+value/text 实现单选 类似radio单选 优先匹配value
+ mutiple+v-model+value/text 实现多选 类似checkbox多选
## 修饰符
1. .lazy
+ v-model 默认使用input事件同步数据
+ .lazy将延迟到change事件（失去焦点/enter）同步数据
2. .Number
+ 输入的数字类型其实为字符类型
+ .Number可以将输入转换为 Number 类型
3. .trim
+ 去除输入的首位空格
## 使用props传递数据
+ 父组件使用短横分隔命名时，子组件props使用驼峰式命名
+ 父组件直接传递数字、布尔值、数组、对象，而且不使用v-bind，传递的仅仅是字符串
## 非父子组件间的通信
1. Bus总线 一个vue实例作为中介
2. 父链 $parent和$children  
$parent 访问父组件实例  
$children 访问所有子组件  
3. 子组件索引 $refs
在mounted时才能使用 $nextTick
引用普通元素或引用子组件实例
## slot用法
+ 具名slot  
父组件 slot="slotName"  
子组件 <slot name="slotName">  
# 组件高级用法
## 递归组件
+ 为组件设置name,在组件template里面可以调用自身，添加限制条件结束递归
+ 使用级联选择器和树形选择器
## 内联模板
+ 为子组件添加inline-template,子组件内的内容将作为模板插入父组件而不是slot
+ 同时存在inline-template和slot时，内容属于inline-template
+ 子组件和父组件都提供数据时，优先使用子组件数据
## 动态组件
+ 使用<component :is="name">实现动态组件
+ component和v-if类似 组件显示到隐藏 实例创建到销毁
+ 每次name改变将挂载指定组件
## 异步组件
+ 从服务器下载的组件定义
## X-template定义组件模板
+ 在＜script> 标签里使用 text/x-template 类型，井且指定一个 id， 将这个 id 赋给组件的 template
## 手动挂载实例
+ 挂载到el 组件模板覆盖html中$el元素及内容