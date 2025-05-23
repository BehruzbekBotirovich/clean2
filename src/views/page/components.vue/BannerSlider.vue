<template>
    <div class="md:flex container py-24 space-y-4">
        <div class="md:hidden items-center px-4">
            <div>
                <h3 class="text-6xl mb-4 font-morice">
                    <span>{{ $t('banner_slider.clear_flat1') }}</span> br
                    {{ $t('banner_slider.clear_flat2') }}
                </h3>
                <p class="text-xl text-black/50">{{ $t('banner_slider.title') }}</p>
            </div>
        </div>

        <div class="relative flex md:w-1/2 items-center gap-6">
            <!-- Основной Swiper -->
            <Swiper :modules="[Thumbs]" :thumbs="{ swiper: thumbsSwiper }" :slides-per-view="1" :loop="true"
                @swiper="setMainSwiper" @slideChange="onSlideChange" class="rounded-xl shadow-lg w-full h-[400px]">
                <SwiperSlide v-for="(slide, index) in slides" :key="index">
                    <img :src="slide.image" class="w-full h-full object-cover rounded-xl" :alt="slide.alt" />
                </SwiperSlide>
            </Swiper>

            <!-- Миниатюры -->
            <div class="flex flex-col gap-6 relative">
                <button @click="prevSlide" aria-label="Previous slide" role="button"
                    class="slide-btn top-0 -translate-y-1/2">
                    <svg class="rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24">
                        <path fill="currentColor" d="M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z" />
                    </svg>
                </button>
                <Swiper @swiper="setThumbsSwiper" :direction="'vertical'" :slides-per-view="3" :space-between="10"
                    class="h-[400px] w-[10rem]">
                    <SwiperSlide v-for="(slide, index) in slides" :key="index">
                        <img :src="slide.image" :alt="slide.alt"
                            class="w-full h-full object-cover rounded-xl cursor-pointer transition-all duration-300"
                            :class="{ 'grayscale opacity-50': activeIndex !== index }" @click="goToSlide(index)" />
                    </SwiperSlide>
                </Swiper>
                <button @click="nextSlide" aria-label="Next slide" role="button"
                    class="slide-btn bottom-0 translate-y-1/2">
                    <svg class="-rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24">
                        <path fill="currentColor" d="M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z" />
                    </svg>
                </button>
            </div>
        </div>

        <div class="hidden md:w-1/2 md:flex items-center px-20">
            <div>
                <h3 class="text-6xl mb-4 font-morice">
                    <span class="text-maingreen">{{ $t('banner_slider.clear_flat1') }}</span>
                    {{ $t('banner_slider.clear_flat2') }}
                </h3>
                <p class="text-xl text-black/50" v-html="t('banner_slider.title')"></p>
            </div>
        </div>
    </div>

    <div class="bg__home">
        <div class="container py-32">
            <h3 class="text-5xl text-white font-morice text-center relative uppercase">
                {{ $t('banner_slider.logan') }}
            </h3>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import carpet_clean from '/src/assets/own_images/carpet_clean.jpg'
import carpet_dust_clean from '/src/assets/own_images/carpet_dust_clean.jpg'
import carpet_clean2 from '/src/assets/own_images/carpet_clean_zoom.jpg'
import moyka_fasad from '/src/assets/own_images/moyka_fasad.jpg'

import { useI18n } from 'vue-i18n';
const { t } = useI18n();
// Массив изображений
const slides = [
    { image: carpet_clean, alt: "Профессиональная чистка ковров в Ташкенте — BioClean" },
    {
        image: carpet_dust_clean, alt: "Сотрудник клининговой компании BioClean очищает ковер экстрактором"
    },
    {
        image: moyka_fasad, alt: "Мойка фасадов, мойка окон зданий"
    },
    {
        image: carpet_dust_clean, alt: "Сотрудник клининговой компании "
    }
];

// Хранение активных слайдеров
const mainSwiper = ref(null);
const thumbsSwiper = ref(null);
const activeIndex = ref(0);

// Функция для установки основного слайдера
const setMainSwiper = (swiper) => {
    mainSwiper.value = swiper;
};

// Функция для установки мини-слайдера
const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

// Функция для обновления активного индекса
const onSlideChange = (swiper) => {
    activeIndex.value = swiper.realIndex;
};

// Функция для перехода на конкретный слайд при клике на миниатюру
const goToSlide = (index) => {
    if (mainSwiper.value) {
        mainSwiper.value.slideToLoop(index);
    }
};

// Функции для переключения слайдов
const prevSlide = () => mainSwiper.value?.slidePrev();
const nextSlide = () => mainSwiper.value?.slideNext();
</script>

<style scoped>
/* Стили для эффекта серых неактивных миниатюр */
.grayscale {
    filter: grayscale(100%);
}

.bg__home {
    background-image: url('/src/assets/images/home.webp');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.bg__home:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
}

.slide-btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: #aed287;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
    border: 4px solid white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
