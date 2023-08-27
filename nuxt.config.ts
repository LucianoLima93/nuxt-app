// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxtjs/eslint-module",
    "@nuxt/image",
    "nuxt-icon",
  ],
  googleFonts: {
    families: {
      Roboto: {
        wght: [100, 300, 400, 500, 700, 900],
        ital: [100, 300, 400, 500, 700, 900],
      },
    },
  },
  image: {
    quality: 80,
  },
  eslint: {
    lintOnStart: false,
    exclude: ["node_modules", ".nuxt"],
    include: ["components/**/*.vue", "layouts/**/*.vue", "pages/**/*.vue"],
  },
});
