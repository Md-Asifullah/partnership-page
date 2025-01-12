<template>
    <div class="container custom-container mt-5">
        <div class="row g-0 mx-auto custom-width">
            <!-- First Column -->
            <div class="col-md-4 first-column">
                <h2>KITA<br />SUPPORT</h2>
                <p class="mt-4 me-3">
                    Sebagai hydration partner, you get complimentary Jantzen
                    Water products and exclusive freebies, plus your logo will
                    be featured on our website, social media, and banyak lagi!
                </p>
                <green-button
                    text="Be Our Hydration Partner"
                    class="mt-2"
                ></green-button>
            </div>

            <!-- Second Column -->
            <div class="col-md-4">
                <img
                    src="@/assets/water-bottle-img.jpg"
                    class="img-fluid"
                    alt="water bottles"
                />
            </div>

            <!-- Third Column -->
            <div class="col-md-4">
                <support-feature
                    :img="featureIcon01"
                    :text="`Free Water,<br />just for you`"
                    :border="'bottom'"
                    :lines="2"
                ></support-feature>
                <support-feature
                    :img="featureIcon02"
                    :text="`Your logo, big big<br />on our site okay`"
                    :border="'bottom'"
                    :lines="2"
                ></support-feature>
                <support-feature
                    :img="featureIcon03"
                    :text="`Best discounts for<br />you, confirm!`"
                    :border="'bottom'"
                    :lines="2"
                ></support-feature>
                <support-feature
                    :img="featureIcon04"
                    :text="`Cool freebies`"
                    :border="'bottom'"
                    :lines="2"
                ></support-feature>
                <support-feature
                    :img="featureIcon05"
                    :text="`VIP invites to join<br/>our happening<br/>events`"
                    :border="'bottom'"
                    :lines="0"
                ></support-feature>
                <support-feature
                    :img="featureIcon06"
                    :text="`We'll share your<br/>story everywhere<br/>on social media`"
                    :border="'no'"
                    :lines="0"
                ></support-feature>
            </div>
        </div>
    </div>
</template>

<script setup>
import GreenButton from './GreenButton.vue';
import SupportFeature from './SupportFeature.vue';
import featureIcon01 from '@/assets/feature-icon-01.png';
import featureIcon02 from '@/assets/feature-icon-02.png';
import featureIcon03 from '@/assets/feature-icon-03.png';
import featureIcon04 from '@/assets/feature-icon-04.png';
import featureIcon05 from '@/assets/feature-icon-05.png';
import featureIcon06 from '@/assets/feature-icon-06.png';
</script>

<style scoped>
h2 {
    text-align: left;
    color: #062399;
    font-size: 3em;
    font-weight: 800;
    font-family: 'Poppins', sans-serif;
    line-height: 0.9em;
}

p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.3em;
}

.border-section {
    border-top: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
    padding: 15px;
}

img.img-fluid {
    max-width: 90%;
    height: auto;
}

@media (min-width: 992px) {
    .custom-width {
        max-width: 70%;
    }
}

@media (max-width: 768px) {
    img.img-fluid {
        width: 50%;
        margin: 0 auto;
        display: block;
    }
    .first-column {
        text-align: center !important;
    }
    .first-column h2 {
        text-align: center !important;
    }
}
</style>
