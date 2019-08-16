## 进程与线程
### JS异步实现机制——Event Loop事件轮询
+ 线程可以包含多个任务 任务分为同步任务(同步代码)和异步任务(异步代码)
+ 同步代码放入主执行栈  
    [promiseClick3(), promiseClick2(), promiseClick1()]栈内顺序：  
        promiseClick3  
        promiseClick2  
        promiseClick1  
        栈底  
+ 异步代码
    - 放入异步队列
        1. 没有延时，直接放入
        2. 有延时，等延时时间到了放入
        3. 由ajax请求，等加载完成放入
    - 同步代码执行完开始轮询执行异步队列内的函数
## Promise.all JS代码执行顺序
1. 执行Promise.all函数，promiseClick函数依次入栈
2. 执行promiseClick3  
    输出promiseClick3 -> 输出Promise3 ->开始计时(8s)->返回Promise对象给p->  
    输出p(状态为pending(进行中))->返回p  
3. 执行promiseClick2  
    同promiseClick3执行顺序  
4. 执行promiseClick1  
    同promiseClick3执行顺序  
5. all函数执行完成，返回一个Promise对象给p
6. 开始计时(3s) 无需等主执行栈空才开始
7. 计算for循环  
    计算途中3s到达，将3s的回调函数加入异步队列，但不执行  
    7s到达，。。。  
    8s到达，。。。  
    9s到达，。。。  
8. 循环完毕(花费21s)，立即轮询异步队列内函数  
    执行3s回调函数 输出p(状态为pending)  
    依次执行7s、8s、9s回调函数 同时resolve或reject后修改p对象状态和值  
    789回调函数执行完后修改全局p的状态为所有函数返回的Promise对象状态的与  
9. 全局p有了状态，根据执行then或catch
## Promise.race 区别
1. 当promiseClick1执行完后，主执行栈为空
2. 当从遇到setTimeout(2s)计时到达2s时，执行回调函数
3. 执行完后，修改promiseClick1的p对象的状态和值
4. 修改全局p对象的状态和值
5. p有了状态，先执行then/catch而不是先promiseClick2内setTimeout的回调函数
6. 执行完then/catch函数,再继续执行轮询未执行的回调函数
## 微任务和宏任务
异步任务又分为微任务和宏任务，微任务先于宏任务执行  
1. 微任务
    + process.nextTick(Node独有)
    + Promise的then方法
    + Object.observe
    + MutationObserver
2. 宏任务
    + setTimeout
    + setInterval
    + setImmediate(Node独有）
    + requestAnimationFarme(浏览器独有）
    + I/O
    + UI rendering(浏览器独有）

所以先执行then/catch而不是先promiseClick2内setTimeout的回调函数  