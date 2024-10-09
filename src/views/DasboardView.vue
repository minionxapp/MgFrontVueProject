<template>
    <div v-if="!currentUser">
        <h1>Loading</h1>
    </div>
    <div v-else>
        <h1>
            Halo {{ currentUser.name }} ({{ currentUser.email }} 👍)
        </h1>

    </div>
</template>


<script setup>
import { useAuthStore } from '@/stores/AuthStore';
import { storeToRefs } from 'pinia';


const auth = useAuthStore();
const { currentUser } = storeToRefs(auth)

</script>
