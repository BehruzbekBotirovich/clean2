<template>
    <section id="works" class="w-full max-w-6xl mx-auto">
        <h2 class="text-3xl font-morice  text-center mb-4" v-html="t('works_gallery')">
        </h2>
        <swiper :modules="[Navigation]" :breakpoints="{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 1.4 },
            1024: { slidesPerView: 1.8 },
        }" centeredSlides :space-between="30" navigation loop class="overflow-visible">
            <swiper-slide v-for="(img, i) in images" :key="i" class="swiper-slide-custom py-10">
                <div class="overflow-hidden rounded-xl shadow-lg transition-all duration-500">
                    <img :src="img" alt="gallery image" class="w-full  h-[28rem] object-cover rounded-xl" />
                </div>
            </swiper-slide>

            <template #navigation-prev>
                <div
                    class="swiper-button-prev-custom bg-maingreen text-white w-10 h-10 flex items-center justify-center rounded-full shadow hover:bg-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <pa th d="M15 18l-6-6 6-6" />
                    </svg>
                </div>
            </template>

            <template #navigation-next>
                <div
                    class="swiper-button-next-custom bg-maingreen text-white w-10 h-10 flex items-center justify-center rounded-full shadow hover:bg-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </div>
            </template>
        </swiper>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import after1 from '/src/assets/slider/after1.png'
import before1 from '/src/assets/slider/before1.png'
import bruschatka from '/src/assets/slider/bruschatka.jpg'
import carpet from '/src/assets/slider/carpet.jpg'
import fasad from '/src/assets/slider/fasad.jpg'
import remont from '/src/assets/slider/remont.jpeg'
import home from '/src/assets/slider/home.jpeg'
import sofa from '/src/assets/slider/sofa.jpg'

const images = [
    after1,
    before1,
    bruschatka,
    carpet,
    fasad,
    remont,
    home,
    sofa
]
</script>

<style scoped>
.swiper-slide-custom {
    transition: all 0.4s ease;
    opacity: 0.5;
    transform: scale(0.85);
}

.swiper-slide-active {
    opacity: 1 !important;
    transform: scale(1.05) !important;
    z-index: 10;
}

.swiper-slide-prev,
.swiper-slide-next {
    opacity: 0.7;
    transform: scale(0.95);
}

.swiper-button-prev-custom,
.swiper-button-next-custom {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    cursor: pointer;
}

.swiper-button-prev-custom {
    left: -2rem;
}

.swiper-button-next-custom {
    right: -2rem;
}
</style>