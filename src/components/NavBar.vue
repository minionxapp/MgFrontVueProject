<template>
    <v-app-bar color="blue-lighten-4" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="$emit('openClose')"></v-app-bar-nav-icon>
        <v-toolbar-title>Admin News</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-logout" color="red" variant="text" @click="logoutUser"></v-btn>
    </v-app-bar>

</template>

<script setup>
import { useAuthStore } from '@/stores/AuthStore';
defineEmits(['openClose'])

//store
const auth = useAuthStore()
const { logoutUser } = auth
</script>