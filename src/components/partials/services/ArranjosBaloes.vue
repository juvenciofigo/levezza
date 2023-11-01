<template lang="">
    <CardPartials :images="images" :src="require('../../../assets/images/background.jpg')" />
</template>
<script>
    import CardPartials from "./../services/CardPartials.vue";
    export default {
        components: {
            CardPartials,
        },
        data() {
            return {
                images: [
                    require("@/assets/images/services/arranjos/Baloes/IMG-20231021-WA0170.jpg"),
                    require("@/assets/images/services/arranjos/Baloes/IMG-20231021-WA0171.jpg"),
                    require("@/assets/images/services/arranjos/Baloes/IMG-20231021-WA0172.jpg"),
                    require("@/assets/images/services/arranjos/Baloes/IMG-20231021-WA0173.jpg"),
                    require("@/assets/images/services/arranjos/Baloes/IMG-20231021-WA0174.jpg"),
                ],
            };
        },
    };
</script>
<style lang=""></style>
