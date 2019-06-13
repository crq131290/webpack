//webpack配置文件，基于node
// 默认的配置文件名 webpack.config.js 
// 执行npm run dev 时就会找这个文件
const path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry:{
    // 可以有多个入口，也可以有一个，如果一个就默认从这个入口开始分析
    'main':'./src/main.js'//这里 ./ 指的是项目根目录 
  },
  // 输出
  output:{
    path:path.resolve('./dist'),//相对转绝对 node的api ./指的是项目根目录
    filename:'build.js'
  },
  // watch:true,//文件发生改动，自动产出build.js
}