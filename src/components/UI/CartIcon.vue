<template>
    <router-link to="#" type="button" class="btn">
        <i class="bi bi-cart-fill icon"></i>
        <span class="badge ms-2">{{ partnership.cart }}</span>
    </router-link>
</template>

<script setup>
import { usePartnershipStore } from '@/stores/partnership';
const partnership = usePartnershipStore();
</script>

<style scoped>
.icon {
    color: #000;
}
.badge {
    background-color: #d9534f;
}
.btn {
    background: #5dcd21;
    border: 0;
    border-radius: 0;
}
.btn:hover {
    background: #5dcd21;
    border: 0;
}
</style>
