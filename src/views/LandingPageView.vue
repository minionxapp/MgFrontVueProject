<template>
    <h1 class="my-3">List Berita</h1>
    <v-divider class="border-opacity" color="info"></v-divider>
    <v-row class="my-3">
        <v-col cols="12" v-for="data in newsData" :key="data.id">
            <v-card class="mx-auto">
                <v-img class="align-end text-white" height="400"
                    :src="data.Image ? data.Image : `https://cdn.vuetifyjs.com/images/cards/docks.jpg`" cover>
                    <v-card-title>{{ data.title.substring(0, 200) }}</v-card-title>
                </v-img>

                <v-card-subtitle class="pt-4">
                    {{ data.category.name }}
                </v-card-subtitle>

                <v-card-text>
                    <div>{{ data.content.substring(0, 200) }}.....</div>

                </v-card-text>

                <v-card-actions>
                    <v-btn color="info" varian="elevated" type="button" text="Share" @click="detailNews(data.id)">Read
                        More</v-btn>
                    <v-btn color="orange" text="Explore"></v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
import { useNewsStore } from '@/stores/NewsStores';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

//store
const newsStore = useNewsStore()
const router = useRouter()
//aksi
const { allNews } = newsStore
const detailNews = (id) => {
    router.push({ name: 'DetailPublicNews', params: { id: id } })
}

// state
const { newsData } = storeToRefs(newsStore)

onMounted(() => {
    allNews()
})
</script>