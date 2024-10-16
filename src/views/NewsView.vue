<template>
    <h1>Halaman News</h1>
    <!-- tombal tambah -->
    <div class="d-flex justify-end my-6">
        <v-btn color="primary" icon="mdi-plus" @click="addNews()" size="large">
        </v-btn>
    </div>
    <v-row justify="center">
        <v-col v-for="data in newsData" :key="data.id" cols="4">
            <v-card>
                <v-img class="align-end text-white" height="300" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    cover>
                    <v-card-title>{{ data.title.substring(0, 50) }}</v-card-title>
                </v-img>

                <v-card-subtitle class="pt-4">
                    {{ data.category.name }}
                </v-card-subtitle>

                <v-card-text>
                    <div>{{ data.content.substring(0, 250) }}</div>
                </v-card-text>

                <v-card-actions>
                    <v-btn color="orange" @click="detail(data.id)">Deatil</v-btn>
                    <v-btn color="blue" @click="update(data.id)">Update</v-btn>

                </v-card-actions>
            </v-card>
        </v-col>

    </v-row>
</template>

<script setup>
// import router from '@/router';
import { useNewsStore } from '@/stores/NewsStores';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
//stores
const newsStores = useNewsStore()

//state
const { newsData } = storeToRefs(newsStores)

//action
const { allNews, clearHandling } = newsStores

const detail = (id) => {
    router.push({ name: 'DetailNews', params: { id: id } })
}

const update = (id) => {
    router.push({ name: 'UpdateNews', params: { id: id } })
}
const addNews = () => {
    router.push({ name: 'CreateNews' })
    clearHandling()
}
onMounted(() => {
    allNews()
})
</script>