<template>
    <v-app>
        <!-- Header -->
        <header-component />
        <v-container style="min-height: 100vh;" class="my-10">
            <router-view></router-view>
        </v-container>

        <footer-component />
    </v-app>
</template>
<script setup>
import HeaderComponent from '@/components/public/HeaderComponent.vue';
import FooterComponent from '@/components/public/FooterComponent.vue';
</script>

<style>
a {
    text-decoration: none;
    cursor: pointer;
}
</style>