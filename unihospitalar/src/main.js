import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import '@fortawesome/fontawesome-free/css/all.css';
import 'flag-icons/css/flag-icons.min.css';
import { mask } from 'v-mask';

const app = createApp(App);

app.use(router);
app.use(i18n);
app.directive('mask', mask);

app.mount('#app');
