<template>
    <h3>{{ title }}</h3>
    <ul class="list-unstyled mt-3">
        <li v-for="link in links" :key="link.text">
            <i class="bi bi-chevron-right me-2"></i>
            <span v-if="noLink">{{ link.text }}</span>
            <a v-else :href="link.url">{{ link.text }}</a>
        </li>
    </ul>
</template>

<script setup>
defineProps({
    title: {
        type: String,
    },
    links: {
        type: Array,
        default: () => [],
    },
    noLink: {
        type: Boolean,
        default: false,
    },
});
</script>

<style scoped>
h3 {
    font-size: 0.9em;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}
li {
    font-family: 'Poppins', sans-serif;
    font-size: 0.7em;
    font-weight: 400;
    color: #828282;
    line-height: 1.75em;
    display: flex;
    align-items: flex-start;
    gap: 0.5em;
}

i {
    flex-shrink: 0;
    margin-top: 0.2em;
}

a,
span {
    color: #828282;
    text-decoration: none;
    word-break: break-word;
    line-height: 1.5em;
    flex: 1;
}

a:hover {
    color: #fff;
    cursor: pointer;
}
</style>
