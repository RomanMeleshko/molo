import { createWebHistory, createRouter } from "vue-router";

import Home from "views/Home/Home.vue";
// import Login from "views/Login/Login.vue";
// import Register from "views/Login/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/register",
  //   component: Register,
  // },
  // {
  //   path: "/login",
  //   component: Login,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
