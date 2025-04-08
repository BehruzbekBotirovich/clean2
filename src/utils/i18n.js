// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        hello: 'Hello',
        selectLanguage: 'Select Language',
        selectedLanguage: 'Selected language: {lang}',
    },
    ru: {
        company_title: "Клининговая компания в Ташкенте",
        order: "Заказать Уборку",
        cleaning: "Уборка",
        place: "г.Ташкент Узбекистан",
        write_us: "Написать нам",
        menu: {
            title: "Меню",
            home: "Главная",
            works: "Наши работы",
            services: "Услуги",
            advantages: "Преимущества",
            contacts: "Контакты"
        },
        banner: {
            garanty: '<span class="text-maingreen">Гарантируем </span> чистоту и безопасность вашего дома и вашей семьи',
            flat: "Квартир",
            offices: "Домов и офисов",
            german_tools: "Немецкая оборудования",
            profy_cleaner: "Профессионалыние клинеры",
            effectiv_service: "Эффективный сервис для",
            bug_fix: "избавления от вредителей",
            cleaning_all: "Уборка от пола до полатка",
            price: "по выгодным ценам",
            animal_free: "Абсолютно безопасно для",
            safe: "детей и домашних животных",
            discount: "При первом заказе",
            discount_per: "скидка 10%",
            all_work: "Все выди работ",
            all_time: "В любое время суток",
            payafter: "Оплата после работы",
            cleaning_description: "Берёмся за любые виды <br>уборки на любых объектах",
            cleaning_description2: '<span class="text-maingreen">Оставьте заявку</span> в удобное <br> для вас время.',
            cleaning_description3: "Без предоплаты. Вы платите только <br> за выполненную работу."
        },
        banner_slider: {
            logan: "20 ЛЕТ ПОМОГАЕМ ВАМ И ВАШЕМУ ДОМУ <br> БЫТЬ ЧИСТЫМИ И ОПРЯТНЫМИ",
            title: 'BioClean</span> - кампания, предоставляющая услуги по уборке и поддержанию чистоты в помещениях различного назначения.</p>',
            clear_flat: ' <span class="text-maingreen">Чистота в квартире  </span > <br> - наша забота'
        },
        // serives cards
        cards: {
            services_title: '<span class="text-maingreen">Выди </span> наших услуг',
            general_cleaning: "Генеральная уборка",
            after_repair: "Уборка после ремонта",
            facade_washing: "Мойка фасадов",
            upholstery_cleaning: "Химчистка ковров и мебели",
            brick_cleaning: "Химчистка брюшчатки",
            disinfection_cleaning: "Уборка после дезинфекции",
            general_cleaning_desc: "Генеральная уборка - это комплексная уборка, которая включает в себя все аспекты чистоты и порядка в вашем доме или офисе.",
            after_repair_desc: "Уборка после ремонта - профессиональная очистка помещений от строительной пыли, остатков материалов и загрязнений.",
            facade_washing_desc: "Очистка внешних стен зданий от загрязнений, пыли и грязи.",
            upholstery_cleaning_desc: "Глубокая чистка, устранение пятен и неприятных запахов.",
            brick_cleaning_desc: "Удаление грязи, налета и плесени с плитки, глубокая чистка, устранение пятен.",
            disinfection_cleaning_desc: "Обработка помещений от вирусов, бактерий и аллергенов."

        },

        works_gallery: '<span class="text-maingreen">ГАЛЕРЕЯ</span> НАШИХ РАБОТ',

    },

    uz: {
        company_title: "Toshkentdagi tozalash kompaniyasi",
        order: "Tozalashga buyurtma berish",
        cleaning: "Tozalash hizmati",
        place: "Toshkent shahri, O‘zbekiston",
        write_us: "Bizga yozing",
        menu: {
            title: "Menyu",
            home: "Bosh sahifa",
            works: "Bizning ishlar",
            services: "Xizmatlar",
            advantages: "Afzalliklar",
            contacts: "Aloqa"
        },
        banner: {
            garanty: '<span class="text-maingreen">Kafolatlaymiz</span> uyingiz va oilangiz xavfsizligi va tozaligini',
            flat: "Kvartiralar",
            offices: "Uylar va ofislar",
            german_tools: "Germaniya uskunalari",
            profy_cleaner: "Professional tozalovchilar",
            effectiv_service: "Samarali xizmat",
            bug_fix: "zararkunandalardan xalos bo'lish uchun",
            cleaning_all: "Polatdan shiftgacha tozalash",
            price: "qulay narxlarda",
            animal_free: "Mutlaqo xavfsiz",
            safe: "bolalar va uy hayvonlari uchun",
            discount: "Birinchi buyurtmada",
            discount_per: "10% chegirma",
            all_work: "Barcha turdagi ishlar",
            all_time: "Kunning istalgan vaqtida",
            payafter: "Ish tugagandan keyin to‘lov",
            cleaning_description: "Har qanday <br> obyektda tozalash xizmatlarini ko'rsatamiz",
            cleaning_description2: '<span class="text-maingreen">Ariza qoldiring</span> sizga qulay <br> vaqtda.',
            cleaning_description3: "Oldindan to'lov yo'q. Siz faqat <br> bajarilgan ish uchun to'laysiz."
        },
        banner_slider: {
            logan: "20 YILDAN BERİ SIZGA VA UYINGIZGA <br> TOZALIKNI SAQLASHDA YORDAM BERAMIZ",
            title: 'BioClean</span> — turli xonadonlar uchun tozalash va tozalikni saqlash xizmatlarini taqdim etuvchi kompaniya.</p>',
            clear_flat: '<span class="text-maingreen">Kvartirada tozalik</span> <br> — bizning g‘amxo‘rligimiz'
        },
        // serives cards
        cards: {
            services_title: "<span class='text-maingreen'>Xizmatlarimiz  </span> turlari",
            general_cleaning: "General tozalash",
            after_repair: "Ta'mirdan keyingi tozalash",
            facade_washing: "Fasadlarni yuvish",
            upholstery_cleaning: "Gilamlar va mebellarni kimyoviy tozalash",
            brick_cleaning: "Bruschatkani kimyoviy tozalash",
            disinfection_cleaning: "Dezinfektsiyadan keyingi tozalash",
            general_cleaning_desc: "General tozalash - bu uy yoki ofisingizdagi barcha tozalik va tartibni o'z ichiga olgan kompleks tozalash.",
            after_repair_desc: "Ta'mirdan keyingi tozalash - bu xonalarni qurilish changi va material qoldiqlardan tozalash.",
            facade_washing_desc: "Bino devorlarining tashqi qismini tozalash.",
            upholstery_cleaning_desc: "Chuqur tozalash, dog'lar va yoqimsiz hidlarni bartaraf etish.",
            brick_cleaning_desc: "Plyonkalarni tozalash, chang va chiriyotganlarni bartaraf etish.",
            disinfection_cleaning_desc: "Xonalarni viruslar, bakteriyalar va allergenlardan tozalash."
        },
        works_gallery: '<span class="text-maingreen">BIZNING ISHLAR</span> GALLEREYASI',

    },

    en: {
        company_title: "Cleaning company in Tashkent",
        order: "Order Cleaning",
        cleaning: "Cleaning",
        place: "Tashkent city, Uzbekistan",
        write_us: "Write to us",
        menu: {
            title: "Menu",
            home: "Home",
            works: "Our Works",
            services: "Services",
            advantages: "Advantages",
            contacts: "Contacts"
        },
        banner: {
            garanty: '<span class="text-maingreen">We guarantee</span> the cleanliness and safety of your home and family',
            flat: "Apartments",
            offices: "Houses and offices",
            german_tools: "German equipment",
            profy_cleaner: "Professional cleaners",
            effectiv_service: "Effective service for",
            bug_fix: "getting rid of pests",
            cleaning_all: "Cleaning from floor to ceiling",
            price: "at affordable prices",
            animal_free: "Absolutely safe for",
            safe: "children and pets",
            discount: "On the first order",
            discount_per: "10% discount",
            all_work: "All types of work",
            all_time: "At any time of day",
            payafter: "Payment after work",
            cleaning_description: "We offer cleaning services <br> for any type of objects",
            cleaning_description2: '<span class="text-maingreen">Leave a request</span> at a convenient <br> time for you.',
            cleaning_description3: "No prepayment required. You pay only <br> for the work done."
        },
        banner_slider: {
            logan: "FOR 20 YEARS WE HAVE BEEN HELPING YOU AND YOUR HOME <br> TO STAY CLEAN AND TIDY",
            title: 'BioClean</span> - a company providing cleaning and maintenance services for various types of premises.</p>',
            clear_flat: '<span class="text-maingreen">Cleanliness in the apartment</span> <br> - our care'
        },

        // serives cards
        cards: {
            services_title: "Xizmatlarimiz turlari",
            general_cleaning: "General tozalash",
            after_repair: "Ta'mirdan keyingi tozalash",
            facade_washing: "Fasadlarni yuvish",
            upholstery_cleaning: "Koverlar va mebellarni kimyoviy tozalash",
            brick_cleaning: "Bruschatkani kimyoviy tozalash",
            disinfection_cleaning: "Dezinfektsiyadan keyingi tozalash",
            general_cleaning_desc: "General tozalash - bu uy yoki ofisingizdagi barcha tozalik va tartibni o'z ichiga olgan kompleks tozalash.",
            after_repair_desc: "Ta'mirdan keyingi tozalash - bu xonalarni qurilish changi va material qoldiqlardan tozalash.",
            facade_washing_desc: "Bino devorlarining tashqi qismini tozalash.",
            upholstery_cleaning_desc: "Chuqur tozalash, dog'lar va yoqimsiz hidlarni bartaraf etish.",
            brick_cleaning_desc: "Plyonkalarni tozalash, chang va chiriyotganlarni bartaraf etish.",
            disinfection_cleaning_desc: "Xonalarni viruslar, bakteriyalar va allergenlardan tozalash."
        },
        works_gallery: '<span class="text-maingreen">GALLERY OF</span> OUR WORKS',

    }

};

const i18n = createI18n({
    locale: 'en', // Устанавливаем язык по умолчанию
    messages,
});

export default i18n;