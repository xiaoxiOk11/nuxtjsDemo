// nuxt.config.ts (最终的、最简化的推荐版本)

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // 核心配置：只需要这一行，它会处理好组件、图标和样式的一切！
  modules: ["@element-plus/nuxt"],

  devServer: {
    port: 3001,
    host: "localhost",
  },
});
