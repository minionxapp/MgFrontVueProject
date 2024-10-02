import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '@/config/firebase'

export const useCategoryStore = defineStore('Category', () => {
  const CategoryCollection = collection(db, 'categories')

  const dialog = ref(false)
  const dialogDetail = ref(false)
  const form = ref(false)
  const categories = ref(null)
  const dialogDelete = ref(false)

  const category = reactive({
    id: '',
    name: '',
    description: '',
    isUpdate: false
  })

  const onSubmitData = async () => {
    if (!form.value) return

    if (category.isUpdate) {
      await updateDoc(doc(CategoryCollection, category.id), {
        name: category.name,
        description: category.description
      })
    } else {
      await addDoc(CategoryCollection, {
        name: category.name,
        description: category.description
      })
    }
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

  const getdata = (item) => {
    dialogDetail.value = true
    category.id = item.id
    category.name = item.name
    category.description = item.description
  }

  const clearInput = () => {
    category.id = ''
    category.description = ''
    category.name = ''
    category.isUpdate = false
  }

  const tambahData = () => {
    dialog.value = true
    clearInput()
  }

  const editData = (item) => {
    dialog.value = true
    category.isUpdate = true
    getIdData(item)
  }
  const getIdData = (item) => {
    category.id = item.id
    category.name = item.name
    category.description = item.description
  }

  const deleteData = (item) => {
    dialogDelete.value = true
    getIdData(item)
  }

  const destroyData = async (itemId) => {
    await deleteDoc(doc(CategoryCollection, itemId))
    alert('delete Berhasil')
    dialogDelete.value = false
    clearInput()
    readCategory()
  }

  return {
    dialog,
    form,
    category,
    categories,
    onSubmitData,
    readCategory,
    getdata,
    dialogDetail,
    tambahData,
    editData,
    deleteData,
    dialogDelete,
    destroyData
  }
})
