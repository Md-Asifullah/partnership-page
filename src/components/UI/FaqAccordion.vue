<template>
    <div class="accordion w-100">
        <div class="accordion-item rounded">
            <div
                class="accordion-header d-flex justify-content-between align-items-start p-3 rounded-top"
            >
                <div class="d-flex align-items-start">
                    <h3 class="mb-0 mt-1 me-4">{{ id }}</h3>
                    <p class="mb-0 question">{{ question }}</p>
                </div>
                <button
                    class="btn"
                    @click="toggleAccordion"
                    aria-expanded="false"
                    aria-controls="accordion-content"
                >
                    <span v-if="isOpen" class="button-icon">
                        <i class="bi bi-x-lg icon"></i>
                    </span>
                    <span v-else class="button-icon">
                        <i class="bi bi-chevron-down icon"></i>
                    </span>
                </button>
            </div>
            <div
                id="accordion-content"
                class="accordion-collapse"
                :style="accordionStyle"
            >
                <div class="accordion-body rounded-bottom">
                    <p class="answer" v-html="answer"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue';

const props = defineProps({
    id: {
        type: Number,
        default: 0,
    },
    question: {
        type: String,
        default: '',
    },
    answer: {
        type: String,
        default: '',
    },
});

const isOpen = ref(false);
const accordionStyle = ref({
    maxHeight: '0',
    overflow: 'hidden',
    transition: 'max-height 0.5s ease-in-out',
});

const toggleAccordion = () => {
    isOpen.value = !isOpen.value;
};

watchEffect(() => {
    if (isOpen.value) {
        accordionStyle.value = {
            maxHeight: '1000px',
            overflow: 'hidden',
            transition: 'max-height 0.5s ease-in-out',
        };
    } else {
        accordionStyle.value = {
            maxHeight: '0',
            overflow: 'hidden',
            transition: 'max-height 0.3s ease-in-out',
        };
    }
});
</script>

<style scoped>
.accordion-collapse {
    overflow: hidden;
}

.accordion-item {
    border: none;
    border-radius: 10px;
    overflow: hidden;
}

.accordion-header,
.accordion-body {
    background-color: #f2f2f2;
}

.icon {
    color: #fff;
    font-weight: 800;
}

h3,
.question {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5em;
    font-weight: 600;
    margin: 0;
}

.answer {
    font-family: 'Poppins', sans-serif;
    font-size: 1em;
    font-weight: 400;
    margin-left: 2em;
}

.accordion-header {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.accordion-body {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.text-white {
    color: white;
}

.btn,
.btn:hover {
    width: 3em;
    height: 3em;
    background-color: #5dcc21;
}

.accordion-header .d-flex {
    width: 100%;
}

.accordion-header .d-flex .me-2 {
    margin-right: 0.5rem;
}

.accordion-header .d-flex p {
    margin-bottom: 0;
}

.accordion-header .d-flex.align-items-start {
    align-items: flex-start;
}

@media (max-width: 768px) {
    .question {
        margin-right: 1em;
    }
}
</style>
