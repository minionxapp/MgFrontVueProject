import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { collection, addDoc, getDoc } from 'firebase/firestore'
import { db } from '@/config/firebase'

export const useCategoryStore = defineStore('Category', () => {
  const CategoryCollection = collection(db, 'categories')

  const dialog = ref(false)
  const form = ref(false)
  const category = reactive({
    name: '',
    description: ''
  })
  const onSubmitData = async () => {
    if (!form.value) return
    await addDoc(CategoryCollection, {
      name: category.name,
      description: category.description
    })
    alert('Simpan berhasil........')
    category.name = ''
    category.description = ''
    dialog.value = false
  }
  return { dialog, form, category, onSubmitData, getDoc }
})
