// src/i18n.js
import { createI18n } from 'vue-i18n';
import uz from './uz'
import ru from './ru'
import en from './en'
const i18nFactory = createI18n({
    legacy: false,
    locale: sessionStorage.getItem('lang') || 'uz', // Выбор языка по умолчанию
    fallbackLocale: 'uz',
    messages: {
        uz,
        ru,
        en
    }
});

export default i18nFactory;