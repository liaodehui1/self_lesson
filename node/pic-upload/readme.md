## canvas压缩图片
1. 监听input[type='file']的onchange事件
2. 使用html5 API FileReader  
    FileReader异步读取本地文件到内存  
    FileReader.readAsDataURL() 文件base64化
3. FileReader.onload监听文件加载  
    文件加载完成 e.target.result 包含文件base64格式字符串  
    对new出的Image对象的src赋值开始加载图片  
4. Image.onload监听图片加载  
    canvas压缩  
    + 等比例压缩
    + context.drawImage 将图片画到画布上
5. 图片上传
    + canvas.toBlob(callback, mimeType, qualityArgument)  
        - 把画布转换成Blob文件(二进制)
        - mimeType 文件类型
        - qualityArgument 图片质量输出参数
    + FormData 模拟表单
    