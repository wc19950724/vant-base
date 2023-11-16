import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/classMoments",
  },
  {
    path: "/classMoments",
    name: "classMoments",
    component: () => import("@/views/classMoments/index.vue"),
  },
  {
    path: "/publish",
    name: "publish",
    component: () => import("@/views/publish/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
