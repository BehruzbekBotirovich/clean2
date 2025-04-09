<template>
    <div class="flex items-center" ref="wrapperRef">
        <!-- Language selector container -->
        <div class="language-select-wrapper">
            <div class="language-select">
                <!-- Dropdown Trigger (Showing current selected language) -->
                <div class="select-box" @click="toggleDropdown" role="button" aria-label="Language Selector">
                    <div class="selected-lang">
                        <img :src="getFlag(lang)" alt="Flag" class="flag" />
                        <span>{{ getLanguageName(lang) }}</span>
                    </div>
                    <svg :class="['dropdown-icon', { open: isOpen }]" width="25" height="24" viewBox="0 0 25 24"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.5" cy="12" r="12" fill="white" />
                        <path d="M7.5 10.5L12.5 15.5L17.5 10.5" stroke="black" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>

                <!-- Dropdown list -->
                <div v-if="isOpen" class="dropdown-list">
                    <div v-for="option in languageOptions" :key="option.code" class="dropdown-item"
                        @click="selectLang(option.code)">
                        <img :src="option.flag" alt="Flag" class="flag" />
                        <span>{{ option.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import flagUz from '/src/assets/lang_images/FlagUZ.svg';
import flagRu from '/src/assets/lang_images/FlagRu.svg';
import flagEn from '/src/assets/lang_images/FlagEn.svg';

// i18n setup
const { locale } = useI18n();

// Default language (uz), fetched from localStorage if available
const lang = ref(localStorage.getItem('i18n') || 'uz');
const isOpen = ref(false);
const wrapperRef = ref(null);

// Language options
const languageOptions = [
    { code: 'uz', name: "O'zbek", flag: flagUz },
    { code: 'ru', name: 'Русский', flag: flagRu },
    { code: 'en', name: 'English', flag: flagEn }
];

// Toggle dropdown visibility
const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

// Select a language
const selectLang = (newLang) => {
    locale.value = newLang;
    localStorage.setItem('i18n', newLang);
    lang.value = newLang;
    isOpen.value = false;
};

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
    if (wrapperRef.value && !wrapperRef.value.contains(event.target)) {
        isOpen.value = false;
    }
};

onMounted(() => {
    locale.value = lang.value;
    window.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    window.removeEventListener('click', handleClickOutside);
});

// Helper method to get the flag URL based on language code
const getFlag = (langCode) => {
    const option = languageOptions.find(option => option.code === langCode);
    return option ? option.flag : '';
};

// Helper method to get the language name
const getLanguageName = (langCode) => {
    const option = languageOptions.find(option => option.code === langCode);
    return option ? option.name : '';
};
</script>

<style scoped>
.language-select-wrapper {
    position: relative;
}

.language-select {
    width: 140px;
    border-radius: 10px;
    border: 1px solid #ccc;
    background-color: #f5f6f7;
    cursor: pointer;
}

.select-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
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
    width: 100%;
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
    padding: 6px 10px;
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
