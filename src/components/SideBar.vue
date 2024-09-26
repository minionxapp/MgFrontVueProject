<template>

    <v-navigation-drawer color="blue-lighten-4" v-model="drawer" location="left">
        <list-sidebar :items="items" />
    </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
import ListSidebar from './ListSidebar.vue';

const drawer = ref(false)
const items = ref([
    { text: 'Dashboar', icon: 'mdi-view-dashboard', pathName: 'Home' },
    { text: 'Category', icon: 'mdi-view-list', pathName: 'Category' },
    { text: 'News', icon: 'mdi-newspaper-variant-outline', pathName: 'News' },
    { text: 'Profile', icon: 'mdi-account', pathName: 'Profile' },
])


</script>
