import { defineNuxtPlugin } from "#app";
import QrcodeVue from "vue-qrcode";


export default defineNuxtPlugin((nuxtApp) => {
  // 全局注册组件
  nuxtApp.vueApp.component("QrcodeVue", QrcodeVue);
});
