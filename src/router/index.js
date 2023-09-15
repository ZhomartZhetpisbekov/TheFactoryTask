import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import ImageDetails from "../views/ImageDetails.vue";
import Search from "../views/Search.vue";
import Favorites from "../views/Favorites.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/search/:query/page/:page",
        name: "search",
        component: Search,
      },
      {
        path: "/image/:id",
        name: "imageDetails",
        component: ImageDetails,
      },
      {
        path: "/favorites",
        name: "favorites",
        component: Favorites,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
