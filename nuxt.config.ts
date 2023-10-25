// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/app.css"],
  devtools: { enabled: true },
  image: {
    dir: "assets/images/",
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
});