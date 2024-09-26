<template>
    <v-btn class="ma-2" :color="color" :icon="icon" :href="link" target="#"></v-btn>

</template>

<script setup>
defineProps({
    color: {
        type: String,
        require: true
    },
    icon: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    },
})
</script>