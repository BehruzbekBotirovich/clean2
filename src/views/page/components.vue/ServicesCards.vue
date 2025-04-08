<template>
    <div class="container py-24">
        <h3 class="text-4xl font-morice uppercase text-center" v-html="t('services_title')">
        </h3>
        <div class="services-wrapper grid grid-cols-3 gap-2 my-10">
            <div class="servise__card shadow-lg">
                <img class="aspect-[5/4]" src="/src/assets/images/genuborka.jpg" alt="">
                <div class="absolute left-0 bottom-0 w-full p-4 bg-gray-500/30 text-white">
                    <h3 class="text-xl font-morice text-center my-2">{{ t('general_cleaning') }}</h3>
                    <p class="text-center text-sm hidden hover:block">{{ t('general_cleaning_desc') }}</p>
                </div>
            </div>

            <div class="servise__card shadow-lg">
                <img class="aspect-[5/4]" src="/src/assets/images/remont.jpg" alt="">
                <div class="absolute left-0 bottom-0 w-full p-4 bg-gray-500/30 text-white">
                    <h3 class="text-xl font-morice text-center my-2">{{ t('after_repair') }}</h3>
                    <p class="text-center text-sm hidden hover:block">{{ t('after_repair_desc') }}</p>
                </div>
            </div>

            <div class="servise__card shadow-lg">
                <img class="aspect-[5/4]" src="/src/assets/images/fasad.jpg" alt="">
                <div class="absolute left-0 bottom-0 w-full p-4 bg-gray-500/30 text-white">
                    <h3 class="text-xl font-morice text-center my-2">{{ t('facade_washing') }}</h3>
                    <p class="text-center text-sm hidden hover:block">{{ t('facade_washing_desc') }}</p>
                </div>
            </div>

            <div class="servise__card shadow-lg">
                <img class="aspect-[5/4]" src="/src/assets/images/mebel.webp" alt="">
                <div class="absolute left-0 bottom-0 w-full p-4 bg-gray-500/30 text-white">
                    <h3 class="text-xl font-morice text-center my-2">{{ t('upholstery_cleaning') }}</h3>
                    <p class="text-center text-sm hidden hover:block">{{ t('upholstery_cleaning_desc') }}</p>
                </div>
            </div>

            <div class="servise__card shadow-lg">
                <img class="aspect-[5/4]" src="/src/assets/images/bruschatka.jpg" alt="">
                <div class="absolute left-0 bottom-0 w-full p-4 bg-gray-500/30 text-white">
                    <h3 class="text-xl font-morice text-center my-2">{{ t('brick_cleaning') }}</h3>
                    <p class="text-center text-sm hidden hover:block">{{ t('brick_cleaning_desc') }}</p>
                </div>
            </div>

            <div class="servise__card shadow-lg">
                <img class="aspect-[5/4]" src="/src/assets/images/dizinuborka.webp" alt="">
                <div class="absolute left-0 bottom-0 w-full p-4 bg-gray-500/30 text-white">
                    <h3 class="text-xl font-morice text-center my-2">{{ t('disinfection_cleaning') }}</h3>
                    <p class="text-center text-sm hidden hover:block">{{ t('disinfection_cleaning_desc') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>
.servise__card {
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
    grid-column: span 1;
    transition: all 0.3s linear;
}

.servise__card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.services-wrapper:hover .servise__card {
    transform: scale(0.95);
    opacity: 0.8;
    transition: all 0.3s ease;
}

.services-wrapper .servise__card:hover {
    transform: scale(1.05);
    opacity: 1;
    z-index: 10;
    transition: all 0.3s ease;
}

/* 
.servise__card:not(:hover) {
    transform: scale(0.95);
    opacity: 0.8;
    transition: all 0.3s linear;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
} */

.servise__card:hover p {
    display: block;
    transition: all 1.6s linear;
}
</style>