import '@/assets/styles/main.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import '@/assets/styles/main.css';
import App from './App.vue';
import router from './router';
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueApexCharts);

app.mount('#app')
