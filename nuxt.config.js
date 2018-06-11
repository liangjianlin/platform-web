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

        }
    },

    router: {
        middleware: ['auth']
    }
}