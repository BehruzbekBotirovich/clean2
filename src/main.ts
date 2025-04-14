import '@/assets/styles/main.css';  // Импортируем стили один раз

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import VueApexCharts from "vue3-apexcharts";
import i18nFactory from '@/utils/i18n/index.js';

const app = createApp(App);

app.use(i18nFactory);
app.use(createPinia());
app.use(router);
app.use(VueApexCharts);

app.mount('#app');
