require('dotenv').config()

module.exports = {
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/dotenv',
        '@nuxtjs/proxy'
    ],

    plugins: [
        '~/plugins/element-ui',
        '~/plugins/axios'
    ],

    css: ['element-ui/lib/theme-chalk/index.css'],

    build: {
        vendor: ['~/plugins/element-ui']
    },

    axios: {
      proxy: true,
      host: '127.0.0.1',
      port: 8080
    },

    router: {
      base: '/web/'
    },

    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: { '^/api' : '/'}
      }
    }

}