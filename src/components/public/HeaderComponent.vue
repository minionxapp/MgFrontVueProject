<template>
    <v-toolbar app class="bg-blue-lighten-4">
        <router-link to="{name: 'LandingPage'}">
            <span>Jnews</span>

        </router-link>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat v-for="item in menuItems" :key="item.title" :to="{ name: `${item.pathName}` }">
                <v-icon left>{{ item.icon }}</v-icon>
                <span>{{ item.title }}</span>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script setup>
const menuItems = [
    { title: 'Dashboard', icon: 'mdi-mdi-account-plus', pathName: 'Home' },
    { title: 'Category', icon: 'mdi-newspaper', pathName: 'CategoryPublic' },
    { title: 'Login', icon: 'mdi-login', pathName: 'Login' },
    { title: 'Register', icon: 'mdi-mdi-account-plus', pathName: 'Register' }
]
</script>