<template>
    <v-list density="compact">
        <v-list-subheader class="my-5 text-h5 text-uppercase">{{ username }}</v-list-subheader>

        <v-list-item v-for="(item, i) in items" :key="i" :value="item" :to="{ name: `${item.pathName}` }"
            color="primary">
            <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
    </v-list>
</template>

<script setup>
import { inject } from 'vue';
defineProps({
    items: {
        type: Object,
        required: true
    }
})

const username = inject('username')
</script>