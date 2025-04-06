<template>
    <div class="container py-12">
        <h3 class="text-4xl text-center font-morice mb-4">
            <span class="text-maingreen">ОТВЕТЫ </span>
            НА ЧАСТО <br> ЗАДАВАЕМЫЕ ВОПРСОЫ
        </h3>
        <p class="text-lg text-center mb-10">Мы знаем, у вас много вопросов и поэтому - <br>даем ответы.</p>
        <div class="space-y-2">
            <div v-for="(faq, index) in faqs" :key="index"
                class="py-4 px-6  bg-base-100 rounded-2xl bg-gray-50 cursor-pointer transition-all duration-300"
                @click="toggleFAQ(index)">
                <div class="flex justify-between items-center">
                    <h3 class="font-semibold text-lg">{{ faq.question }}</h3>
                    <div class="bg-maingreen transition-transform shadow-xl text-white duration-300 p-2 rounded-full"
                        :class="{ 'rotate-90': faq.open }">
                        <svg class="-rotate-180" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem"
                            viewBox="0 0 24 24">
                            <path fill="currentColor" d="M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z" />
                        </svg>
                    </div>
                </div>
                <transition enter-active-class="transition-all duration-300 ease-in-out"
                    enter-from-class="opacity-0 max-h-0" enter-to-class="opacity-100 max-h-40"
                    leave-active-class="transition-all duration-300 ease-in-out" leave-from-class="opacity-100 max-h-40"
                    leave-to-class="opacity-0 max-h-0">
                    <p v-if="faq.open" class="mt-2 text-gray-600 overflow-hidden ">
                        {{ faq.answer }}
                    </p>
                </transition>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const faqs = ref([
    {
        open: false,
        question: 'Какие услуги предоставляет ваша клининговая компания?',
        answer: 'Мы предлагаем профессиональную уборку квартир, офисов, загородных домов, химчистку мебели и ковров, мойку окон, а также генеральную и послестроительную уборку.'
    },
    {
        open: false,
        question: 'Какие чистящие средства вы используете?',
        answer: 'Мы используем только безопасные и гипоаллергенные чистящие средства, которые эффективны в уборке, но не вредят вашему здоровью и окружающей среде.'
    },
    {
        open: false,
        question: 'Как заказать уборку?',
        answer: 'Вы можете оставить заявку на сайте, позвонить нам или написать в мессенджеры. Наш менеджер уточнит детали заказа и подберет удобное время для уборки.'
    },
    {
        open: false,
        question: 'Сколько времени занимает уборка?',
        answer: 'Время уборки зависит от площади помещения и выбранных услуг. Например, уборка 2-комнатной квартиры обычно занимает от 2 до 4 часов.'
    },
    {
        open: false,
        question: 'Могу ли я не присутствовать во время уборки?',
        answer: 'Да, вы можете оставить ключи нашему специалисту или договориться об удобном способе передачи. После уборки мы вернем ключи в заранее оговоренное место.'
    },
    {
        open: false,
        question: 'Как рассчитывается стоимость уборки?',
        answer: 'Стоимость зависит от площади помещения, степени загрязнения и выбранных услуг. Вы можете воспользоваться нашим онлайн-калькулятором или уточнить цену у менеджера.'
    },
    {
        open: false,
        question: 'Ваши сотрудники проверены?',
        answer: 'Да, все наши сотрудники проходят тщательный отбор, обучение и проверку перед началом работы. Мы гарантируем надежность и профессионализм каждого специалиста.'
    },
    {
        open: false,
        question: 'Как происходит оплата?',
        answer: 'Вы можете оплатить услуги наличными, банковской картой или переводом на счет. Возможны варианты предоплаты и оплаты после выполнения работ.'
    }
]);

const toggleFAQ = (index) => {
    faqs.value.forEach((faq, i) => {
        faq.open = i === index ? !faq.open : false;
    });
};
</script>

<style></style>