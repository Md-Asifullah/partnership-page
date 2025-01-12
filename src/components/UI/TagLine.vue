<template>
    <div class="d-flex justify-content-center align-items-center">
        <p class="mt-3">
            {{ text }}
        </p>
    </div>
</template>

<script setup>
defineProps({
    text: {
        type: String,
    },
});
</script>

<style scoped>
div {
    background: #000b44;
    color: #fff;
    height: 2.5em;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 0.8em;
}
</style>
