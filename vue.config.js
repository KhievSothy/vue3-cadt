const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
//#endregion    prox: process.env.VUE_APP_BACKEND
  }
})
