import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePartnershipStore = defineStore('partnership', () => {
    // State
    const cart = ref(0);
    return { cart };
});
