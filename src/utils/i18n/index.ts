// src/utils/i18n/index.ts
import { createI18n } from 'vue-i18n';
import uz from './uz';
import ru from './ru';
import en from './en';

// Типизация сообщений
type MessageSchema = typeof ru;

const i18nFactory = createI18n<[MessageSchema], 'uz' | 'ru' | 'en'>({
    legacy: false,
    locale: sessionStorage.getItem('lang') as 'uz' | 'ru' | 'en' || 'ru',
    fallbackLocale: 'ru',
    messages: {
        uz,
        ru,
        en,
    },
    globalInjection: true,
});

export default i18nFactory;
