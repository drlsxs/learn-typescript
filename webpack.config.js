//引入包

const path = require("path");

const htmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");



//webpack中的配置信息
module.exports = {

  mode: "production",

  //指定入口文件
  entry: "./src/index.ts",

  //指定打包文件所在的位置
  output: {
    //指定打包文件的目录
    path: path.resolve(__dirname, "dist"),
    //打包后的文件
    filename: "bundle.js",

    //告示webpack不使用箭头函数
    environment: {
      arrowFunction: false,
    }


  },

  //指定webpack打包时使用的模块
  module: {
    //指定要加载的规则
    rules: [
      {
        //test指定的是规则生效的文件后缀
        test: /\.ts$/,
        //要使用的loader
        use: [
          //配置babel
          {
            //指定加载器
            loader: "babel-loader",
            //设置babel
            options: {
              //设置预定义的环境
              presets: [
                [
                  //指定环境插件
                  "@babel/preset-env",
                  //配置信息
                  {
                    //要兼容的目标浏览器
                    targets: {
                      "chrome": "88",
                      "ie": "11",
                    },
                    //指定corejs版本
                    "corejs": "3",
                    //使用corejs的方式 ”usage“ 表示按需加载
                    "useBuiltIns": "usage",
                  }
                ]
              ],

            }

          },
          "ts-loader",
        ],
        //要排除的文件
        exclude: /node-modules/
      }
    ]
  },

  //配置webpack插件
  plugins: [
    new htmlWebpackPlugin({
      // title: "这是一个自定义的title",
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin()
  ],


  //用来设置引用的模块
  resolve: {
    extensions: ['.ts', '.js'],

  }

};







