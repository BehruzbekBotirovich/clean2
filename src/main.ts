import '@/assets/styles/main.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import '@/assets/styles/main.css';
import App from './App.vue';
import router from './router';
import VueApexCharts from "vue3-apexcharts";
import i18nFactory from '@/utils/i18n';


const app = createApp(App)

app.use(i18nFactory);
app.use(createPinia())
app.use(router)
app.use(VueApexCharts);

app.mount('#app')
