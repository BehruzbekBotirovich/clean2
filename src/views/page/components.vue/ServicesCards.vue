<template>
    <div class="container py-24">
        <h3 class="text-4xl font-morice uppercase text-center"> <span class="text-maingreen">Выди </span> наших услуг
        </h3>
        <div class="services-wrapper grid grid-cols-3 gap-2 my-10">
            <div class="servise__card  shadow-lg ">
                <img class="aspect-[5/4]" src="/src/assets/images/genuborka.jpg" alt="">
                <div class="absolute left-0 bottom-0 w-full  p-4 bg-gray-500/30 text-white">
                    <h3 class="text-xl font-morice text-center my-2">Генеральная уборка</h3>
                    <p class="text-center text-sm hidden hover:block">Генеральная уборка - это комплексная уборка,
                        которая включает в себя
                        все аспекты чистоты и порядка в вашем доме или офисе.</p>
                </div>
            </div>

            <div class="servise__card  shadow-lg ">
                <img class="aspect-[5/4]" src="/src/assets/images/remont.jpg" alt="">
                <div class="absolute left-0 bottom-0 w-full  p-4 bg-gray-500/30 text-white">
                    <h3 class="text-xl font-morice text-center my-2">Уборка после ремонта</h3>
                    <p class="text-center text-sm hidden hover:block">Уборка после ремонта - профессиональная очистка
                        помещений от
                        строительной пыли, остатков материалов и загрязнений</p>
                </div>
            </div>

            <div class="servise__card  shadow-lg ">
                <img class="aspect-[5/4]" src="/src/assets/images/fasad.jpg" alt="">
                <div class="absolute left-0 bottom-0 w-full  p-4 bg-gray-500/30 text-white">
                    <h3 class="text-xl font-morice text-center my-2">Мойка фасадов </h3>
                    <p class="text-center text-sm hidden hover:block">
                        Очистка внешних стен зданий от загрязнений, пыли и грязи
                    </p>
                </div>
            </div>

            <div class="servise__card shadow-lg ">
                <img class="aspect-[5/4]" src="/src/assets/images/mebel.webp" alt="">
                <div class="absolute left-0 bottom-0 w-full  p-4 bg-gray-500/30 text-white">
                    <h3 class="text-xl font-morice text-center my-2"> Химчистка ковров и мебели</h3>
                    <p class="text-center text-sm hidden hover:block">
                        Глубокая чистка, устранение пятен и неприятных запахов. </p>
                </div>
            </div>

            <div class="servise__card  shadow-lg ">
                <img class="aspect-[5/4]" src="/src/assets/images/bruschatka.jpg" alt="">
                <div class="absolute left-0 bottom-0 w-full  p-4 bg-gray-500/30 text-white">
                    <h3 class="text-xl font-morice text-center my-2"> Химчистка брюшчатки</h3>
                    <p class="text-center text-sm hidden hover:block">
                        Удаление грязи, налета и плесени с плитки глубокая чистка, устранение пятен. </p>
                </div>
            </div>

            <div class="servise__card  shadow-lg ">
                <img class="aspect-[5/4]" src="/src/assets/images/dizinuborka.webp" alt="">
                <div class="absolute left-0 bottom-0 w-full  p-4 bg-gray-500/30 text-white">
                    <h3 class="text-xl font-morice text-center my-2"> Уборка после дезинфекции </h3>
                    <p class="text-center text-sm hidden hover:block">
                        Обработка помещений от вирусов, бактерий и аллергенов. </p>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';

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