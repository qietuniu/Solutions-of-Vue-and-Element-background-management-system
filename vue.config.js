// https://cli.vuejs.org/zh/config/#pluginoptions
'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = process.env.port || 9494

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/styles/variables.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
