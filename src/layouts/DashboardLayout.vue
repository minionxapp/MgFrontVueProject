<!-- //pindahkan dari app. -->
<template>
    <v-layout>
        <!--  sidebar-->
        <Side-bar v-model="drawer" />
        <!-- Navbar -->
        <nav-bar @openClose="drawerOpenClose" />

        <!-- main -->
        <v-main style="height: 500px;">
            <v-card-text>
                <router-view></router-view>
            </v-card-text>
        </v-main>
    </v-layout>
</template>



<script setup>
import { ref, provide } from 'vue';
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
// imp ort AlertMessage from './components/AlertMessage.vue';

const drawer = ref(false)
// const showError = ref(false)
// const showMotivation = ref(false)

provide('username', 'Mugiarto')

const drawerOpenClose = () => {
    drawer.value = !drawer.value
}


</script>