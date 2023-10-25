// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/app.css"],
  devtools: { enabled: false },
  image: {
    domains: ["assets.gearboxgo.com"],
    dir: "assets/images/",
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  runtimeConfig: {
    // Config within public will be also exposed to the client
    public: {
      statamicApi: process.env.STATAMIC_API,
      statamicHost: process.env.STATAMIC_HOST,
      staticFormsKey: process.env.STATICFORMS_KEY,
    },
  },
});
