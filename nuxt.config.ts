// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "",
      meta: [],
      link: [
        {
          rel: "stylesheet",
          href: "/js/framework/jquery-ui-1.11.4.custom/jquery-ui.css",
        },
        { rel: "stylesheet", href: "/css/body.css" },
        { rel: "stylesheet", href: "/css/admin.css" },
        { rel: "stylesheet", href: "/css/pop.css" },
      ],
      script: [
        { src: "/js/framework/jquery.min.js" },
        { src: "/js/framework/jquery-ui-1.11.4.custom/jquery-ui.js" },
        { src: "/js/framework/jquery.lazyload/jquery.lazyload.min.js" },
        { src: "/js/common/common-top.js" },
      ],
    },
  },
});
