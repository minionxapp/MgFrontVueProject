import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
export const useUserStore = defineStore('Users', () => {
  const userData = ref([
    {
      name: 'Project',
      email: 'project@mail.com'
    },
    {
      name: 'Pegawai2',
      email: 'pegawai2@mail.com'
    }
  ])

  const userInput = reactive({
    name: '',
    email: ''
  })
  const tambahUser = () => {
    userData.value.push({
      name: userInput.name,
      email: userInput.email
    })
    clearInput()
  }

  const clearInput = () => {
    userInput.name = ''
    userInput.email = ''
  }

  return {
    userData,
    userInput,
    tambahUser
  }
})
