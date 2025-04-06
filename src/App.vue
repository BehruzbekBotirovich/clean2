<template>
    <div v-if="showPreloader" class="w-full h-screen m-auto flex flex-col items-center justify-center gap-8">
        <loader />
    </div>
    <div  v-show="!showPreloader">
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import Loader from './components/Loader.vue';
import { onMounted, onUnmounted, provide, ref, watchEffect } from 'vue';

const theme = ref<string>(localStorage.getItem('theme') || 'light');

const showPreloader = ref<boolean>(false);

watchEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.value);
    localStorage.setItem('theme', theme.value);
});

provide('theme', theme);
provide('toggleTheme', () => {
    theme.value = theme.value == 'light' ? 'dark' : 'light';
});

async function processPreloader() {
    let id: number;

    return new Promise((resolve) => {
        id = setTimeout(() => {
            clearTimeout(id);
            showPreloader.value = false;
            resolve(true);
        }, 800);
    });
}

function handleUnload() {
    if (!document.referrer.includes(window.location.host)) {
        sessionStorage.removeItem('visited');
    }
}

onMounted(async () => {
    const previousPage = document.referrer;
    const hasVisited = sessionStorage.getItem('visited');

    const isFirstVisit = !hasVisited;
    const isExternalVisit = !previousPage || !previousPage.includes(window.location.host);

    if (isFirstVisit || isExternalVisit) {
        sessionStorage.setItem('visited', 'true');
        showPreloader.value = true;
        await processPreloader();
    }

    window.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            handleUnload();
        }
    });
});

onUnmounted(() => {
    window.removeEventListener('visibilitychange', handleUnload);
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