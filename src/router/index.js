import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HowItWorks from "../views/HowItWorks.vue";
import Faq from "../views/Faq.vue";
import TryB4All from "../views/TryB4All.vue";
import RequestForm from "../views/RequestForm.vue";
import RequestForm1 from "../views/RequestForm1.vue";
import Orange from "../views/Orange.vue";
import Agent from "../views/Agent.vue";
import NotFound from "../views/NotFound.vue";
import CookiePolicy from "../views/CookiePolicy.vue";
import CookieList from "../views/CookieList.vue";


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
    path: "/tryb4all",
    name: "TryB4All",
    component: TryB4All,
  },
  {
    path: "/requestform",
    name: "RequestForm",
    component: RequestForm,
  },
  {
    path: "/requestform1",
    name: "RequestForm1",
    component: RequestForm1,
  },
  {
    path: "/orange",
    name: "Orange",
    component: Orange,
  },
  {
    path: "/agent",
    name: "Agent Simulator",
    component: Agent,
  },
  { path: "/404", component: NotFound },
  { path: "*", redirect: "/404" },
  {
    path: "/cookie-policy",
    name: "Cookie Policy",
    component: CookiePolicy,
  },
  {
    path: "/our-cookie-list",
    name: "Cookie List",
    component: CookieList,
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
