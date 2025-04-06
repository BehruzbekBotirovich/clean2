<template>
    <div v-if="showPreloader" class="w-full h-screen m-auto flex flex-col items-center justify-center gap-8">
        <Loader />
    </div>

    <div v-cloak v-show="!showPreloader" style="border: 2px dashed red; padding: 20px;">
        <RouterView v-slot="{ Component }">
            <component :is="Component" v-if="Component" />
            <div v-else>⚠️ Component failed to load or not found.</div>
        </RouterView>
    </div>
</template>

<script setup lang="ts">
import Loader from './components/Loader.vue';
import { onMounted, onUnmounted, provide, ref, watchEffect } from 'vue';

const theme = ref<string>(localStorage.getItem('theme') || 'light');
const showPreloader = ref<boolean>(false);

// Применение темы
watchEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.value);
    localStorage.setItem('theme', theme.value);
});

// Эмуляция задержки лоадера
async function processPreloader() {
    console.log('⏳ Showing preloader...');
    return new Promise((resolve) => {
        setTimeout(() => {
            showPreloader.value = false;
            console.log('✅ Hiding preloader.');
            resolve(true);
        }, 2000);
    });
}

// Очистка визита, если ушел на другой сайт
function handleUnload() {
    if (!document.referrer.includes(window.location.host)) {
        sessionStorage.removeItem('visited');
    }
}

function handleVisibilityChange() {
    if (document.visibilityState === 'hidden') {
        handleUnload();
    }
}

// Основная инициализация
onMounted(async () => {
    const previousPage = document.referrer;
    const hasVisited = sessionStorage.getItem('visited');
    const isFirstVisit = !hasVisited;
    const isExternalVisit = !previousPage || !previousPage.includes(window.location.host);

    console.log('🔍 First visit:', isFirstVisit, '| External visit:', isExternalVisit);

    if (isFirstVisit || isExternalVisit) {
        sessionStorage.setItem('visited', 'true');
        showPreloader.value = true;
        await processPreloader();
    }

    window.addEventListener('visibilitychange', handleVisibilityChange);
});

onUnmounted(() => {
    window.removeEventListener('visibilitychange', handleVisibilityChange);
});
</script>

<style scoped>
[v-cloak] {
    display: none;
}

@keyframes progressAnimation {
    0% {
        width: 0%;
    }

    100% {
        width: 100%;
    }
}

.animate-progress {
    animation: progressAnimation 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}
</style>