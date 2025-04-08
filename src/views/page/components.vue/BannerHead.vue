<template>
    <div class="mb-36 relative">
        <div class="bg__home-img"></div>
        <div class="h-screen px-20 pb-0  w-full rounded-4xl grid grid-cols-3 gap-12 relative overflow-hidden">
            <!-- col1 -->
            <div class="col-span-1">
                <div class="flex gap-2 items-center mt-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 32 32">
                        <path fill="#AED287"
                            d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m7.5 7a3.5 3.5 0 1 1-3.5 3.5A3.504 3.504 0 0 1 23.5 9m.435-1.978A5.528 5.528 0 0 0 23.5 7a5.483 5.483 0 0 0-4.132 1.878A8.01 8.01 0 0 0 13.8 4.211a11.855 11.855 0 0 1 10.134 2.811M16 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m-4-10a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6m-8-2a11.97 11.97 0 0 1 .211-2.199a7.992 7.992 0 0 0 7.346 6.176a5.958 5.958 0 0 0-.89 6.757A12.003 12.003 0 0 1 4 16m17.333 10.734a5.983 5.983 0 0 0-4.179-8.62a8.02 8.02 0 0 0 1.913-2.368a5.488 5.488 0 0 0 8.917-.068c.003.108.016.214.016.322a12.003 12.003 0 0 1-6.667 10.734" />
                    </svg>
                    <div>
                        <h3 class="text-3xl text-graydark font-semibold">Bio<span class="text-maingreen">Clean</span>
                        </h3>
                        <div class="text-graydark text-sm">Клининговая компания в Ташкенте</div>
                    </div>
                </div>

                <div class="mt-20">
                    <div class="text-5xl font-morice text-graydark uppercase">
                        <p> <span class="text-maingreen">Уборка</span> Квартир, </p>
                        <p> Домов и офисов</p>
                    </div>
                    <p class="py-8 w-2/3">
                        <span class="text-maingreen">Гарантируем </span>
                        чистоту и безопасность вашего дома и вашей семьи
                    </p>

                    <button class="py-4 px-8 rounded-2xl mb-3  text-white text-lg  gradient">
                        Заказать Уборку
                    </button>
                    <p><span class="text-gray-400">*При первом заказе </span> скидка 10%</p>
                </div>
            </div>
            <!-- col2 -->
            <div class="col-span-1 rounded-b-xl relative h-full">
                <div class="w-full flex items-end h-full">
                    <Swiper :modules="[Autoplay]" :slides-per-view="1" :loop="true" :autoplay="{
                        delay: 2000,
                        disableOnInteraction: false
                    }" @slideChange="onSlideChange" class="rounded-lg  h-full">
                        <SwiperSlide>
                            <div class="bg-green-slide rounded-b-[600px] h-full overflow-hidden">
                                <img src="/src/assets/images/cleanerslide.png"
                                    class="w-auto h-full object-cover rounded-lg" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide class="overflow-visible">
                            <div class="bg-green-slide rounded-b-[600px] border-white h-full overflow-hidden">
                                <img src="/src/assets/images/dizin.png"
                                    class="w-auto h-full object-cover scale-110 rounded-lg" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide class="overflow-visible">
                            <div class="bg-green-slide rounded-b-[600px] border-white h-full overflow-hidden">
                                <img src="/src/assets/images/cleaner2.png"
                                    class="w-auto h-full object-cover scale-110 rounded-lg" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide class="overflow-visible">
                            <div class="bg-green-slide rounded-b-[600px] border-white h-full overflow-hidden">
                                <img src="/src/assets/images/cleaner3.png"
                                    class="w-auto h-full object-cover scale-110 rounded-lg" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <Transition>
                    <h3 v-if="activeIndex == 0" class="absolute bottom-6 -left-2/3">
                        <div>Немецкая оборудования </div>
                        <div>Профессионалыние клинеры</div>
                    </h3>

                    <h3 v-else class="absolute bottom-6 -left-2/3">
                        <div>Эффективный сервис для </div>
                        <div>избавления от вредителей</div>
                    </h3>

                </Transition>

                <Transition>
                    <h3 v-if="activeIndex == 0" class="absolute bottom-6 -right-2/3">
                        <div>Уборка от пола до полатка </div>
                        <div>по выгодним ценам</div>
                    </h3>

                    <h3 v-else class="absolute bottom-6 -right-2/3">
                        <div>Абсолютно безопасно для </div>
                        <div>детей и домашних животных</div>
                    </h3>
                </Transition>


                <div class="line1"></div>
                <div class="line2"></div>
            </div>
            <!-- col3 -->
            <div class="col-span-1 mt-8">
                <div class="flex gap-2 items-center">
                    <svg class="text-maingreen" xmlns="http://www.w3.org/2000/svg" width="2rem" height="2.5rem"
                        viewBox="0 0 24 24">
                        <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                            <path
                                d="M7.25 10a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M12 6.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" />
                            <path
                                d="M3.524 8.857a8.288 8.288 0 0 1 8.26-7.607h.432a8.288 8.288 0 0 1 8.26 7.607a8.944 8.944 0 0 1-1.99 6.396l-4.793 5.861a2.187 2.187 0 0 1-3.386 0l-4.793-5.861a8.943 8.943 0 0 1-1.99-6.396m8.26-6.107A6.788 6.788 0 0 0 5.02 8.98a7.443 7.443 0 0 0 1.656 5.323l4.793 5.862a.687.687 0 0 0 1.064 0l4.793-5.862A7.443 7.443 0 0 0 18.98 8.98a6.788 6.788 0 0 0-6.765-6.23z" />
                        </g>
                    </svg>
                    <h3 class="font-semibold">г.Ташкент Узбекистан </h3>
                </div>

                <div class="mt-20 space-y-5">
                    <h3 class="text-maingreen text-5xl font-morice mb-6">Меню</h3>
                    <ul class="">
                        <li class="font-semibold">Главная </li>
                        <li class="text-gray-400">Наши работы</li>
                        <li class="text-gray-400">Услуги</li>
                        <li class="text-gray-400">Преимущества</li>
                        <li class="text-gray-400">Контакты</li>
                    </ul>

                    <div>
                        <p class="font-morice text-2xl"> 998 (99) 806 20 10</p>
                        <p class="font-morice text-2xl"> 998 (78) 113 87 87</p>
                    </div>

                    <div>
                        <h3>Написать нам</h3>
                        <div class="social-links mt-2">
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem"
                                    viewBox="0 0 24 24">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M5.788 14.02a.746.746 0 0 0 .132.031a456.056 456.056 0 0 1 .844 2.002c.503 1.202 1.01 2.44 1.121 2.796c.139.438.285.736.445.94c.083.104.178.196.29.266a.88.88 0 0 0 .186.088c.32.12.612.07.795.009a1.313 1.313 0 0 0 .304-.15L9.91 20l2.826-1.762l3.265 2.502c.048.037.1.068.156.093c.392.17.772.23 1.13.182c.356-.05.639-.199.85-.368a1.992 1.992 0 0 0 .564-.728l.009-.022l.003-.008l.002-.004v-.002l.001-.001a.756.756 0 0 0 .04-.133l2.98-15.025a.752.752 0 0 0 .014-.146c0-.44-.166-.859-.555-1.112c-.334-.217-.705-.227-.94-.209c-.252.02-.486.082-.643.132a3.458 3.458 0 0 0-.26.094l-.011.005l-16.714 6.556l-.002.001a2.296 2.296 0 0 0-.167.069a2.522 2.522 0 0 0-.38.212c-.227.155-.75.581-.661 1.285c.07.56.454.905.689 1.071c.128.091.25.156.34.199c.04.02.126.054.163.07l.01.003zm14.138-9.152h-.002a.785.785 0 0 1-.026.011L3.164 11.444a.818.818 0 0 1-.026.01l-.01.003a1.126 1.126 0 0 0-.09.04a.851.851 0 0 0 .086.043l3.142 1.058a.75.75 0 0 1 .16.076l10.377-6.075l.01-.005a1.59 1.59 0 0 1 .124-.068c.072-.037.187-.091.317-.131c.09-.028.357-.107.645-.014a.854.854 0 0 1 .588.689a.84.84 0 0 1 .003.424c-.07.275-.262.489-.437.653c-.15.14-2.096 2.016-4.015 3.868l-2.613 2.52l-.465.45l5.872 4.502a.536.536 0 0 0 .251.04a.229.229 0 0 0 .117-.052a.495.495 0 0 0 .103-.12l.002-.001l2.89-14.573a1.858 1.858 0 0 0-.267.086zm-8.461 12.394l-1.172-.898l-.284 1.805zm-2.247-2.68l1.165-1.125l2.613-2.522l.973-.938l-6.52 3.817l.035.082a339.2 339.2 0 0 1 1.22 2.92l.283-1.8a.747.747 0 0 1 .231-.435"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem"
                                    viewBox="0 0 24 24">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511m8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379m-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986M8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996m10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem"
                                    viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2"
                                        d="M10.554 6.24L7.171 2.335c-.39-.45-1.105-.448-1.558.006L2.831 5.128c-.828.829-1.065 2.06-.586 3.047a29.207 29.207 0 0 0 13.561 13.58c.986.479 2.216.242 3.044-.587l2.808-2.813c.455-.455.456-1.174.002-1.564l-3.92-3.365c-.41-.352-1.047-.306-1.458.106l-1.364 1.366a.462.462 0 0 1-.553.088a14.557 14.557 0 0 1-5.36-5.367a.463.463 0 0 1 .088-.554l1.36-1.361c.412-.414.457-1.054.101-1.465" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- bg flower -->
            <div class="absolute right-0 top-1/2 -translate-y-1/3 translate-x-1/2 w-1/3 bg-transparent">
                <img src="/src/assets/images/flowerbg1.webp" alt="" style="mix-blend-mode: multiply;">
            </div>
        </div>

        <div class="px-32  flex  justify-between translate-y-24">
            <div class="servise-card">
                <div class="servise__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path fill="currentColor"
                            d="M18.963 4.188a.5.5 0 0 1 .705-.08l1.08.866L16.799 10h2.544l2.968-3.776l2.504 2.006a.5.5 0 0 1 .066.717L23.973 10h2.614a2.5 2.5 0 0 0-.522-3.331l-5.147-4.122a2.5 2.5 0 0 0-3.522.399L11.809 10h2.551zM21 19a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zM6 7a3 3 0 0 0-3 3v14.5A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-9a4.5 4.5 0 0 0-4.5-4.5H6a1 1 0 1 1 0-2h4.58l1.596-2zM5 24.5V12.83c.313.11.65.17 1 .17h18.5a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 5 24.5" />
                    </svg>
                </div>
                <h3 class="text-lg mb-1 font-semibold">Все выди работ</h3>
                <p class="text-gray-400">Бемся за любие выди <br>уборки на любых обектах</p>
            </div>
            <div class="servise-card">
                <div class="servise__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path fill="currentColor"
                            d="M18.963 4.188a.5.5 0 0 1 .705-.08l1.08.866L16.799 10h2.544l2.968-3.776l2.504 2.006a.5.5 0 0 1 .066.717L23.973 10h2.614a2.5 2.5 0 0 0-.522-3.331l-5.147-4.122a2.5 2.5 0 0 0-3.522.399L11.809 10h2.551zM21 19a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zM6 7a3 3 0 0 0-3 3v14.5A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-9a4.5 4.5 0 0 0-4.5-4.5H6a1 1 0 1 1 0-2h4.58l1.596-2zM5 24.5V12.83c.313.11.65.17 1 .17h18.5a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 5 24.5" />
                    </svg>
                </div>
                <h3 class="text-lg mb-1 font-semibold">Все выди работ</h3>
                <p class="text-gray-400">Бемся за любие выди <br> уборки на любых обектах</p>
            </div>
            <div class="servise-card">
                <div class="servise__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path fill="currentColor"
                            d="M18.963 4.188a.5.5 0 0 1 .705-.08l1.08.866L16.799 10h2.544l2.968-3.776l2.504 2.006a.5.5 0 0 1 .066.717L23.973 10h2.614a2.5 2.5 0 0 0-.522-3.331l-5.147-4.122a2.5 2.5 0 0 0-3.522.399L11.809 10h2.551zM21 19a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zM6 7a3 3 0 0 0-3 3v14.5A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-9a4.5 4.5 0 0 0-4.5-4.5H6a1 1 0 1 1 0-2h4.58l1.596-2zM5 24.5V12.83c.313.11.65.17 1 .17h18.5a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 5 24.5" />
                    </svg>
                </div>
                <h3 class="text-lg mb-1 font-semibold">Все выди работ</h3>
                <p class="text-gray-400">Бемся за любие выди <br> уборки на любых обектах</p>
            </div>
        </div>
    </div>



</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { ref } from 'vue'

const activeIndex = ref()
const onSlideChange = (swiper) => {
    activeIndex.value = swiper.realIndex; // realIndex для работы с loop
};

</script>

<style scoped>
.bg__home-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/src/assets/images/home.webp');
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.15;
}

.servise-card {
    background: white;
    position: relative;
    padding: 3.5rem 3.5rem 2rem 3.5rem;
    border-radius: 2rem;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
}


.servise__icon {
    position: absolute;
    left: 4rem;
    top: 0;
    transform: translateY(-50%);
    padding: 1.5rem;
    border-radius: 50%;
    color: white;
    background: rgb(174, 210, 135);
    background: radial-gradient(circle, rgba(174, 210, 135, 1) 0%, rgba(151, 199, 98, 1) 100%);
}

.bg-green-slide {
    background-image: url('/src/assets/bg/green.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}


.line1 {
    width: calc(25%);
    background: #AED287;
    height: 2px;
    position: absolute;
    bottom: 2.5rem;
    right: 0;
    transform: translateX(50%);
}

.line2 {
    width: calc(25%);
    background: #AED287;
    height: 2px;
    position: absolute;
    bottom: 2.5rem;
    left: 0;
    transform: translateX(-50%);
}

.banner-img {
    background-image: url('/src/assets/images/home.webp');
    background-repeat: no-repeat;
    background-size: cover;

}

.social-links {
    display: flex;
    gap: 1rem;
    color: #AED287;
}

.social-links>a {
    color: #AED287;
    padding: 12px;
    border-radius: 10px;
    border: 2px solid #AED287;
}

.social-links>a:hover {
    background-color: #AED287;
    color: white;
    transition: all 0.3s ease-in-out;
}

.gradient {
    background-color: #addfad;
    background-image: linear-gradient(315deg, #addfad 0%, #AED287 74%);
}

.content {
    font-family: "Morice Bejar", sans - serif !important;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>-