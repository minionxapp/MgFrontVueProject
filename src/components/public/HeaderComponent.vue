<template>
    <v-toolbar app class="bg-blue-lighten-4">
        <router-link to="{name: 'LandingPage'}">
            <span>Jnews</span>

        </router-link>
        <v-spacer></v-spacer>
        <v-toolbar-items v-if="!currentUser">
            <v-btn flat v-for="item in menuItems" :key="item.title" :to="{ name: `${item.pathName}` }">
                <v-icon left>{{ item.icon }}</v-icon>
                <span>{{ item.title }}</span>
            </v-btn>
        </v-toolbar-items>
        <v-toolbar-items v-else>
            <v-btn flat v-for="item in menuAdmins" :key="item.title" :to="{ name: `${item.pathName}` }">
                <v-icon left>{{ item.icon }}</v-icon>
                <span>{{ item.title }}</span>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script setup>
import { inject } from 'vue';

const currentUser = inject('currentUser')
const menuItems = [
    { title: 'Dashboard', icon: 'mdi-mdi-account-plus', pathName: 'Dashboard' },
    { title: 'Category', icon: 'mdi-newspaper', pathName: 'CategoryPublic' },
    { title: 'Login', icon: 'mdi-login', pathName: 'Login' },
    { title: 'Register', icon: 'mdi-mdi-account-plus', pathName: 'Register' }
]

const menuAdmins = [
    { title: 'Category', icon: 'mdi-newspaper', pathName: 'CategoryPublic' },
    { title: 'Dashboard', icon: 'mdi-vuew-dashboard', pathName: 'Dashboard' },

]
</script>