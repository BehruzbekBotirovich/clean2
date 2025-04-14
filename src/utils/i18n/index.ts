// 📁 src/utils/i18n/index.ts
import { createI18n } from 'vue-i18n';
import uz from './uz';
import ru from './ru';
import en from './en';

export const supportedLocales = ['ru', 'uz', 'en'] as const;
export type SupportedLocale = (typeof supportedLocales)[number];

const defaultLocale: SupportedLocale = 'ru';

const getLocaleFromUrl = (): SupportedLocale => {
    const path = window.location.pathname.split('/')[1];
    return supportedLocales.includes(path as SupportedLocale) ? path as SupportedLocale : defaultLocale;
};

// Типизация сообщений
type MessageSchema = typeof ru;

const i18n = createI18n<[MessageSchema], SupportedLocale>({
    legacy: false,
    locale: getLocaleFromUrl(),
    fallbackLocale: defaultLocale,
    messages: { ru, uz, en },
    globalInjection: true,
});

export function setLanguage(lang: SupportedLocale) {
    i18n.global.locale = lang;  // Просто присваиваем строку
    document.documentElement.lang = lang;  // Обновляем атрибут lang в <html>
}

export default i18n;