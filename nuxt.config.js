export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'yhgram',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    './assets/css/reset.css',
    './assets/css/font.css'
  ],

  plugins: [
    '~/plugins/vue-awesome-swiper.js',
  ],

  styleResources: {
    scss: [
      './assets/scss/main.scss'
    ]
  },

  components: true,

  buildModules: [
    '@nuxtjs/style-resources',
  ],

  modules: [
  ],

  build: {
  },
  
  serverMiddleware: ['~/api/index.js']
}
