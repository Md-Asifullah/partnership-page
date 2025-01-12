<template>
    <div class="top-bar">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-md-5"></div>
                <div
                    class="col-12 col-md-7 d-flex justify-content-center align-items-center"
                >
                    <cart-icon class="btn btn-primary me-3"></cart-icon>
                    <router-link to="#" class="ms-3 top-bar-link"
                        >My Account</router-link
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CartIcon from './CartIcon.vue';
</script>

<style scoped>
.top-bar {
    background-color: #000b44;
    color: white;
    padding: 0.5em 0;
}

.top-bar a {
    color: white;
    text-decoration: none;
    font-size: 0.9em;
}

.btn-primary {
    padding: 8px 20px;
}
</style>
