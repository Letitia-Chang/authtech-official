import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
const baseTitle = "AuthTech Digital & Integration LLC.";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: ["奧斯數位整合股份有限公司", baseTitle].join(" | ") },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: { title: ["關於我們", baseTitle].join(" | ") },
  },
  {
    path: "/tech",
    name: "Tech",
    component: () => import("../views/Tech.vue"),
    meta: { title: ["AuthTech 管理系統", baseTitle].join(" | ") },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
    meta: { title: ["聯絡我們", baseTitle].join(" | ") },
  },
  {
    path: "/service",
    name: "Service",
    component: () => import("../views/Service.vue"),
    meta: { title: ["服務項目", baseTitle].join(" | ") },
  },
  {
    path: "/solution",
    name: "Solution",
    component: () => import("../views/Solution.vue"),
    meta: { title: ["解決方案", baseTitle].join(" | ") },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  window.document.title = `${to.meta.titlex}`;
  window.scrollTo(0, 0);

  next();
});

export default router;
