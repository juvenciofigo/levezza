<template>
    <div color="secondary">
        <v-app-bar color="primary">
            <template #prepend>
                <v-app-bar-title class="active:scale-75 transition-all duration-[200ms]">
                    <router-link to="/">
                        <v-img width="100" src="./../../assets/images/levezzaletrea.png"></v-img>
                    </router-link>
                </v-app-bar-title>
            </template>
            <template #append>
                <div class="gap-10 md:flex flex-row">
                    <div class="md:flex flex-row gap-10 hidden">
                        <v-btn variant="outlined" color="#25d366" prepend-icon="mdi-whatsapp" target="blank" href=" https://wa.me/message/BQV6CPKHLEKOK1" class="">Fale conosco</v-btn>

                        <!-- <v-menu location="end" :close-on-content-click="false" scrim="primary" prepend-icon="" class="h-[200px] duration-700" origin="overlap" open-delay="300" open-on-hover>
                            <template v-slot:activator="{ props }">
                                <div v-bind="props" class="hover:-translate-y-1"><span>Serviços</span><v-icon>mdi-chevron-down</v-icon></div>
                            </template>
                            <v-list select-strategy="independent">
                                <v-list-subheader prepend-avatar="d" title="Levezza" />
                                <div class="pl-5">
                                    <template v-for="(service, i) in services" :key="i">
                                        <v-list-group :value="service[i]">
                                            <template #activator="{ props }">
                                                <v-list-item color="primary" :title="service.title" v-bind="props" />
                                            </template>
                                            <template v-for="(type, d) in service.types" :key="d">
                                                <v-list-item variant="plain" :to="type.link" :title="type.name" />
                                            </template>
                                        </v-list-group>
                                    </template>
                                </div>
                            </v-list>
                        </v-menu> -->

                        <v-menu min-width="250" open-delay="50" class="custom-menu" flat height="" eager scrim="primary" location="end" open-on-hover>
                            <template v-slot:activator="{ props }">
                                <div v-bind="props" class="hover:-translate-y-1"><span>Serviços</span><v-icon>mdi-chevron-down</v-icon></div>
                            </template>
                            <v-list>
                                <v-list-item>
                                    <v-btn to="/services">Ver todos</v-btn>
                                </v-list-item>
                            </v-list>
                            <template v-for="(service, i) in services" :key="i">
                                <v-list>
                                    <v-list-item>
                                        <v-menu open-delay="50" transition="scale-transition" min-width="250" height="" location="end" open-on-hover>
                                            <template v-slot:activator="{ props }">
                                                <div v-bind="props" class="hover:-translate-y-1 h-full w-full flex flex-row justify-between">
                                                    <span>{{ service.title }}</span
                                                    ><v-icon>mdi-chevron-down</v-icon>
                                                </div>
                                            </template>
                                            <template v-for="(type, d) in service.types" :key="d">
                                                <v-list>
                                                    <v-list-item :to="type.link" :title="type.name"> </v-list-item>
                                                </v-list>
                                            </template>
                                        </v-menu>
                                    </v-list-item>
                                </v-list>
                            </template>
                        </v-menu>

                        <router-link to="#Sobre">Sobre nós</router-link>
                    </div>
                    <div>
                        <ul class="flex gap-5">
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100063441049490" target="_blank">
                                    <v-icon icon="mdi-facebook"></v-icon>
                                </a>
                            </li>

                            <li>
                                <a href="https://www.instagram.com/levezzamodabrindes/" target="_blank">
                                    <v-icon icon="mdi-instagram "></v-icon>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <v-app-bar-nav-icon floating @click="isDrawer = !isDrawer" class="md:hidden"> </v-app-bar-nav-icon>
            </template>
        </v-app-bar>

        <v-navigation-drawer width="" v-model="isDrawer" temporary class="md:hidden w-max">
            <v-list select-strategy="independent">
                <v-list-subheader prepend-avatar="d">Levezza</v-list-subheader>
                <v-list-group mandatory color="primary" prepend-icon="mdi-view-dashboard" :value="false">
                    <template #activator="{ props }">
                        <v-list-item v-bind="props" title="Serciços"> </v-list-item>
                    </template>

                    <div class="pl-5">
                        <template v-for="(service, i) in services" :key="i">
                            <v-list-group mandatory color="primary" :value="service[i]">
                                <template #activator="{ props }">
                                    <v-list-item :title="service.title" v-bind="props"> </v-list-item>
                                </template>
                                <template v-for="(type, d) in service.types" :key="d">
                                    <v-list class="pl-20">
                                        <v-list-item :to="type.link" :title="type.name"> </v-list-item>
                                    </v-list>
                                </template>
                            </v-list-group>
                        </template>
                    </div>
                </v-list-group>

                <v-list-item prepend-icon="mdi-forum" to="/about">Sobre nós</v-list-item>

                <v-list-item class="mt-12"
                    ><v-btn variant="outlined" prepend-icon="mdi-whatsapp" target="blank" href=" https://wa.me/message/BQV6CPKHLEKOK1" class="bg-[#25d366] text-[#444242]" text="Fale conosco"></v-btn
                ></v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
    export default {
        data: () => ({
            isDrawer: false,
            something: false,
        }),
        methods: {},
        props: {
            services: Array,
        },
        created() {
            window.addEventListener("resize", this.tela);
        },
    };
</script>
<style>
    .custom-menu {
        /* Defina os estilos que você deseja aplicar */
        background: none; /* Exemplo: remova o plano de fundo padrão */
        /* Outras propriedades CSS personalizadas */
    }
</style>
