# Vue-cli
## 安装
+ npm install -g vue-cli@2.9.6 
+ vue --version 查看版本号
## 搭建项目
1. 建立项目存放文件夹
2. 进入文件夹
3. vue init webpack 项目名
4. npm run dev 运行项目
## stylus
1. 安装 npm i stylus stylus-loader -D
2. 在App.vue之外的组件内引入stylus使用@import 引入路径不能使用@定位src,使用相对路径
3. 在App.vue或main.js引入全局styl样式(普通样式)
4. => 解决引入函数，变量
  + main.js引入styl全局文件
  + 修改build 下的 webpack.base.conf.js
    ```js
    module.exports = {
      ......
      resolve: {
        // 添加 '.styl'
        extensions: ['.js', '.vue', '.json', '.styl'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': resolve('src')
        }
      },
      module: {
        rules: [
          // 添加下面
          {
            test: /\.styl$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'stylus-loader' }],
            include: []
          },
        ]
      }
      ....
    }
    ```
  + 修改build下的utils.js文件
    ```js
    exports.cssLoaders = function(options) {
      ........... 
      var stylusOptions = {
        import: [
            // 引入 ../src/assets/stylus/mixin.styl  这个全局的styl文件
            path.join(__dirname, "../src/assets/stylus/mixin.styl")
        ],
        paths: [
            path.join(__dirname, "../src/assets/"),
            path.join(__dirname, "../")
        ]
      }

    // https://vue-loader.vuejs.org/en/configurations/extract-css.html
      return {
          css: generateLoaders(),
          postcss: generateLoaders(),
          less: generateLoaders('less'),
          sass: generateLoaders('sass', { indentedSyntax: true }),
          scss: generateLoaders('sass'),
          stylus: generateLoaders('stylus', stylusOptions),  //加上stylusOptions
          styl: generateLoaders('stylus', stylusOptions)     //加上stylusOptions
      }
    }    
    ```
