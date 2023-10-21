<template>
    <section>
        <div class="main h-screen w-full text-white flex m-auto items-center">
            <div class="w-full md:ml-[10%] md:w-[770px] flex flex-col gap-6 px-5">
                <h1 class="md:text-7xl text-4xl">Surpreenda com flores</h1>
                <p class="text-lg md:text-2xl">Buquês de flores e decoração para eventos especiais. Encante e faça a diferença.</p>
                <v-btn color="blue" class="sm:w-max text-white whitespace-pre"> Encomende agora </v-btn>
            </div>
        </div>
        <div id="Service" class="flex flex-col px-2 py-5">
            <h2 class="text-center text-h5 text-sm-h4">Serviços</h2>

            <div class="flex-1 flex flex-col sm:flex-row gap-4 justify-between items-center pt-5 md:px-5">
                <CardPatials :title="'Ornamentação'" :src="require('../assets/images/decorecoes/mesas.jpg')" />
                <CardPatials :title="'Buquês'" :src="require('../assets/images/decorecoes/mesas.jpg')" />
                <CardPatials :title="'Decoração'" :src="require('../assets/images/decorecoes/mesas.jpg')" />
            </div>
        </div>
        <div id="show">
            <h2></h2>
        </div>
        <div id="about" class="">
            <v-container class="flex flex-col gap-8 sm:flex-row w-full sm:items-center">
                <div class="flex-1">
                    <v-card class="h-full py-5 px-2">
                        <h2 class="text-h5 font-medium">Sobre nós</h2>
                        <div class="px-4 mt-6">
                            <p>
                                Levezza é uma empresa de florista, buquês de flores e decoração de eventos. Nós nos dedicamos a criar arranjos florais únicos e personalizados para cada ocasião, desde
                                casamentos até eventos corporativos.
                            </p>
                            <br />
                            <p>Trabalhamos com paixão e comprometimento para garantir que cada cliente receba um serviço excepcional.</p>
                            <p>Estamos comprometidos em oferecer a melhor qualidade de serviço, além de atendimento ao cliente excepcional.</p>
                        </div>
                    </v-card>
                </div>
                <div class="flex sm:w-max h-96 sm:h-full">
                    <v-card class="sm:w-max w-full">
                        <v-img cover class="sm:w-80 h-full w-full" src="./../assets/images/levezzalogo.jpg"></v-img>
                    </v-card>
                </div>
            </v-container>
        </div>
    </section>
</template>

<script>
    import CardPatials from "@/components/partials/CardPartials.vue";
    export default {
        name: "HelloWorld",
        components: {
            CardPatials,
        },
        data: () => ({}),
    };
</script>
<style>
    .main {
        background-image: url("./../assets/images/background.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
