<template>
    <v-app>
        <HeaderPartials :services="servicesRoutes" />
        <router-view :services="servicesRoutes" />
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
        data() {
            return {
                services: [
                    {
                        title: "Ornamentação",
                        cover: require("@/assets/images/services/ornamentacao/EventosAdultos/IMG-20231021-WA0217-1697908338992.jpg"),
                    },

                    { title: "Buquês", cover: require("@/assets/images/services/buque/Buques/IMG-20231021-WA0133-1697911054292.jpg") },

                    { title: "Ornamentação em viaturas", cover: require("@/assets/images/services/ornamentacao/Viatura/IMG-20231021-WA0175.jpg") },

                    { title: "Convites", cover: require("@/assets/images/services/convites/IMG-20231021-WA0193.jpg") },

                    { title: "Quadros", cover: require("@/assets/images/services/quadros/IMG-20231021-WA0159-1697907449967.jpg") },
                ],
                servicesRoutes: [
                    {
                        title: "Arrajos",
                        selectedTab: "Type 1",
                        types: [
                            {
                                name: "Simples",
                                link: { name: "simples" },
                                selectedTab: "type 1",
                            },
                            {
                                name: "Em caixa",
                                link: { name: "caixa" },
                                selectedTab: "type 2",
                            },
                            {
                                name: "Com dinheiro",
                                link: { name: "dinheiro" },
                                selectedTab: "type 3",
                            },
                            {
                                name: "Balões",
                                link: { name: "baloes" },
                                selectedTab: "type 4",
                            },
                        ],
                    },
                    {
                        title: "Buquês",
                        types: [
                            {
                                name: "Para damas",
                                link: { name: "damas" },
                                selectedTab: "type 5",
                            },
                            {
                                name: "Para Noivas",
                                link: { name: "noivas" },
                                selectedTab: "type 6",
                            },
                        ],
                    },
                    {
                        title: "Ornamentação",
                        types: [
                            {
                                name: "Eventos para crianças",
                                link: { name: "eventos-criancas" },
                                selectedTab: "type 7",
                            },
                            {
                                name: "Eventos papa adultos",
                                link: { name: "eventos-adultos" },
                                selectedTab: "type 8",
                            },
                            {
                                name: "Viaturas",
                                link: { name: "viaturas" },
                                selectedTab: "type 9",
                            },
                        ],
                    },
                    {
                        title: "Quadros",
                        types: [
                            {
                                name: "Quadros",
                                link: { name: "quadros" },
                                selectedTab: "type 10",
                            },
                        ],
                    },
                    {
                        title: "Convites",
                        types: [
                            {
                                name: "Convites",
                                link: { name: "convites" },
                                selectedTab: "type 11",
                            },
                        ],
                    },
                ],
            };
        },
    };
</script>

<style></style>
