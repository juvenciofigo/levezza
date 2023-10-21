<template>
    <div color="secondary">
        <v-app-bar color="primary">
            <template #prepend>
                <v-app-bar-title>
                    <router-link to="/">
                        <v-img width="100" src="./../../assets/images/levezzaletrea.png" ></v-img>
                    </router-link>
                </v-app-bar-title>
            </template>
            <template #append>
                
                <div class=" gap-10 md:flex flex-row">
                    <div class="md:flex flex-row gap-10 hidden">
                        <router-link to="/Contact">Contacto</router-link>
                        <!-- <router-link to="#Service">Serviços</router-link> -->
                        <a href="#">Serviços</a>
                        <router-link to="#Sobre">Sobre nós</router-link>
                    </div>
                    <div>
                        <ul class="flex gap-5">
                            <li>
                                <a href="#">
                                    <v-icon icon="mdi-facebook"></v-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <v-icon icon="mdi-instagram "></v-icon>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <v-app-bar-nav-icon @click="isDrawer = !isDrawer" class="md:hidden"> </v-app-bar-nav-icon>
            </template>
        </v-app-bar>
        <v-navigation-drawer v-model="isDrawer" temporary class="md:hidden">
            <v-list>
                <v-list-subheader prepend-avatar="d">Levezza</v-list-subheader>
                <v-list-group prepend-icon="mdi-view-dashboard" :value="false">
                    <template #activator="{ props }">
                        <v-list-item v-bind="props" title="Serciços"> </v-list-item>
                    </template>
                    <div class="pl-5">
                        <v-list-item to="#">Ornamentação</v-list-item>
                        <v-list-item to="#">Buquês</v-list-item>
                        <v-list-item to="#">Decoração</v-list-item>
                    </div>
                </v-list-group>
                <v-list-item prepend-icon="mdi-forum" to="/about">Sobre nós</v-list-item>
                <v-list-item to="/contact" prepend-icon="mdi-forum">Fale conosno</v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isDrawer: false,
            };
        },
        methods: {},
    };
</script>
<style lang=""></style>
