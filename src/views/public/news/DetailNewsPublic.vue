<template>
    <h1>Detail Berita</h1>
    <div v-if="detailNews">
        <DetailNewsComponent :data="detailNews" />

    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import DetailNewsComponent from '@/components/news/DetailNewsComponent.vue';
import { useNewsStore } from '@/stores/NewsStores';
import { storeToRefs } from 'pinia';


//Register store dan route
const newsStore = useNewsStore()
const route = useRoute()


//state
const { detailNews } = storeToRefs(newsStore)

//action
const { detailHandling } = newsStore


onMounted(() => {
    detailHandling(route.params.id)
})

</script>