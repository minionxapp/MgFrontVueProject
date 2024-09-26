<template>
    <v-app-bar color="blue-lighten-4" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="$emit('openClose')"></v-app-bar-nav-icon>
        <v-toolbar-title>Admin News</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-logout" color="red" variant="text"></v-btn>
    </v-app-bar>

</template>

<script setup>
defineEmits(['openClose'])
</script>