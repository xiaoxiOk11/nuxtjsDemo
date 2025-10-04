// nuxt.config.ts (推荐的简化版本)

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // 核心配置：只需要这一行就够了！
  // 它会自动处理组件、样式按需引入和 transpile
  modules: ["@element-plus/nuxt"],

  // 可选：如果你需要对 element-plus 进行更细粒度的配置，可以加这个
  // elementPlus: {
  //   /** 模块选项 */
  // },

  devServer: {
    port: 3001,
    host: "localhost",
  },
});
