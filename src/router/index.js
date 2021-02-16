import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HowItWorks from "../views/HowItWorks.vue";
import Faq from "../views/Faq.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/howitworks",
    name: "HowItWorks",
    component: HowItWorks,
  },
  {
    path: "/faq",
    name: "Faq",
    component: Faq,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
