<template>
    <h1>Halaman Category</h1>
    <div class="d-flex justify-end my-6">
        <v-btn color="primary" icon="mdi-plus" size="large" @click="tambahData()" />
    </div>
    <dialog-component v-model="dialog">
        <template #title>
            <div>
                {{ category.isUpdate ? "Update Category" : "Add Category" }}
            </div>
        </template>
        <template #content>
            <v-form @submit.prevent="onSubmitData" v-model="form">
                <v-text-field class="mb-1" :rules="nameRules" v-model="category.name" label="Name"></v-text-field>
                <v-textarea class="mb-1" :rules="descriptionRules" v-model="category.description"
                    label="Description"></v-textarea>
                <v-btn :disabled="!form" block color="success" variant="elevated" size="large" type="submit">
                    {{ category.isUpdate ? "Update" : "Tambah" }}
                </v-btn>
            </v-form>
        </template>
    </dialog-component>

    <dialog-component v-model="dialogDetail">
        <template #title>{{ category.name }}</template>
        <template #content>{{ category.description }}</template>
    </dialog-component>

    <dialog-component v-model="dialogDelete">
        <template #title>Delete Category</template>
        <template #content>
            <div class="text-h6 text-error pa-3">Yakin ingin hapus {{ category.name }}</div>
            <v-row>
                <v-col>
                    <v-btn color="primary" block @click="destroyData(category.id)">Ya</v-btn>
                </v-col>
                <v-col>
                    <v-btn color="error" block @click="dialogDelete = false">Tidak</v-btn>
                </v-col>
            </v-row>
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
                <td class="text-center">
                    <v-btn size="x-small" color="info" icon="mdi-information" @click="getdata(item)"></v-btn>
                    <v-btn size="x-small" color="primary" icon="mdi-pencil" class="mx-3"
                        @click="editData(item)"></v-btn>
                    <v-btn size="x-small" color="error" icon="mdi-trash-can" @click="deleteData(item)"></v-btn>
                </td>
            </tr>
        </tbody>
    </v-table>

</template>

<script setup>
import DialogComponent from '@/components/dashboard/DialogComponent.vue';
import { useCategoryStore } from '@/stores/CategoryStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const CategoryStore = useCategoryStore()
// state
const { category, form, dialog, categories, dialogDetail, dialogDelete } = storeToRefs(CategoryStore)
//action
const { onSubmitData, readCategory, getdata, tambahData, editData, deleteData, destroyData } = CategoryStore

onMounted(() => {
    readCategory()
})

//state

// const categories = [
// { id: "1", name: "Politik" },
// { id: "1", name: "Kuliner" },
// { id: "1", name: "IT" },
// { id: "1", name: "Sejarah" },
// ]


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