const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry:{
    'main':'./main.js'
  },
  output:{
    path:path.resolve('./dist'),
    filename:'build.js'
  },
  devServer:{
    hot: true,//热启动
    port:8081,//端口号
    open:true,//自动打开浏览器
  },
  module:{
    loaders:[
      {
        test:/\.less$/,
        loader:'style-loader!css-loader!less-loader'
      },
      {
        test:/\.(jpg|svg|png|gif)$/,
        loader:'url-loader',
        options:{
          limit:200
        }
      },
      {
        test:/\.js$/,
        loader:'babel-loader',//babel-core babel-loader babel-preset-env babel-plugin-transform-runtime 
        exclude:/node_modules/,
        options:{
          presets:['env'],//处理关键字
          plugins:['transform-runtime']//处理函数
        }
      },
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template:'./index.html'
    })
  ]
}