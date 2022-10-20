import { createApp } from 'vue';
import App from './App.vue';
import Btn from '@/components/Btn/Btn.vue';
import router from './router/router';
import { store } from './store/store';

import './assets/css/base.css';
import './assets/css/global.css';
import './assets/css/fonts.css';
import 'swiper/css';

const app = createApp(App);

app.component('Btn', Btn);

app.use(router);
app.use(store);
app.mount('#app');
