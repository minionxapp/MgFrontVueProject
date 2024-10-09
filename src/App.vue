<template>
  <router-view></router-view>
</template>



<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from './stores/AuthStore';
import { RouterView } from 'vue-router';

const auth = useAuthStore()


onMounted(() => {
  auth.userHandler()
})
// import { provide } from 'vue';

// provide('username', 'Mugiarto')

</script>
