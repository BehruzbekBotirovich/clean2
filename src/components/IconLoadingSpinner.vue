<template>
    <svg class="loading_spinner" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem"
        viewBox="0 0 8 8">
        <path fill="currentColor"
            d="M4 0C1.8 0 0 1.8 0 4s1.8 4 4 4c1.1 0 2.12-.43 2.84-1.16l-.72-.72c-.54.54-1.29.88-2.13.88c-1.66 0-3-1.34-3-3s1.34-3 3-3c.83 0 1.55.36 2.09.91L4.99 3h3V0L6.8 1.19C6.08.47 5.09 0 3.99 0z" />
    </svg>
</template>

<script setup>

</script>

<style scoped>
.loading_spinner {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>