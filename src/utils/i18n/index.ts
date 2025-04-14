// src/utils/i18n/index.ts
import { createI18n } from 'vue-i18n';
import uz from './uz';
import ru from './ru';
import en from './en';

// Типизация сообщений
type MessageSchema = typeof ru;

// Поддерживаемые языки
export const supportedLocales = ['ru', 'uz', 'en'] as const;
export type SupportedLocale = (typeof supportedLocales)[number];

const defaultLocale: SupportedLocale = 'ru';

// Получить язык из URL
const getLocaleFromUrl = (): SupportedLocale => {
    const path = window.location.pathname.split('/')[1];
    if (supportedLocales.includes(path as SupportedLocale)) {
        return path as SupportedLocale;
    }
    return defaultLocale;
};

const i18nFactory = createI18n<[MessageSchema], SupportedLocale>({
    legacy: false,
    locale: getLocaleFromUrl(),
    fallbackLocale: defaultLocale,
    messages: {
        uz,
        ru,
        en,
    },
    globalInjection: true,
});

export default i18nFactory;
