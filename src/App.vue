<template>
    <div class="wrapper">
        <the-header></the-header>
        <router-view></router-view>
        <the-footer></the-footer>
    </div>
</template>

<script setup>
import TheHeader from './components/UI/TheHeader.vue';
import TheFooter from './components/UI/TheFooter.vue';
</script>

<style scoped></style>
