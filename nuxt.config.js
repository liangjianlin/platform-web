require('dotenv').config()

module.exports = {
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/dotenv',
        '@nuxtjs/proxy'
    ],

    plugins: ['~/plugins/element-ui'],

    css: ['element-ui/lib/theme-chalk/index.css'],

    build: {
        vendor: ['~/plugins/element-ui']
    },

    axios: {

    },

    auth: {
        redirect: {
          callback: '/callback'
        },
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/api/auth/login', method: 'post', propertyName: 'token'},
                    user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
                }
            }
        }
    },

    router: {
        middleware: ['auth']
    },

    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: { '^/api' : '/'}
      }
    }
}