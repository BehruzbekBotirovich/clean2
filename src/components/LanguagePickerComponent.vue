<template>
    <div class="flex items-center" ref="wrapperRef">
        <div class="language-select-wrapper">
            <div class="language-select">
                <div class="select-box" @click="toggleDropdown" role="button" aria-label="Language Selector">
                    <div class="selected-lang">
                        <img :src="getFlag(lang)" alt="Флаг выбранного языка" class="flag" />
                        <span>{{ getLanguageName(lang) }}</span>
                    </div>
                    <svg :class="['dropdown-icon', { open: isOpen }]" width="25" height="24" viewBox="0 0 25 24"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.5" cy="12" r="12" fill="white" />
                        <path d="M7.5 10.5L12.5 15.5L17.5 10.5" stroke="black" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>

                <div v-if="isOpen" class="dropdown-list">
                    <div v-for="option in languageOptions" :key="option.code" class="dropdown-item"
                        @click="selectLang(option.code)">
                        <img :src="option.flag" :alt="`Флаг: ${option.name}`" class="flag" />
                        <span>{{ option.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import flagUz from '/src/assets/lang_images/FlagUZ.svg';
import flagRu from '/src/assets/lang_images/FlagRu.svg';
import flagEn from '/src/assets/lang_images/FlagEn.svg';

import { supportedLocales, setLanguage } from '@/utils/i18n';
import type { SupportedLocale } from '@/utils/i18n';

const isLocale = (val: string): val is SupportedLocale => {
    return supportedLocales.includes(val as SupportedLocale);
};

const selectLang = async (newLang: string) => {
    if (!isLocale(newLang)) return;

    lang.value = newLang;

    await router.push({
        name: route.name || 'clean',
        params: { ...route.params, locale: newLang },
        query: route.query
    });
    if (supportedLocales.includes(lang.value as SupportedLocale)) {
        setLanguage(lang.value as SupportedLocale);
    }
    window.location.reload()

    isOpen.value = false;
};

const router = useRouter();
const route = useRoute();

const lang = ref((route.params.locale as string) || 'ru');
const isOpen = ref(false);
const wrapperRef = ref<HTMLElement | null>(null);
const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const languageOptions = [
    { code: 'uz', name: "O'zbek", flag: flagUz },
    { code: 'ru', name: 'Русский', flag: flagRu },
    { code: 'en', name: 'English', flag: flagEn }
];

const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.value && !wrapperRef.value.contains(event.target as Node)) {
        isOpen.value = false;
    }
};

const getFlag = (langCode: string) => {
    return languageOptions.find(opt => opt.code === langCode)?.flag || '';
};

const getLanguageName = (langCode: string) => {
    return languageOptions.find(opt => opt.code === langCode)?.name || '';
};

onMounted(() => {
    if (isLocale(lang.value)) {
        setLanguage(lang.value);
    }
    window.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    window.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
/* Стили без изменений */
.language-select-wrapper {
    position: relative;
}

.language-select {
    width: calc(100% + 1.5rem);
    border-radius: 10px;
    border: 1px solid #ccc;
    background-color: #f5f6f7;
    cursor: pointer;
}

.select-box {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    padding: 0.5rem;
    padding-right: 0;
    background-color: #fff;
    border-radius: 10px;
    user-select: none;
}

.selected-lang {
    display: flex;
    align-items: center;
}

.selected-lang .flag {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 10px;
}

.dropdown-icon {
    transition: transform 0.3s;
}

.dropdown-icon.open {
    transform: rotate(180deg);
}

.dropdown-list {
    position: absolute;
    top: 100%;
    left: 0;
    width: calc(100% + 1.5rem);
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
    max-height: 200px;
    overflow-y: auto;
}

.dropdown-item {
    display: flex;
    align-items: center;
    padding: 0.4rem 1rem;
    cursor: pointer;
}

.dropdown-item:hover {
    background-color: #f0f0f0;
}

.dropdown-item .flag {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 10px;
}
</style>
