import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Composition from "../components/Composition.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/composition",
    name: "Composition",
    component: Composition
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
