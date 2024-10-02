<template>
    <form-auth-component :isLogin="isLogin" />
</template>

<script setup>
import FormAuthComponent from '@/components/public/FormAuthComponent.vue';
const isLogin = true

</script>