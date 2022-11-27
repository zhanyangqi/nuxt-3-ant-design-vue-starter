export default defineNuxtConfig({
  modules: ["nuxt-windicss", '@pinia/nuxt'],

  // 引入ant-design-vue样式
  css: ['ant-design-vue/dist/antd.css'],

  // 插件方式引入ant-design-vue组件
  plugins: ["@/plugins/antd"],

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
