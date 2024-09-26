<template>
    <v-dialog width="auto">
        <v-card>
            <v-card-title>
                <slot name="title"></slot>
            </v-card-title>

            <v-card-text>
                <slot name="content"></slot>
            </v-card-text>

        </v-card>
    </v-dialog>
</template>

<!-- <script>
export default {
    data() {
        return {
            dialog: false,
        }
    },
}
</script> -->