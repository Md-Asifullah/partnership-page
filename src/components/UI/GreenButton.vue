<template>
    <button type="button" class="btn btn-lg px-4 gap-3">{{ text }}</button>
</template>

<script setup>
defineProps({
    text: {
        type: String,
    },
    link: {
        type: String,
        default: '#',
    },
});
</script>

<style scoped>
button {
    background: #00ce1b;
    color: #fff;
    border-radius: 40px;
    font-size: 0.9em;
    font-weight: 600;
}
button:hover {
    background: #000000;
    color: #fff;
}
</style>
