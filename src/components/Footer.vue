<template>
    <footer class=" md:py-24 relative overflow-hidden space-y-2">
        <h3 class="text-4xl uppercase md:mb-6 text-center font-morice">
            <span class="text-maingreen">{{ $t('footer.title') }}</span>
            <br>{{ $t('footer.subtitle') }}
        </h3>
        <div class="flex justify-center">
            <p class="text-center text-gray-600 text-xl w-1/2">
                {{ $t('footer.description') }}
            </p>
        </div>
        <div class="flex justify-center md:mt-8 ">
            <button @click="scrollTo('order_form')" class="btn cursor-pointer bg-maingreen px-10 py-6 text-white">{{
                $t('footer.orderCleaning') }}</button>
        </div>
        <!-- bg-images -->
        <div class="absolute top-0  -translate-x-1/2 left-0 w-1/2">
            <img class="w-full " src="/src/assets/bg/kusthalf.png" alt="greenflower">
        </div>
        <div class="absolute top-0  translate-x-1/2 right-0 w-1/2">
            <img class="w-full " src="/src/assets/bg/kusthalf.png" alt="greenflower">
        </div>
    </footer>
</template>

<script setup lang="ts">
const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<style scoped></style>
