<template>
    <div class="relative">
        <div class="wrapper-img"></div>
        <div class="container py-16 relative z-10">
            <h3 class="font-morice text-4xl uppercase text-center">
                <span class="text-maingreen">{{ $t('form.inquiry_interest') }}</span><br>
                {{ $t('form.leave_request') }}
            </h3>
            <form @submit.prevent="submitForm" class="grid grid-cols-3 gap-10 mt-12 container">
                <div class="mb-4">
                    <input v-model="name" id="name" type="text" :placeholder="$t('form.placeholder_name')"
                        class="w-full p-6 text-lg bg-maingray/40 border-2 border-transparent rounded-xl outline-none focus:border-maingreen"
                        required />
                </div>

                <div class="mb-4">
                    <input v-model="phone" id="phone" type="tel" :placeholder="$t('form.placeholder_phone')"
                        @input="formatPhone"
                        class="w-full p-6 text-lg bg-maingray/40 border-2 border-transparent rounded-xl outline-none focus:border-maingreen"
                        required />
                </div>

                <button type="submit" class="w-full h-fit px-8 py-6 bg-green-gradient text-white font-bold rounded-xl">
                    {{ $t('form.submit_request') }}
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const phone = ref('');

// Функция для форматирования номера телефона
const formatPhone = () => {
    let formatted = phone.value.replace(/\D/g, '').substring(0, 12); // Убираем все символы, кроме цифр и ограничиваем длину

    if (formatted.length > 0) {
        let template = '+998';
        if (formatted.length > 3) {
            template += ` (${formatted.slice(3, 5)}`;
        }
        if (formatted.length > 5) {
            template += `) ${formatted.slice(5, 8)}`;
        }
        if (formatted.length > 8) {
            template += `-${formatted.slice(8, 10)}`;
        }
        if (formatted.length > 10) {
            template += `-${formatted.slice(10)}`;
        }
        phone.value = template;
    } else {
        phone.value = '+998 ';
    }
};

const submitForm = () => {
    console.log('Имя:', name.value);
    console.log('Телефон:', phone.value);
};
</script>

<style scoped>
.wrapper-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/src/assets/images/home.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.15;
}
</style>