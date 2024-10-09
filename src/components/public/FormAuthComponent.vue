<template>
    <div>
        <div class="mx-auto my-6 text-center text-h3 text-primary">
            {{ isLogin ? 'Login' : 'Register' }}
        </div>

        <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
            <v-form v-model="formInput" @submit.prevent="isLogin ? authUser(true) : authUser()">
                <div v-if="!isLogin">
                    <div class="text-subtitle-1 text-medium-emphasis">Name</div>

                    <v-text-field density="compact" placeholder="UserName" prepend-inner-icon="mdi-account"
                        variant="outlined" :rules="nameRules" v-model="user.name"></v-text-field>
                </div>

                <div class="text-subtitle-1 text-medium-emphasis">Email</div>

                <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
                    variant="outlined" :rules="emailRules" v-model="user.email"></v-text-field>

                <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                    Password
                </div>

                <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'" density="compact" placeholder="Enter your password"
                    prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="visible = !visible"
                    :rules="[passwordRules.required, passwordRules.min]" v-model="user.password"></v-text-field>

                <v-btn :disabled="!formInput" class="mb-8" type="submit" color="blue" size="large" variant="tonal"
                    block>
                    {{ isLogin ? 'Log In' : 'Register' }}
                </v-btn>
            </v-form>
            <v-card-text class="text-center" v-if="isLogin">
                <router-link class="text-blue text-decoration-none" :to="{ name: 'Register' }"
                    rel="noopener noreferrer">
                    Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
                </router-link>
            </v-card-text>
            <v-card-text class="text-center" v-else>
                <router-link class="text-blue text-decoration-none" :to="{ name: 'Login' }" rel="noopener noreferrer">
                    Login Now <v-icon icon="mdi-chevron-right"></v-icon>
                </router-link>
            </v-card-text>
        </v-card>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/AuthStore'
import { storeToRefs } from 'pinia'

//store
const authStore = useAuthStore()
//state
const { formInput, user } = storeToRefs(authStore)

//action
const { authUser } = authStore

//validation
const nameRules = [
    (value) => {
        if (value) return true
        return 'Nama Harus Diisi'
    }
]

// const emailRules[]
const emailRules = [
    v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid']

const passwordRules = {
    required: (value) => !!value || 'Password harus diisi',
    min: (value) => value.length >= 6 || 'Password minimal 6 karakter'
}

defineProps({
    isLogin: {
        type: Boolean,
        default: false
    }
})

const visible = ref(false)
</script>