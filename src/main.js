import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import { createI18n } from 'vue-i18n/index'
import messages from './i18n/messages'


const i18n = createI18n({
    fallbackLocale: ["ja", "ch" ,"en"],
    globalInjection:true,
    legacy: false, // you must specify 'legacy: false' option
    locale: "ja",
    messages,

  });
  
  
  export default i18n


  // createApp(App).use(store).use(router).use(i18n).mount('#app')
  createApp(App).use(store).use(router).use(i18n).mount('#app')


