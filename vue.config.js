const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '.',
  assetsDir: 'static',
  pages: {
    index: {
      entry: 'client/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vender', 'chunk-common', 'index']
    }
  },
  productionSourceMap: process.env.NODE_ENV !== 'production',
  configureWebpack: config => {},
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('client'))
      .set('@client', resolve('client'))
      .end()
    config.module
      .rule('jx?s')
      .include.add(/client/).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项
        return options
      })
  },
}