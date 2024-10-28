<template>
    <div v-if="newsData">
        <h1>disini</h1>
        <h1>List Berita Category {{ newsData[0].category.name }} </h1>
        <v-card class="mb-7" v-for="data in newsData" :key="data.id">
            <v-img class="align-end text-white" height="200"
                :src="data.Image ? data.Image : `https://cdn.vuetifyjs.com/images/cards/docks.jpg`" cover>
                <v-card-title>{{ data.title }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4">{{ data.category.name }}
            </v-card-subtitle>

            <v-card-text>
                <div>{{ data.content.substring(0, 30) }}...</div>

            </v-card-text>

            <v-card-actions>
                <v-btn @click="detailNews(data.id)" color="info">Read More</v-btn>

            </v-card-actions>
        </v-card>
    </div>
    <div v-else>
        <h1>Tidak ada berita di kategori ini</h1>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { useRoute, useRouter } from 'vue-router';
// useRoute -->untuk ambil parameter, useRouter->mengarah ke detail berita
import { db } from '@/config/firebase';

//state
const newsData = ref(null)


//register
const route = useRoute()
const router = useRouter()

const detailNews = (paramId) => {
    router.push({ name: 'DetailPublicNews', params: { id: paramId } })
}

const readData = async () => {
    const q = query(collection(db, 'news'), where('category.id', '==', route.params.id))
    const querySnapshot = await getDocs(q)
    newsData.value = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
    })

}

onMounted(() => {
    readData()
})

</script>