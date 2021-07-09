export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'FIFA 21 - Independence Tournament | Fadl Afridi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://fadlafridi.web.app",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "FIFA 21 - Independence Tournament | Fadl Afridi",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Play the Independence Tournament for a chance to win a Playstation 5.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/tournament_logo.png",
      },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://fadlafridi.web.app",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "FIFA 21 - Independence Tournament | Fadl Afridi",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "Play the Independence Tournament for a chance to win a Playstation 5.",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/tournament_logo.png",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/tournament_logo.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  generate: {
    // choose to suit your project
    interval: 2000,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
