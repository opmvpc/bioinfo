import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Composition from "../components/Composition.vue";
import Levenshtein from "../components/Levenshtein.vue";
import LevenshteinBenchmark from "../components/LevenshteinBenchmark.vue";

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
  },
  {
    path: "/levenshtein",
    name: "Levenshtein",
    component: Levenshtein
  },
  {
    path: "/levenshtein-benchmark",
    name: "LevenshteinBenchmark",
    component: LevenshteinBenchmark
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
