<template>
    <div class="full-width-bg">
        <div class="container custom-container">
            <div class="row g-0 mx-auto custom-width">
                <div class="col-md-10">
                    <h4>TRY JANTZEN NOW</h4>
                    <h2>Grow with confidence</h2>
                </div>
                <div class="col-md-2 col-sm-6 mt-4">
                    <white-button
                        :text="'STORE'"
                        :link="'https://www.jantzen.com.my/shop/'"
                    ></white-button>
                </div>
            </div>
            <div class="row g-0 mx-auto custom-width">
                <div class="col-6 col-sm-6 col-md-3 mt-4">
                    <footer-link
                        :title="'COMPANY'"
                        :links="firstColumnLinks"
                    ></footer-link>
                </div>
                <div class="col-6 col-sm-6 col-md-3 mt-4">
                    <footer-link
                        :title="'SERVICES / PRODUCTS'"
                        :links="secondColumnLinks"
                    ></footer-link>
                </div>
                <div class="col-6 col-sm-6 col-md-3 mt-4">
                    <footer-link
                        :title="'CONTACT US'"
                        :links="thirdColumnLinks"
                    ></footer-link>
                </div>
                <div class="col-6 col-sm-6 col-md-3 mt-4">
                    <footer-link
                        :title="'OTHER INFO'"
                        :links="forthColumnLinks"
                        :noLink="true"
                    ></footer-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import WhiteButton from './WhiteButton.vue';
import FooterLink from './FooterLink.vue';

const firstColumnLinks = ref([
    { url: 'https://www.jantzen.com.my/about-jantzen/', text: 'About Us' },
    { url: '#', text: 'Covid-19 Preventive' },
    { url: 'https://www.jantzen.com.my/article/', text: 'Articles' },
    {
        url: 'https://www.jantzen.com.my/privacy-policy/',
        text: 'Privacy Policy',
    },
    {
        url: 'https://www.jantzen.com.my/terms_and_conditions/',
        text: 'Terms and conditions',
    },
    {
        url: 'https://www.jantzen.com.my/shipping_return_refund-policy/',
        text: 'Shipping / Return / Refund Policy',
    },
    {
        url: 'https://www.jantzen.com.my/review-from-customer/',
        text: 'Review from Customers',
    },
]);

const secondColumnLinks = ref([
    {
        url: 'https://www.jantzen.com.my/water-delivery-2/',
        text: '11L / 19L Bottled',
    },
    {
        url: 'https://www.jantzen.com.my/water-purifier/',
        text: 'Water Purifier',
    },
    { url: 'https://www.jantzen.com.my/bottled-water/', text: 'Bottled Water' },
    {
        url: 'https://www.jantzen.com.my/retail-partner-2/',
        text: 'Retail partner',
    },
]);

const thirdColumnLinks = ref([
    { url: 'mailto:hello@jantzen.com.my', text: 'Hello@jantzen.com.my' },
    { url: 'https://wa.link/6m25au', text: '012 565 5133' },
    { url: 'tel:60358703616', text: '03 5870 3616' },
    {
        url: 'https://www.google.com/maps?q=no.12,+Jalan+Tpk+2/4,+Taman+Perindustrian+Kinrara,+Puchong,+Selangor,+Malaysia',
        text: 'No. 12, Jalan TPK 2/4 Taman Perindustrian Kinrara Puchong',
    },
]);

const forthColumnLinks = ref([
    { url: '#', text: 'Jant Marketing Sdn Bhd' },
    { url: '#', text: 'Reg. No. 0363689-T' },
    { url: '#', text: 'Mon - Fri: 9am-6pm' },
    {
        url: '#',
        text: 'Weekends: Off',
    },
    { url: '#', text: 'Public Holiday: Off' },
]);
</script>

<style scoped>
h2 {
    font-size: 2.5em;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
}
h4 {
    font-size: 0.7em;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

.full-width-bg {
    background: #000000;
    color: #fff;
    margin: 0;
    padding-top: 3em;
    padding-bottom: 3em;
}

@media (min-width: 992px) {
    .custom-width {
        max-width: 70%;
    }
}

@media (max-width: 576px) {
    .custom-width .col-6 {
        margin-bottom: 1rem;
    }
}
</style>
