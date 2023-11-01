<template>
    <v-window height="" width="" show-arrows="hover">
        dsfa
        <v-window-item>
            <v-card >
                <img v-for="(src, i) in images" :key="i" class="object-contain" :src="src" alt="" />
            </v-card>
        </v-window-item>
    </v-window>
</template>
<script>
    export default {
        props: {
            title: String,
            images: Array,
        },
    };
</script>
