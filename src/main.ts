import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Change meta dynamically
// import VueMeta from 'vue-meta'
// import { createMetaManager } from 'vue-meta'
// const metaManager = createMetaManager();

// Customized SCSS File
import "@/assets/scss/custom.scss";
import "bootstrap";

// Unit Test
// import { use } from "chai";

// Switch Website Language
// import VueI18n from 'vue-i18n'

// Ready translated locale messages
// const messages = {
//     en: {
//       message: {
//         hello: 'hello world'
//       }
//     },
//     ja: {
//       message: {
//         hello: 'こんにちは、世界'
//       }
//     }
//   }

// Create VueI18n instance with options
// const i18n = new VueI18n({
//   lozcale: 'ja', // set locale
//   messages, // set locale messages
// })

createApp(App).use(store).use(router).mount("#app");

// createApp(App).use(VueI18n).use(metaManager, {
//     refreshOnceOnNavigation: true
// }).use(store).use(router).mount("#app");


// 匯入語言檔
// import en from '@/i18n/en'
// import zh from '@/i18n/zh'

// 取得預設語系
// const locale = localStorage.getItem('locale') || 'tw'

// 建立 VueI18n 實體
// const i18n = new VueI18n({
//     locale,
//     messages: { en, zh }
// })

// export default i18n
