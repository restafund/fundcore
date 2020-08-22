export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'RestaFund',
    htmlAttrs: {
      lang: 'el'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'RestaFund for Life' },
      { property: 'og:url', content: 'https:/dioadhita.com/' },
      { property: 'og:description', content: 'Biarkan Properti Kamu Bekerja Untuk Kamu' },
      { property: 'og:image', content: 'https://restafund.com/wp-content/uploads/2019/07/restafundlogo2.png' },
      { property: 'og:type', content: 'article' },
      { property: 'og:locale', content: 'en_GB' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || 'Bergotong royong mendanai usaha Anda atau proyek Anda dengan jaminan properti.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', src: './favicon.ico' }],
    script: [
      // { src: 'https://kit.fontawesome.com/ff1b20f0ce.js', crossorigin: 'anonymous' }
    ]
  },
  env: {
    users: [
      { slug: 'fun-develop', button: 'AJUKAN FUN DEVELOP', title: 'FUN DEVELOP', content: 'Fund Development adalah pendanaan yang membantu para developer atau pemilik lahan atau pemilik proyek untuk membangun perumahan atau komersil yang sudah punya IMB dan siap dibangun.' },
      { slug: 'fun-gadai', button: 'AJUKAN FUN GADAI', title: 'FUN GADAI', content: 'Fund Gadai adalah pendanaan yang membantu para pemilik properti yang Butuh Uang Cepat dengan jaminan properti bersertifikat' },
      { slug: 'fun-flip', button: 'AJUKAN FUN FLIP', title: 'FUN FLIP', content: 'Fund Flip adalah pendanaan untuk membantu para pemilik properti yang Butuh Jual Cepat dengan harga dibawah NJOP atau maksimal 70% dari harga pasar.' },
      { slug: 'fun-income', button: 'AJUKAN FUN INCOME', title: 'FUN INCOME', content: 'Fund Income adalah crowdfunding untuk proyek jangka panjang seperti kost, hotel, foodcourt, lahan parkir, komersil, coworking space, coliving, dan properti yang produktif.' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/semantic/dist/semantic.min.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/device'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}
