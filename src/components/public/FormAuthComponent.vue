<template>
    <div>
        <div class="mx-auto my-6 text-center text-h3 text-primary">
            {{ isLogin ? "Login" : "Register" }}

        </div>

        <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
            <div v-if="!isLogin">
                <div class="text-subtitle-1 text-medium-emphasis">Name</div>

                <v-text-field density="compact" placeholder="UserName" prepend-inner-icon="mdi-account"
                    variant="outlined"></v-text-field>
            </div>

            <div class="text-subtitle-1 text-medium-emphasis">Email</div>

            <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
                variant="outlined"></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Password


            </div>

            <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline"
                variant="outlined" @click:append-inner="visible = !visible"></v-text-field>


            <v-btn class="mb-8" color="blue" size="large" variant="tonal" block>
                {{ isLogin ? 'Log In' : 'Register' }}
            </v-btn>

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
import { ref } from 'vue';
defineProps({
    isLogin: {
        type: Boolean,
        default: false
    }
})
// export default {
//   data: () => ({
//     visible: false,
//   }),
// }
const visible = ref(false);
</script>