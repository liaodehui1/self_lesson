## 步骤
1. 安装好需要的包
    + express
    + art-template
    + body-parser
2. 模块化
    + app 程序入口
        - 加载express,创建服务器
        - 静态资源开发
        - 模板引擎和body-parser配置(一定要在挂载路由之前)
        - 加载路由模块,路由挂载
    + 路由模块
        - 加载express模块,创建路由对象
        - 路由处理
            * 需要分离操作部分
            * 导入操作数据模块
            * 通过调用模块对象中的API
        - 导出路由对象
    + 操作数据模块
        - 加载fs模块
        - exports暴露API接口
## 用到的函数
1. parseInt(string) 将字符串转为整数
2. find 根据条件查找 返回找到的项
3. findIndex 根据条件查找下标 返回下标
4. splice 数组删除 (起始点,个数) 返回删除项组成的数组