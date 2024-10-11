<template>
  <router-view></router-view>
</template>



<script setup>
import { onMounted, provide } from 'vue';
import { useAuthStore } from './stores/AuthStore';
import { RouterView } from 'vue-router';
import { storeToRefs } from 'pinia';

const auth = useAuthStore()
const { currentUser } = storeToRefs(auth)
provide('currentUser', currentUser)

onMounted(() => {
  auth.userHandler()
})
// import { provide } from 'vue';

// provide('username', 'Mugiarto')

</script>
