import { createRouter, createWebHistory } from "vue-router";
import Login from "../Views/Login.vue";
import HomeView from "../Views/HomeView.vue";
import ForgetPwd from "../Views/ForgetPwd.vue";
// import ProductDetail from "../Views/ProductDetail.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: HomeView,
    meta: {
      title: "Home Page",
    },
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/ForgetPwd",
    name: "ForgetPwd",
    component: ForgetPwd,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const titleFromParams = to.params?.pageTitle;

  if (titleFromParams) {
    document.title = `${titleFromParams} - ${document.title}`;
  } else {
    document.title = to.meta?.title ?? "SGSW";
  }

  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  next();
});

export default router;
