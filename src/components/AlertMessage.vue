<template>
    <v-alert :type=typevalue closable close-label="Close Alert" variant="tonal">
        <slot name="title"></slot>
        <slot></slot>
    </v-alert>
</template>

<script setup>
defineProps({
    typevalue: {
        type: String,
        required: true
    }
})
</script>