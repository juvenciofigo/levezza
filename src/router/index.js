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
            { path: "arranjos", component: () => import("@/components/partials/SevicesGalery.vue") },
            { path: "buques", component: () => import("@/components/partials/SevicesGalery.vue") },
            { path: "ornamentacao", component: () => import("@/components/partials/SevicesGalery.vue") },
            { path: "quadros", component: () => import("@/components/partials/SevicesGalery.vue") },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
