<template>
    <h1>Halaman Detail CategoryXXXX {{ $route.params.name }}</h1>

    <v-btn @click="BackCategory" class="my-3">Kembali</v-btn>

</template>

<script setup>
import router from '@/router';
// imp ort { useRouter } from 'vue-router';

// const roter = useRouter()

const BackCategory = () => {
    router.push({ name: 'Category' })
}
</script>