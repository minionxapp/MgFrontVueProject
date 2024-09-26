<template>
  <router-view></router-view>
</template>



<script setup>
import { provide } from 'vue';
import { RouterView } from 'vue-router';

provide('username', 'Mugiarto')

</script>
