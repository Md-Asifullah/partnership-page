<template>
    <a :href="link" type="button" class="btn btn-lg px-2 gap-3">{{ text }}</a>
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
a {
    background: #ffffff;
    color: #000000;
    border-radius: 40px;
    font-size: 0.8em;
    font-weight: 600;
    width: 100%;
}
a:hover {
    background: #00ce1b;
    color: #fff;
}

@media (max-width: 768px) {
    a {
        width: 50%;
        margin: 0 auto;
        display: block;
    }
}
</style>
