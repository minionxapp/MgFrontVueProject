<template>
    <h1>Halaman Profile</h1>
    <div v-for="user in usersData.userData" :key="user.name">
        <p>name : {{ user.name }}</p>
        <p>email : {{ user.email }}</p>
        <hr />

    </div>
    <v-divider></v-divider>
    <!-- <v- btn cla ss="ma-2" color="red" icon="mdi-youtube"></v-btn>
    <v-btn class="ma-2" color="blue" icon="mdi-linkedin"></v-btn>
    <v-btn class="ma-2" color="red" icon="mdi-instagram"></v-btn> -->

    <icon-link-component color="red" icon="mdi-youtube"
        link="https://www.youtube.com/watch?v=SNFHj5qlW18&list=TLPQMTcwOTIwMjQ39g8MK2ED3A&index=4">
    </icon-link-component>
    <icon-link-component color="blue" icon="mdi-linkedin" link="https://www.linkedin.com/learning/?u=152136436">
    </icon-link-component>
    <icon-link-component color="red" icon="mdi-instagram" link="https://www.instagram.com/"> </icon-link-component>


</template>

<script setup>
import IconLinkComponent from '@/components/IconLinkComponent.vue';
import { useUserStore } from '@/stores/UserStore';

const usersData = useUserStore()

</script>