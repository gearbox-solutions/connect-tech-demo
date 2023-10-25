// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/app.css"],
  devtools: { enabled: false },
  image: {
    dir: "assets/images/",
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
});
