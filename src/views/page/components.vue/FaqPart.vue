<template>
    <div class="container py-12">
        <h3 class="text-4xl uppercase text-center font-morice mb-4">
            <span class="text-maingreen"> {{ $t('faq_title1') }}</span> <br>
            {{ $t('faq_title2') }}
        </h3>
        <p class="text-lg text-center mb-10 w-[24rem] mx-auto">{{ $t('faq_subtitle') }}</p>
        <div class="space-y-2">
            <div v-for="(faq, index) in active_lang" :key="index"
                class="py-4 px-6 bg-base-100 rounded-2xl bg-gray-50 cursor-pointer transition-all duration-300"
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
import { onMounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const faqs_ru = [
    { open: false, question: 'Какие услуги предоставляет ваша клининговая компания?', answer: 'Мы предлагаем профессиональную уборку квартир, офисов, загородных домов, химчистку мебели и ковров, мойку окон, а также генеральную и послестроительную уборку.' },
    { open: false, question: 'Какие чистящие средства вы используете?', answer: 'Мы используем только безопасные и гипоаллергенные чистящие средства, которые эффективны в уборке, но не вредят вашему здоровью и окружающей среде.' },
    { open: false, question: 'Как заказать уборку?', answer: 'Вы можете оставить заявку на сайте, позвонить нам или написать в мессенджеры. Наш менеджер уточнит детали заказа и подберет удобное время для уборки.' },
    { open: false, question: 'Сколько времени занимает уборка?', answer: 'Время уборки зависит от площади помещения и выбранных услуг. Например, уборка 2-комнатной квартиры обычно занимает от 2 до 4 часов.' },
    { open: false, question: 'Могу ли я не присутствовать во время уборки?', answer: 'Да, вы можете оставить ключи нашему специалисту или договориться об удобном способе передачи. После уборки мы вернем ключи в заранее оговоренное место.' },
    { open: false, question: 'Как рассчитывается стоимость уборки?', answer: 'Стоимость зависит от площади помещения, степени загрязнения и выбранных услуг. Вы можете воспользоваться нашим онлайн-калькулятором или уточнить цену у менеджера.' },
    { open: false, question: 'Ваши сотрудники проверены?', answer: 'Да, все наши сотрудники проходят тщательный отбор, обучение и проверку перед началом работы. Мы гарантируем надежность и профессионализм каждого специалиста.' },
    { open: false, question: 'Как происходит оплата?', answer: 'Вы можете оплатить услуги наличными, банковской картой или переводом на счет. Возможны варианты предоплаты и оплаты после выполнения работ.' }
];

const faqs_en = [
    { open: false, question: 'What services does your cleaning company provide?', answer: 'We offer professional cleaning services for apartments, offices, country houses, upholstery and carpet cleaning, window washing, as well as general and post-construction cleaning.' },
    { open: false, question: 'What cleaning products do you use?', answer: 'We use only safe and hypoallergenic cleaning products that are effective in cleaning but do not harm your health or the environment.' },
    { open: false, question: 'How can I order a cleaning?', answer: 'You can leave a request on the website, call us, or write to us via messengers. Our manager will clarify the details of the order and choose a convenient time for cleaning.' },
    { open: false, question: 'How long does cleaning take?', answer: 'The time for cleaning depends on the size of the premises and the selected services. For example, cleaning a two-room apartment usually takes 2 to 4 hours.' },
    { open: false, question: 'Can I not be present during the cleaning?', answer: 'Yes, you can leave the keys with our specialist or arrange a convenient way to hand them over. After the cleaning, we will return the keys to the agreed location.' },
    { open: false, question: 'How is the cleaning cost calculated?', answer: 'The cost depends on the area of the premises, the degree of contamination, and the selected services. You can use our online calculator or clarify the price with the manager.' },
    { open: false, question: 'Are your employees verified?', answer: 'Yes, all our employees undergo thorough selection, training, and verification before starting work. We guarantee the reliability and professionalism of each specialist.' },
    { open: false, question: 'How is payment made?', answer: 'You can pay for the services in cash, by bank card, or by transfer to an account. Prepayment and payment after the work is completed are possible.' }
];

const faqs_uz = [
    { open: false, question: 'Sizning tozalash kompaniyangiz qanday xizmatlarni taklif qiladi?', answer: 'Biz kvartiralar, ofislar, xususiy uylar, mebel va gilamlarni kimyoviy tozalash, deraza yuvish, shuningdek, umumiy va qurilishdan keyingi tozalash xizmatlarini taqdim etamiz.' },
    { open: false, question: 'Siz qaysi tozalash vositalarini ishlatasiz?', answer: 'Biz faqat xavfsiz va gippoallergen tozalash vositalaridan foydalanamiz, ular tozalashda samarali, ammo sizning salomatligingizga va atrof-muhitga zarar bermaydi.' },
    { open: false, question: 'Tozalashni qanday buyurtma berish mumkin?', answer: 'Siz bizning veb-saytimizda so\'rov qoldirishingiz, bizga telefon qilishingiz yoki messenjerlar orqali yozishingiz mumkin. Bizning menejerimiz buyurtma tafsilotlarini aniqlaydi va tozalash uchun qulay vaqtni tanlaydi.' },
    { open: false, question: 'Tozalash qancha vaqt oladi?', answer: 'Tozalash vaqti xonadonning maydoni va tanlangan xizmatlarga bog\'liq. Masalan, ikki xonali kvartirani tozalash odatda 2-4 soat davom etadi.' },
    { open: false, question: 'Tozalash jarayonida men mavjud bo\'lmasam bo\'ladimi?', answer: 'Ha, siz bizning mutaxassisimizga kalitlarni qoldirishingiz yoki ularni qanday topshirishni muhokama qilishingiz mumkin. Tozalashdan so\'ng kalitlarni oldindan kelishilgan joyga qaytarib beramiz.' },
    { open: false, question: 'Tozalash narxi qanday hisoblanadi?', answer: 'Narx xonadonning maydoni, ifloslanish darajasi va tanlangan xizmatlarga bog\'liq. Siz bizning onlayn kalkulyatorimizdan foydalanishingiz yoki menejer bilan narxni aniqlashingiz mumkin.' },
    { open: false, question: 'Sizning xodimlaringiz tekshirilganmi?', answer: 'Ha, barcha xodimlarimiz ish boshlashdan oldin sinchkovlik bilan tanlanadi, o\'qitiladi va tekshiriladi. Har bir mutaxassisning ishonchliligi va professionalizmini kafolatlaymiz.' },
    { open: false, question: 'To\'lov qanday amalga oshiriladi?', answer: 'Siz xizmatlar uchun naqd pul, bank kartasi yoki hisob raqamiga o\'tkazish orqali to\'lov qilishingiz mumkin. Oldindan to\'lov va ish tugagandan keyin to\'lov qilish imkoniyatlari mavjud.' }
];

const active_lang = ref(faqs_ru);  // Default language is Russian

watch(() => locale.value, (newLocale) => {
    if (newLocale === 'ru') {
        active_lang.value = faqs_ru;
    } else if (newLocale === 'en') {
        active_lang.value = faqs_en;
    } else if (newLocale === 'uz') {
        active_lang.value = faqs_uz;
    }
});

const toggleFAQ = (index) => {
    active_lang.value.forEach((faq, i) => {
        faq.open = i === index ? !faq.open : faq.open;
    });
};
</script>
