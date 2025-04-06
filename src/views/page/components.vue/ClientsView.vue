<template>
    <div class="relative w-full flex flex-wrap justify-center items-center py-16">
        <div v-for="(person, index) in people" :key="index"
            class="absolute flex items-center justify-center rounded-full overflow-hidden shadow-lg border-4 border-white"
            :class="person.size" :style="{ top: person.top, left: person.left }">
            {{ index + 1 }}
            <img :src="person.image" alt="User" class="w-full h-full object-cover" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const people = ref([
    { image: '/src/assets/images/user.jpg', top: '10%', left: '15%', size: 'w-24 h-24' },
    { image: '/src/assets/images/user.jpg', top: '20%', left: '40%', size: 'w-32 h-32' },
    { image: '/src/assets/images/user.jpg', top: '5%', left: '60%', size: 'w-28 h-28' },
    { image: '/src/assets/images/user.jpg', top: '40%', left: '20%', size: 'w-36 h-36' },
    { image: '/src/assets/images/user.jpg', top: '50%', left: '50%', size: 'w-48 h-48' },
    { image: '/src/assets/images/user.jpg', top: '30%', left: '80%', size: 'w-32 h-32' },
    { image: '/src/assets/images/user.jpg', top: '70%', left: '10%', size: 'w-28 h-28' },
    { image: '/src/assets/images/user.jpg', top: '80%', left: '40%', size: 'w-24 h-24' },
    { image: '/src/assets/images/user.jpg', top: '60%', left: '70%', size: 'w-40 h-40' }
]);
</script>

<style scoped>
@media (max-width: 768px) {
    div.absolute {
        width: 60px !important;
        height: 60px !important;
    }
}
</style>