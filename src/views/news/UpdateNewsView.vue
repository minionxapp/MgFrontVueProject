<template>
    <h1>Update News</h1>
    <form-input-news />
</template>

<script setup>
import FormInputNews from '@/components/news/FormInputNews.vue';
import { useRoute } from 'vue-router';
import { useNewsStore } from '@/stores/NewsStores';
import { onMounted } from 'vue';

//store
const newsStore = useNewsStore()

//route
const route = useRoute()

//action
const { updateHandling } = newsStore

onMounted(() => {
    updateHandling(route.params.id)
})


</script>