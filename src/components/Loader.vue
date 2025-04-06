<template>
    <button id="logo" type="button" class="mx-auto block" @click="replay">
        <svg ref="svgRef" class="logo" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"
            stroke-linejoin="round" width="600" height="120" viewBox="0 0 600 120" role="img" aria-label="BioClean"
            :class="{ 'logo--running': isRunning }">
            <g class="logo__group">
                <text x="0" y="90" class="logo__letter" font-size="80" font-family="Arial, sans-serif">B</text>
                <text x="60" y="90" class="logo__letter" font-size="80" font-family="Arial, sans-serif">i</text>
                <text x="100" y="90" class="logo__letter" font-size="80" font-family="Arial, sans-serif">o</text>
                <text x="170" y="90" class="logo__letter" font-size="80" font-family="Arial, sans-serif">C</text>
                <text x="250" y="90" class="logo__letter" font-size="80" font-family="Arial, sans-serif">l</text>
                <text x="280" y="90" class="logo__letter" font-size="80" font-family="Arial, sans-serif">e</text>
                <text x="350" y="90" class="logo__letter" font-size="80" font-family="Arial, sans-serif">a</text>
                <text x="420" y="90" class="logo__letter" font-size="80" font-family="Arial, sans-serif">n</text>
            </g>
        </svg>
    </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const svgRef = ref(null)
const isRunning = ref(true)

const replay = () => {
    isRunning.value = false
    void svgRef.value?.offsetWidth // force reflow
    isRunning.value = true
}

onMounted(() => {
    replay()
})
</script>

<style scoped>
.logo {
    width: 100%;
    max-width: 600px;
    height: auto;
    display: block;
}

.logo__letter {
    stroke-dasharray: 240;
    stroke-dashoffset: 240;
    animation: draw 1s ease forwards;
    fill: none;
}

.logo--running .logo__letter {
    animation-name: draw;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
}

.logo__letter:nth-child(1) {
    animation-delay: 0s;
}

.logo__letter:nth-child(2) {
    animation-delay: 0.1s;
}

.logo__letter:nth-child(3) {
    animation-delay: 0.2s;
}

.logo__letter:nth-child(4) {
    animation-delay: 0.3s;
}

.logo__letter:nth-child(5) {
    animation-delay: 0.4s;
}

.logo__letter:nth-child(6) {
    animation-delay: 0.5s;
}

.logo__letter:nth-child(7) {
    animation-delay: 0.6s;
}

.logo__letter:nth-child(8) {
    animation-delay: 0.7s;
}

@keyframes draw {
    to {
        stroke-dashoffset: 0;
    }
}
</style>