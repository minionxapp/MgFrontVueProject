<template>
    <h1>Halaman Dashboard</h1>
    <div v-for="user in usersData.userData" :key="user.name">
        <p>name : {{ user.name }}</p>
        <p>email : {{ user.email }}</p>
        <hr />
    </div>
    <form @submit.prevent="submitData">
        <label htmlFor="name">Name</label><br>
        <input type="text" v-model="usersData.userInput.name" /><br><br>
        <!-- {{ usersData.userInput.name }} -->
        <label htmlFor="email">email</label><br>
        <input type="text" v-model="usersData.userInput.email" /><br><br>
        <!-- {{ usersData.userInput.email }} -->

        <input type="submit">

    </form>

</template>

<script setup>
import { useUserStore } from '@/stores/UserStore';

const usersData = useUserStore()
const submitData = () => {
    usersData.tambahUser()
}
</script>

<style scoped>
input {
    border: 1px solid black;
}
</style>