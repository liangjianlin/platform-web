require('dotenv').config()

module.exports = {
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/dotenv'
    ],

    axios: {

    },

    auth: {
        strategies: {
            local: {

            }
        }
    },

    router: {
        middleware: ['auth']
    }
}