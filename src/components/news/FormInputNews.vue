<template>
    <div class="mt-8">
        <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="90%" rounded="lg">
            <v-form v-model="formInput" @submit.prevent="handleSubmit()">
                <div class="text-subtitle-1 text-medium-emphasis">Name</div>
                <v-text-field v-model="news.title" density="compact" placeholder="Judul Berita" class="my-5"
                    variant="outlined" :rules="titleRules"></v-text-field>

                <v-textarea v-model="news.content" density="compact" class="my-5" label="Content Berita"
                    variant="outlined" :rules="contentRules"></v-textarea>

                <div v-if="categories">
                    <v-select v-model="news.category" class="my-5" :rules="categoryRules" :items="categories"
                        item-title="name" item-value="id" label="category" return-object variant="outlined">
                    </v-select>
                </div>
                <v-btn class="mb-8" :disabled="!formInput" type="submit" color="blue" size="large" variant="tonal"
                    block>
                    Submit
                </v-btn>
            </v-form>
        </v-card>
    </div>
</template>
<script setup>
import { useCategoryStore } from '@/stores/CategoryStore'
// import { useAuthStore } from '@/stores/AuthStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useNewsStore } from '@/stores/NewsStores';

//store
const CategoryStore = useCategoryStore()
const NewsStore = useNewsStore()
//state
const { categories } = storeToRefs(CategoryStore)
const { news, formInput } = storeToRefs(NewsStore)
//action
const { readCategory } = CategoryStore
const { handleSubmit } = NewsStore

//validation
const titleRules = [
    (value) => {
        if (value) return true
        return 'Judul Berita Harus Diisi'
    }
]

// const contentRules[]
const contentRules = [
    (value) => {
        if (value) return true
        return 'Content Berita Harus Diisi'
    }
]
// const categoryRules[]
const categoryRules = [
    (value) => {
        if (value) return true
        return 'category Berita Harus Diisi'
    }
]

onMounted(() => {
    readCategory()
})
</script>
