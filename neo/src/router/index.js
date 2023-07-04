import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/setting",
      name: "setting",
      component: () => import("../components/SettingView.vue"),
    },
    {
      path: "/sql",
      name: "sql",
      component: () => import("../views/SqlView.vue"),
    },
  ],
});

export default router;
