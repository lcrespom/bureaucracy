module.exports = {
  // This allows to modify the hidden WebPack configuration
  // See https://cli.vuejs.org/guide/webpack.html
  configureWebpack: {
    resolve: {
      alias: {
        // This adds the Vue template compiler to the Vue runtime
        // See https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
}