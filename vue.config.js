var merge = require('webpack-merge');

module.exports = {
  chainWebpack: config => {
  	console.log('working')
    config.module
    	.rule('vue')
      .use('vue-loader')
      .tap(options =>
        merge(options, {
        	preserveWhitespace: true
        })
      )
  },
  devServer: {
    proxy: 'http://markdown.test'
  }
}