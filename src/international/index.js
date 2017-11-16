import messagesEn from './en'
import messagesZh from './zh'

import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)


const messages = {
  en: {
     message: messagesEn,
    topbar:messagesEn.topbar,
    resume:messagesEn.resume,
  },
  zh: {
    message: messagesZh,
    topbar:messagesZh.topbar,
    resume:messagesZh.resume,
  }
}

Object.keys(messages).forEach(function (lang) {
  Vue.locale(lang, messages[lang])
})

export default new VueI18n({
  locale: 'zh', 
  messages, 
})

