<template>
    <div class="container py-16">
        <h3 class="text-4xl text-center font-morice "><span class="text-maingreen">ОТЗЫВЫ</span> О НАШЕЙ РАБОТЕ</h3>
        <p class="text-lg text-center">Нам пишут слова благодарности.</p>
        <div class="relative w-full mt-10">
            <Swiper :modules="[Navigation]" :slides-per-view="1.5" :space-between="60" :breakpoints="{
                640: { slidesPerView: 2.5 },
                1024: { slidesPerView: 2 }
            }" :centeredSlides="true" :loop="true" navigation class="w-full">
                <SwiperSlide v-for="(review, index) in reviews" :key="index">
                    <div class="review-card">
                        <div
                            class="w-20 h-20 text-white rounded-full overflow-hidden flex items-center justify-center bg-maingreen text-3xl font-morice">
                            {{review.title.split(' ').map(word => word[0]).join('')}}
                        </div>
                        <div class="" style="width: calc(100% - 5rem);">
                            <h3 class="text-xl font-semibold text-left">{{ review.title }}</h3>
                            <p class="text-gray-700 text-sm text-left">{{ review.description }}</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <!-- Навигационные кнопки -->
            <!-- <button class="nav-btn left" @click="prevSlide">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
            </svg>
        </button>
        <button class="nav-btn right" @click="nextSlide">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
        </button> -->
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const reviews = ref([
    {
        id: 1,
        title: 'Mirvohid Risqiboyev',
        rate: 5,
        color: '#FF5733', // Оранжево-красный
        description: "Огромная благодарность за вашу работу!  Успехов Вам и процветания!"
    },
    {
        id: 3,
        title: 'David Koposov',
        rate: 4.5,
        color: '#FFD700', // Золотой
        description: "Очень понравилось, работают профессионалы своего дела!!!"
    },
    {
        id: 2,
        title: 'Артем',
        rate: 5,
        color: '#33A1FF', // Голубой
        description: "Персонал очень вежливый, отвечают быстро ,при чем очень качественном и красивом упаковке!"
    },
    {
        id: 4,
        title: 'Никита Скичко',
        rate: 4,
        color: '#32CD32', // Лаймовый
        description: "Классная химчистка, справились раньше срока"
    },
    {
        id: 6,
        title: 'Jamshid Shokirov',
        rate: 5,
        color: '#FF1493', // Розовый
        description: 'Положительные Качество, Профессионализм, Цены на Услуги Чистка мягкой мебели'
    },
    {
        id: 5,
        title: 'Muhriddin Toshpolatov',
        rate: 5,
        color: '#8A2BE2', // Фиолетовый
        description: 'Рекомендую всем, у них ещё есть услуги дезинфекции'
    },
]);

const prevSlide = () => document.querySelector('.swiper-button-prev')?.click();
const nextSlide = () => document.querySelector('.swiper-button-next')?.click();
</script>

<style scoped>
.review-card {
    background: rgba(244, 244, 244);
    padding: 1.5rem;
    border-radius: 1.25rem;
    align-items: center;
    transition: transform 0.3s ease, opacity 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    margin: 20px;
    display: flex;
    gap: 1rem;
}

.review-card::before {
    content: '';
    position: absolute;
    width: calc(100% + 1rem);
    height: calc(100% - 2rem);
    height: 80%;
    top: 1rem;
    left: -0.5rem;
    border-radius: 1.75rem;
    background-color: #aed28753;
    z-index: -1;
}

.swiper-slide-active {
    transform: scale(1.1);
}

.swiper-slide-next,
.swiper-slide-prev {
    opacity: 0.6;
    transform: scale(0.9);
}

.nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: white;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    z-index: 10;
}

.left {
    left: -2rem;
}

.right {
    right: -2rem;
}
</style>