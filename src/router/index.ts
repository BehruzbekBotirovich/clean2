import { createRouter, createWebHistory } from 'vue-router';
import { supportedLocales } from '@/utils/i18n';
import i18n from '@/utils/i18n';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      redirect: () => {
        const savedLang = sessionStorage.getItem('lang');
        const defaultLocale = savedLang || 'ru';
        return `/${defaultLocale}`;
      },
    },
    {
      path: '/:locale',
      name: 'clean',
      component: () => import('@/views/page/MainPage.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
});



router.beforeEach((to, from, next) => {
  const locale = to.params.locale as string;

  if (!supportedLocales.includes(locale as any)) {
    return next({ name: 'clean', params: { locale: 'ru' } });
  }

  // Установка языка из URL
  i18n.global.locale = locale as any; // либо просто locale

  // При желании сохранить язык в sessionStorage
  sessionStorage.setItem('lang', locale);

  // Также обновляем lang на <html lang="xx">
  document.documentElement.lang = locale;

  next();
});

export default router;
