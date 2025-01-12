<template>
    <div class="container custom-container mt-5 mb-5">
        <div class="row g-0 mx-auto custom-width">
            <div class="col-md-12 img-column mb-3"><h2>FAQ</h2></div>
            <faq-accordion
                :id="1"
                :question="`Where can I apply for sponsorship or partnership with
                        Jantzen ah?`"
                :answer="`Just scroll up to apply or click on the link to access Jantzen's Sponsorship Request Form: <a href='https://general.jantzen.my/sponsorship'>https://general.jantzen.my/sponsorship</a>`"
            ></faq-accordion>
            <faq-accordion
                class="mt-3"
                :id="2"
                :question="`We're looking for monetary support for our event. Does Jantzen do it?`"
                :answer="`Just scroll up to apply or click on the link to access Jantzen's Sponsorship Request Form: <a href='https://general.jantzen.my/sponsorship'>https://general.jantzen.my/sponsorship</a>`"
            ></faq-accordion>
            <faq-accordion
                class="mt-3"
                :id="3"
                :question="`What types of events or activities does Jantzen Water support?`"
                :answer="`Just scroll up to apply or click on the link to access Jantzen's Sponsorship Request Form: <a href='https://general.jantzen.my/sponsorship'>https://general.jantzen.my/sponsorship</a>`"
            ></faq-accordion>
            <faq-accordion
                class="mt-3"
                :id="4"
                :question="`What are the eligibility criteria for becoming a Jantzen Water sponsor or partner?`"
                :answer="`Just scroll up to apply or click on the link to access Jantzen's Sponsorship Request Form: <a href='https://general.jantzen.my/sponsorship'>https://general.jantzen.my/sponsorship</a>`"
            ></faq-accordion>
            <faq-accordion
                class="mt-3"
                :id="5"
                :question="`What kind of commitment is expected from sponsors and partners?`"
                :answer="`Just scroll up to apply or click on the link to access Jantzen's Sponsorship Request Form: <a href='https://general.jantzen.my/sponsorship'>https://general.jantzen.my/sponsorship</a>`"
            ></faq-accordion>
            <faq-accordion
                class="mt-3"
                :id="6"
                :question="`How long does the review process take after I apply?`"
                :answer="`Just scroll up to apply or click on the link to access Jantzen's Sponsorship Request Form: <a href='https://general.jantzen.my/sponsorship'>https://general.jantzen.my/sponsorship</a>`"
            ></faq-accordion>
            <faq-accordion
                class="mt-3"
                :id="7"
                :question="`How will Jantzen Water's products be delivered for events?`"
                :answer="`Just scroll up to apply or click on the link to access Jantzen's Sponsorship Request Form: <a href='https://general.jantzen.my/sponsorship'>https://general.jantzen.my/sponsorship</a>`"
            ></faq-accordion>
            <faq-accordion
                class="mt-3"
                :id="8"
                :question="`Who can I contact for more information or specific inquiries about the sponsorship program?`"
                :answer="`Just scroll up to apply or click on the link to access Jantzen's Sponsorship Request Form: <a href='https://general.jantzen.my/sponsorship'>https://general.jantzen.my/sponsorship</a>`"
            ></faq-accordion>
        </div>
    </div>
</template>

<script setup>
import FaqAccordion from './FaqAccordion.vue';
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
@media (min-width: 992px) {
    .custom-width {
        max-width: 70%;
    }
}
</style>
