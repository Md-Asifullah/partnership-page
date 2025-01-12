<template>
    <div
        class="hero-section d-flex text-center"
        :style="{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }"
    >
        <div class="container mt-5">
            <h5 class="small-title">We Be</h5>
            <h2 class="display-3 fw-bold title">
                YOUR OFFICIAL<br />HYDRATION PARTNER
            </h2>
            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">
                    Stay hydrated with Jantzen Water at your events, big or
                    small.
                </p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <green-button :text="'Apply Now'"></green-button>
                </div>
            </div>
            <img
                src="../../public/hero_img.png"
                class="img-fluid mt-4 mb-5"
                alt="..."
            />
        </div>
    </div>
</template>

<script setup>
import GreenButton from './UI/GreenButton.vue';
import bgImg from '@/assets/section_01_bg.png';
</script>

<style scoped>
.hero-section {
    color: white;
    font-family: 'Poppins', sans-serif;
}
.title {
    margin-top: 0;
}
.small-title {
    font-size: 2em;
    font-weight: 300;
    margin-bottom: 0;
}

img {
    width: 900px;
}
</style>
