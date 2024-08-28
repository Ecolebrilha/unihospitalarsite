import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n'; // Importando o i18n
import '@fortawesome/fontawesome-free/css/all.css';

createApp(App)
  .use(router)
  .use(i18n) // Usando o i18n na aplicação
  .mount('#app');