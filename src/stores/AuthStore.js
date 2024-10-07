import { auth, db } from '@/config/firebase'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('Auth', () => {
  const formInput = ref(false)
  const router = useRouter()
  const userCollection = collection(db, 'users')

  const user = reactive({
    name: '',
    email: '',
    password: ''
  })

  const authUser = async () => {
    const data = await createUserWithEmailAndPassword(auth, user.email, user.password)
    await addDoc(userCollection, {
      name: user.name,
      isadmin: false,
      uid: data.user.uid
    })
    router.push({ name: 'Home' })
    alert('Register berhasil')
    // console.log(register)
  }

  return {
    formInput,
    user,
    authUser
  }
})
