<template>
    <h1>Halaman Category</h1>
    <div class="d-flex justify-end my-6">
        <v-btn color="primary" icon="mdi-plus" size="large" @click="dialog = true" />
    </div>
    <dialog-component v-model="dialog">
        <template #title>
            add category
        </template>
        <template #content>
            <v-form @submit.prevent="onSubmitData" v-model="form">
                <v-text-field class="mb-1" :rules="nameRules" v-model="category.name" label="Name"></v-text-field>
                <!-- {{ category.name }} -->
                <v-textarea class="mb-1" :rules="descriptionRules" v-model="category.description"
                    label="Description"></v-textarea>
                <!-- {{ category.description }} -->
                <v-btn :disabled="!form" block color="success" variant="elevated" size="large"
                    type="submit">tambah</v-btn>
            </v-form>
        </template>
    </dialog-component>

    <!-- Table -->
    <v-table>
        <thead>
            <tr>
                <th class="text-left" id="no">No</th>
                <th class="text-left" id="Category">Category</th>
                <th class="text-center" id="Action">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in categories" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td class="text-center"> <v-btn size="x-small" color="info" icon="mdi-information"></v-btn>
                    <v-btn size="x-small" color="primary" icon="mdi-pencil" class="mx-3"></v-btn>
                    <v-btn size="x-small" color="error" icon="mdi-trash-can"></v-btn>
                </td>
            </tr>
        </tbody>
    </v-table>

</template>

<script setup>
import DialogComponent from '@/components/dashboard/DialogComponent.vue';
import { useCategoryStore } from '@/stores/CategoryStore';
import { storeToRefs } from 'pinia';

const CategoryStore = useCategoryStore()
const { category, form, dialog } = storeToRefs(CategoryStore)
//action
const { onSubmitData } = CategoryStore

//state

const categories = [
    { id: "1", name: "Politik" },
    { id: "1", name: "Kuliner" },
    { id: "1", name: "IT" },
    { id: "1", name: "Sejarah" },
]


// validasi
const nameRules = [
    (value) => {
        if (value) return true
        return 'name harus diisi'
    }
]

const descriptionRules = [
    (value) => {
        if (value) return true
        return 'description harus diisi'
    }
]
</script>