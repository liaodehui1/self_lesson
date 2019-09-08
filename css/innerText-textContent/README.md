## innerText和textContent的区别
1. innerText会考虑css样式，而textContent只是读取元素内部文本
2. innerText无法获取隐藏元素，而textContent可以
3. innerText 需要回流 降低性能
4. IE浏览器上两者无差别

## 引出其他
1. span本为内联元素 加上position:absolute使其display变为block
2. span变为block但‘...’没换行 因为white-space默认不为pre/pre-wrap
  + white-space
    - normal 将多空格(换行)缩为一个空格
    - pre 保留所有空格 换行只认`</br>`
    - pre-wrap 保留所有空格 源码换行/`</br>`
    - nowrap 不换行
3. display:none样式和hidden属性功能相同 -> 都不占位 而visibility:hidden占位
4. 回流和重绘？
  + 回流是重新构建元素 显示隐藏元素/改变布局
  + 重绘是元素样式风格而没影响布局 背景颜色
  + 回流必将重绘 重绘不一定回流
5. after/before和append/prepend和appendTo/prependTo和insertAfter/insertBefore
  + after 将元素添加到**当前**元素之后 同级
  + before 。。。之前 同级
  + append 添加元素作为**子元素**放到最后 父子
  + prepend 。。。放到最前 父子
  + appendTo 添加到父级子元素最后 效果相同 父子
  + prependTo ...
  + insertAfter 将元素放到指定元素之后 同级
  + insertBefore ...之前 同级
