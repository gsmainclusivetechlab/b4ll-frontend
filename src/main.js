import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from "vue";
import './plugins/bootstrap-vue'
import App from "./App.vue";
import router from './router'
import Notifications from 'vue-notification';
import VueGtag from "vue-gtag";
import VueI18n from 'vue-i18n';
import { languages } from './locales/index.js'
import { defaultLocale } from './locales/index.js'
import VueFlags from "@growthbunker/vueflags";

Vue.use(VueFlags, {
  iconPath: '/images/vueflags/flags/',
});
Vue.use(VueI18n);
const messages = Object.assign(languages)

Vue.config.productionTip = false;
Vue.use(Notifications)

var i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: 'fr',
  messages
})

Vue.use(VueGtag, {
  config: { id: "G-SYN09MW98X" }
});

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
