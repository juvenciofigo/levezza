<template>
    <v-app>
        <HeaderPartials :services="servicesRoutes"/>
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
                        types: [
                            {
                                name: "Simples",
                                link: "/simples",
                            },
                            {
                                name: "Em caixa",
                                link: "/caixa",
                            },
                            {
                                name: "Com dinheiro",
                                link: "/dinheiro",
                            },
                            {
                                name: "Balões",
                                link: "/baloes",
                            },
                        ],
                    },
                    {
                        title: "Buquês",
                        types: [
                            {
                                name: "Para damas",
                                link: "/damas",
                            },
                            {
                                name: "Para Noivas",
                                link: "/noivas",
                            },
                        ],
                    },
                    {
                        title: "Ornamentação",
                        types: [
                            {
                                name: "Eventos para crianças",
                                link: "/eventos-criancas",
                            },
                            {
                                name: "Eventos papa adultos",
                                link: "/eventos-adultos",
                            },
                            {
                                name: "Viaturas",
                                link: "/viaturas",
                            },
                        ],
                    },
                    {
                        title: "Quadros",
                        link: "/quadros",
                        types: [],
                    },
                    {
                        title: "Convites",
                        link: "/convites",
                        types: [],
                    },
                ],
            };
        },
    };
</script>

<style></style>
