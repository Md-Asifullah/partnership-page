<template>
    <div class="row align-items-center align-items-center" :class="borderClass">
        <div class="col-4">
            <img :src="img" alt="Example Image" class="img-fluid" />
        </div>
        <div class="col-8">
            <p v-html="text" :class="topSpace"></p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
    img: {
        type: String,
        default: '',
    },
    text: {
        type: String,
        default: '',
    },
    border: {
        type: String,
        default: 'both',
    },
    lines: {
        type: Number,
        default: 0,
    },
});

const borderClass = computed(() => {
    if (props.border === 'bottom') {
        return 'border-bottom';
    } else if (props.border === 'top') {
        return 'border-top';
    } else if (props.border === 'both') {
        return 'border-both';
    } else if (props.border === 'no') {
        return 'border-no';
    } else {
        return 'border-both';
    }
});

const topSpace = computed(() => {
    console.log(props.space);
    if (props.lines === 2) {
        return 'two-space';
    } else {
        return 'more-space';
    }
});
</script>

<style scoped>
p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.3em;
    font-weight: 600;
    line-height: 1.2em;
}
.border-both {
    border-top: 1.5px solid #000;
    border-bottom: 1.5px solid #000;
    padding-top: 1em;
    padding-bottom: 1em;
}
.border-bottom {
    border-bottom: 1.5px solid #000 !important;
    padding-top: 1em;
    padding-bottom: 1em;
}
.border-top {
    border-top: 1.5px solid #000 !important;
    padding-top: 1em;
    padding-bottom: 1em;
}
.border-no {
    padding-top: 1em;
    padding-bottom: 1em;
}
.two-space {
    margin-top: 0.7em;
}
.more-space {
    margin-top: 1em;
}
</style>
