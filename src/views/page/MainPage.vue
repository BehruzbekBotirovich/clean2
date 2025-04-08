<template>
    <banner-head />
    <banner-slider />
    <services-cards />
    <image-slider />
    <comment-page />
    <!-- <clients-view /> -->
    <call-form />
    <faq-part />
    <map-view />
    <footer-component />
</template>

<script setup>
import BannerHead from './components.vue/BannerHead.vue';
import BannerSlider from './components.vue/BannerSlider.vue';
import ServicesCards from './components.vue/ServicesCards.vue';
import ImageSlider from './components.vue/ImageSlider.vue';
import CommentPage from './components.vue/CommentPage.vue';
import ClientsView from './components.vue/ClientsView.vue';
import FaqPart from './components.vue/FaqPart.vue';
import MapView from './components.vue/MapView.vue';
import CallForm from './components.vue/CallForm.vue';
import FooterComponent from '@/components/Footer.vue';

import { ref } from 'vue';
</script>

<style scoped></style>