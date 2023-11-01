import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue"),
    },
    {
        path: "/contact",
        name: "contact",
        component: () => import("../views/ContactView.vue"),
    },
    {
        path: "/services",
        component: () => import("../views/ServicesView.vue"),
        children: [
            {
                path: "arranjos",
                component: () => import("@/components/partials/SevicesGalery.vue"),
                children: [
                    {
                        path: "simples",
                        name: "simples",
                        component: () => import("@/components/partials/services/ArranjosSimples.vue"),
                    },
                    {
                        path: "caixa",
                        name: "caixa",
                        component: () => import("@/components/partials/services/ArranjosCaixa.vue"),
                    },
                    {
                        path: "dinheiro",
                        name: "dinheiro",
                        component: () => import("@/components/partials/services/ArranjosDinheiro.vue"),
                    },
                    {
                        path: "baloes",
                        name: "baloes",
                        component: () => import("@/components/partials/ArranjosBaloes.vue"),
                    },
                ],
            },
            {
                path: "buques",
                component: () => import("@/components/partials/services/ArranjosSimples.vue"),
                children: [
                    {
                        path: "damas",
                        name: "damas",
                        component: () => import("@/components/partials/services/ArranjosSimples.vue"),
                    },
                    {
                        path: "noivas",
                        name: "noivas",
                        component: () => import("@/components/partials/services/ArranjosSimples.vue"),
                    },
                ],
            },
            {
                path: "ornamentacao",
                component: () => import("@/components/partials/services/ArranjosSimples.vue"),
                children: [
                    {
                        path: "viaturas",
                        name: "viaturas",
                        component: () => import("@/components/partials/services/ArranjosSimples.vue"),
                    },
                    {
                        path: "eventos-adultos",
                        name: "eventos-adultos",
                        component: () => import("@/components/partials/services/ArranjosSimples.vue"),
                    },
                    {
                        path: "eventos-criancas",
                        name: "eventos-criancas",
                        component: () => import("@/components/partials/services/ArranjosSimples.vue"),
                    },
                ],
            },
            {
                path: "quadros",
                component: () => import("@/components/partials/services/ArranjosSimples.vue"),
                children: [
                    {
                        path: "quadros",
                        name: "quadros",
                        component: () => import("@/components/partials/services/ArranjosSimples.vue"),
                    },
                    {
                        path: "noivas",
                        name: "noivas",
                        component: () => import("@/components/partials/services/ArranjosSimples.vue"),
                    },
                ],
            },
            {
                path: "convites",
                component: () => import("@/components/partials/services/ArranjosSimples.vue"),
                children: [
                    {
                        path: "convites",
                        name: "convites",
                        component: () => import("@/components/partials/services/ArranjosSimples.vue"),
                    },
                ],
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
