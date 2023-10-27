<template>
    <v-card class="flex flex-col w-full max-w-[450px] h-[450px] md:w-[400px] md:h-[400px]">
        <v-img class="flex-1 "   :src="src"> </v-img>

        <v-card-title class="flex-none">{{ title }}</v-card-title>

        <v-card-actions class="flex-none border-t-2">
            <v-btn color="orange"> Ver mais.. </v-btn>
        </v-card-actions>

    </v-card>
</template>
<script>
    export default {
        props: {
            src: String,
            title: String,
        },
    };
</script>
