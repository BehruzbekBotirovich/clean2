<template>
    <nav>
        <ul>
            <li @click="scrollTo('home')" class="cursor-pointer font-semibold">
                {{ $t('menu.home') }}
            </li>
            <li @click="scrollTo('works')" class="cursor-pointer text-gray-400">
                {{ $t('menu.works') }}
            </li>
            <li @click="scrollTo('services')" class="cursor-pointer text-gray-400">
                {{ $t('menu.services') }}
            </li>
            <li @click="scrollTo('cloud')" class="cursor-pointer text-gray-400">
                {{ $t('menu.cloud') }}
            </li>
            <li @click="scrollTo('contacts')" class="cursor-pointer text-gray-400">
                {{ $t('menu.contacts') }}
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

</script>