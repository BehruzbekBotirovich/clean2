    <template>
        <section id="order_form" class="relative">
            <div class="wrapper-img"></div>
            <div class="container py-16 relative z-10">
                <h3 class="font-morice text-4xl uppercase text-center">
                    <span class="text-maingreen">{{ $t('form.inquiry_interest') }}</span><br>
                    {{ $t('form.leave_request') }}
                </h3>
                <form @submit.prevent="submitForm"
                    class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 mt-12 container">
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

                    <button type="submit" :disabled="isLoading"
                        class="flex gap-2 col-span-2 md:col-span-1 items-center justify-center hover:cursor-pointer  w-full h-fit px-8 py-6 bg-green-gradient text-white font-bold rounded-xl">
                        {{ $t('form.submit_request') }}
                        <icon-loading-spinner v-if="isLoading" />
                    </button>
                </form>
            </div>
        </section>

        <div v-if="showAlert" class="alert_custom">
            <span> Успешно отправлено!</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" fill-rule="evenodd"
                    d="M7 2a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5zm8.73 8.684a1 1 0 1 0-1.46-1.368l-3.083 3.29l-1.523-1.353a1 1 0 0 0-1.328 1.494l2.25 2a1 1 0 0 0 1.393-.063z"
                    clip-rule="evenodd" />
            </svg>
        </div>
    </template>

<script setup>
import { ref } from 'vue';
import IconLoadingSpinner from '@/components/IconLoadingSpinner.vue';
const showAlert = ref(false)
const name = ref('');
const phone = ref('');
const isLoading = ref(false);

// Форматирование номера телефона
const formatPhone = () => {
    let formatted = phone.value.replace(/\D/g, '').substring(0, 12);

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

const submitForm = async () => {
    isLoading.value = true;

    const message = `
📥 Новый заказ:
👤 Имя: ${name.value}
📞 Телефон: ${phone.value}
    `;

    const chatIds = ['5331352357', '7509893177'];
    const token = '7053229413:AAFfA3CZel9QwoO16Y2TaTYPjv6B7ZNWsgg';
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
        for (const chatId of chatIds) {
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message
                })
            });
        }

        showAlert.value = true;
        name.value = '';
        phone.value = '';
        setTimeout(() => {
            showAlert.value = false
        }, 2000)
    } catch (err) {
        console.error(err);
        alert('Ошибка отправки.');
    } finally {
        isLoading.value = false;
    }
};
</script>

<style scoped>
.alert_custom {
    position: fixed;
    right: 1rem;
    top: 2.5rem;
    background: #AED287;
    color: white;
    padding: 4px 10px;
    border-radius: 10px;
    border: 2px solid #9ebf7b;
    display: flex;
    gap: 10px;
    align-items: center;
}

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