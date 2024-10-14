import { auth, db } from '@/config/firebase'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('Auth', () => {
  console.log('===============jalankan ini useAuthStore===================')
  const formInput = ref(false)
  const router = useRouter()
  const currentUser = ref(null)
  const userCollection = collection(db, 'users')

  const user = reactive({
    name: '',
    email: '',
    password: ''
  })

  //error validasi
  const isError = ref(false)
  const message = ref(null)

  const userHandler = () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('Disini********')
        console.log(JSON.stringify(user))
        const queryId = query(userCollection, where('uid', '==', user.uid))
        const queryData = await getDocs(queryId)
        const queryUser = queryData.docs[0].data()

        console.log(queryData)
        currentUser.value = {}
        currentUser.value.email = user.email
        currentUser.value.id = user.uid
        currentUser.value.name = queryUser.name
        currentUser.value.isadmin = queryUser.isadmin
      } else {
        currentUser.value = null
      }
    })
  }

  const authUser = async (isLogin = false) => {
    isError.value = false
    message.value = null
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, user.email, user.password)
      } else {
        const data = await createUserWithEmailAndPassword(auth, user.email, user.password)
        await addDoc(userCollection, {
          name: user.name,
          isadmin: false,
          uid: data.user.uid
        })
      }
    } catch (error) {
      isError.value = true
      message.value = error.message
    }

    user.email = ''
    user.name = ''
    user.password = ''
    if (!isError.value) {
      router.push({ name: 'Dashboard' })
    }

    // console.log(register)
  }

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        router.push({ path: '/' })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return {
    formInput,
    user,
    authUser,
    userHandler,
    currentUser,
    logoutUser,
    isError,
    message
  }
})
