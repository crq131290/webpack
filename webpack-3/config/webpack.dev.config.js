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
  watch:true,//文件发生改动，自动产出build.js
  // 声明模块
  // 包含各个loader
  module:{
    loaders:[//webpack 后面版本可以叫做rules
      {
        test:/\.css$/,
        loader:'style-loader!css-loader',//css-loader 解析css，style-loader插入代码，！分隔
      },
      {
        test:/\.(jpg|png|gif|svg)$/,
        loader:'url-loader',
        options:{
          limit:1000
        }
      },
      {
        test:/\.less$/,
        loader:'style-loader!css-loader!less-loader'
      }
    ]
  },
  plugins:[
    // 插件执行的顺序与元素索引有关
    new HtmlWebpackPlugin({//html文件搬家，将index.html 移至输出目录 dist目录下
      // template:path.resolve('./index.html')//'./index.html',//参照物  这里 ./ 指的是项目根目录
      template:'./index.html',//参照物  这里 ./ 指的是项目根目录
    })
  ]
}