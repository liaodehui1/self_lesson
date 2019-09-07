## css滚动指示器
1. 设置一个特定元素用来实现指示器
    + 不在body上设置 因为会影响页面内容和body背景图
2. 元素绝对定位脱离文档流+z-index:1实现层叠上下文
3. 背景颜色从左下角 to right top
4. 背景大小 宽100% 高100% - 100vh + 5px **background-size要在background后面才有效**
5. mix-blend-mode使元素内容(::after)与父级元素(body)背景混合 darken变暗
6. ::after 上部留出5px显示指示器
7. ::after 背景颜色设为最浅的白色