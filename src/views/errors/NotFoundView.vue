<template>
    <div class="d-flex justify-center">
        <div>
            <img :src="NotFound" style="width: 40vw;" alt="">
            <p>Halaman Tidak ditemukan</p>
            <v-btn color="green" class="my-10" block :to="{ name: 'LandingPage' }">Kembali</v-btn>
        </div>
    </div>

</template>

<script setup>
import NotFound from "../../assets/NotFound.svg"
</script>