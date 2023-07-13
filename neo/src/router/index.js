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
    {
      path: "/shell",
      name: "shell",
      component: () => import("../views/ShellView.vue"),
    },
    {
      path: "/worksheet",
      name: "worksheet",
      component: () => import("../views/WorksheetView.vue"),
    },
    {
      path: "/sqlmodal",
      name: "modal",
      component: () => import("../components/SqlmodalView.vue"),
    },
    {
      path: "/tag",
      name: "tag",
      component: () => import("../views/TagView.vue"),
    },
  ],
});

export default router;
