<template>
    <v-app theme="dark">
        <HeaderPartials />
        <router-view />
        <FooterPartials />
    </v-app>
</template>

<script>
    import HeaderPartials from "@/components/partials/HeaderPartials.vue";
    import FooterPartials from "@/components/partials/FooterPartials.vue";

    export default {
        components: {
            HeaderPartials,
            FooterPartials,
        },
    };
</script>

<style></style>
