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
      path: "/homew",
      name: "homew",
      component: () => import("../views/HomeWhiteView.vue"),
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
      path: "/sqlchart",
      name: "sqllog",
      component: () => import("../components/SqlChartView.vue"),
    },
    {
      path: "/sqllog",
      name: "sqlchart",
      component: () => import("../components/SqlLogView.vue"),
    },
    {
      path: "/tag",
      name: "tag",
      component: () => import("../views/TagView.vue"),
    },
    {
      path: "/tagsetting",
      name: "tagsetting",
      component: () => import("../views/EditGeneralView.vue"),
    },
    {
      path: "/data",
      name: "data",
      component: () => import("../views/EditDataView.vue"),
    },
    {
      path: "/axes",
      name: "axes",
      component: () => import("../views/EditAxesView.vue"),
    },
    {
      path: "/display",
      name: "display",
      component: () => import("../views/EditDisplayView.vue"),
    },
    {
      path: "/timerange",
      name: "timerange",
      component: () => import("../views/EditTimeRangeView.vue"),
    },
  ],
});

export default router;
