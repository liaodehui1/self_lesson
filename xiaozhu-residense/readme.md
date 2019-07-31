- fadeIn和fadeOut
    1. fadeIn(time,callback) opacity从0增大到1
    2. fadeOut(time,callback) opacity从1减小到0
    3. 同时开始opacity变化
- absolute
    元素会脱离文档流，因此图片会在一行，切换时不会出现空白阶段
- 父容器设置高度等于行高实现垂直居中，子元素继承父元素行高
- background-position 为背景图片左上角在的定位
- iconfont 阿里巴巴矢量图标库
- “搜索小猪” 箭头所处span 绝对定位+top:0+right:0 浮在input上
- margin 百分比 都参照父容器width
- 清除子元素float带给父容器高度塌陷的影响 after不能为默认(行内)样式
- box-shadow+padding实现图片透明边框
- box-shadow offset-x offset-y blur-radius spread-radius color inset
    1. inset 内阴影(阴影在容器内) 默认外阴影
    2. offset-x 0 阴影在容器后 内阴影时正值左 外阴影时相反
        offset-y 内阴影时正值上 外阴影时相反
    3. blur 阴影模糊度 越大越模糊
    4. spread 阴影扩大或缩小范围
- 文字超出部分省略
    1. 单行(.room-name)
        white-space nowrap 不换行
        text-overflow ellipsis
        overflow hidden
    2. 多行(.cd-content a)
        display -webkit-box 必要属性
        text-overflow ellipsis
        word-wrap break-word 设置换行时英文单词不被分割
        -webkit-line-clamp 5 设置超出多少行显示省略号
        overflow hidden
- vertical-align middle 
    1. 解决图片和文字水平不齐
- 图片与容器底部之间有空白间隙
    1. 原因 元素默认与父级元素baseline对齐 baseline与父级元素底部有距离(font-size/line-height造成)
    1. 解决办法:vertical-align不为baseline;img为block;父级font-size/line-height=0
- hover 悬停
    1. 改变元素自身样式 .className:hover
    2. 改变子元素样式 .parentClassName:hover .childClassName
    3. 改变兄弟元素(悬停元素后面,紧贴悬停元素)的样式 .ClassName:hover+brotherClassName




