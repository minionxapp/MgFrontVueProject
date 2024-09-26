import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { db } from '@/config/firebase'

export const useCategoryStore = defineStore('Category', () => {
  const CategoryCollection = collection(db, 'categories')

  const dialog = ref(false)
  const form = ref(false)
  const categories = ref(null)

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
    readCategory()
  }

  const readCategory = async () => {
    const res = await getDocs(CategoryCollection)
    categories.value = res.docs.map((doc) => {
      console.log(doc.id, ' => ', doc.data())
      return { ...doc.data(), id: doc.id }
    })
  }
  return { dialog, form, category, categories, onSubmitData, readCategory }
})
