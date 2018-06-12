require('dotenv').config()

module.exports = {
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/dotenv'
    ],

    plugins: ['~/plugins/element-ui'],

    css: ['element-ui/lib/theme-chalk/index.css'],

    build: {
        vendor: ['~/plugins/element-ui']
    },

    axios: {

    },

    auth: {
        strategies: {
            local: {
                endpoints: {
                    user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
                }
            }
        }
    },

    router: {
        middleware: ['auth']
    }
}