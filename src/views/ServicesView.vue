<template>
    <v-card  class="flex-1 mt-[64px] flex flex-col md:flex-row">
        <div class="border-b-2   border-black flex overflow-auto md:flex-col  md:border-r-2 md:border-b-0 md:h-full">
            <template v-for="(service, i) in services" :key="i">
                <div>
                    <v-tabs>
                        <v-menu>
                            <template v-slot:activator="{ props }">
                                <v-btn variant="plain" rounded="0" class="align-self-center me-4" height="100%" v-bind="props">
                                    <p>{{ service.title }}</p>
                                    <v-icon end> mdi-menu-down </v-icon>
                                </v-btn>
                            </template>

                            <v-list class="bg-grey-lighten-3">
                                <template v-for="(type, j) in service.types" :key="j">
                                    <v-list-item :to="type.link" :title="type.name"> </v-list-item>
                                </template>
                            </v-list>
                        </v-menu>
                    </v-tabs>
                </div>
            </template>
        </div>
        
            <router-view ></router-view>
       
    </v-card>
</template>

<script>
    export default {
        data: () => ({
            currentItem: "tab",
        }),
        props: {
            services: Array,
        },
    };
</script>
