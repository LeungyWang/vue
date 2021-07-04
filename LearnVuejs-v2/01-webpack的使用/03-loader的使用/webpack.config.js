const path = require('path')

module.exports = {
    entry: './src/main.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
              test: /\.css$/i,
              // css-loader只负责将css样式加载
              // style-loader负责将样式添加到DOM中
              // 使用多个loader时，从又向左
              use: ["style-loader","css-loader"],
            },
            {
                test: /\.less$/i,
                loader: [
                  // create style nodes from JS strings
                  "style-loader",
                  // translate CSS into CommonJS
                  "css-loader",
                  // compiles Less to CSS
                  "less-loader",
                ],
              },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      // 当加载的图片小于limit时，会将图片编译成base64字符串的形式，大于时
                      // 当加载的图片大于limit时，需要使用file-loader模块进行加载
                      limit: 8192,
                      name: 'img/[name].[hash:8].[ext]'
                    },
                  },
                ],
              },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['es2015']
                    }
                }
            }
          ],
    }
}