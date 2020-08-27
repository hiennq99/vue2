import Vue from "vue";
import VueRouter from "vue-router";
import Router from "vue-router";
import Store from "./store";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Default"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/pages/Home"),
      },
      {
        path: "/pages/home",
        name: "home",
        component: () => import("@/pages/Home"),
      },
      {
        path: "/pages/shopcart",
        name: "Shop Cart",
        component: () => import("@/pages/ShopCart"),
      },
      {
        path: "/pages/wishlist",
        name: "My Wishlist",
        component: () => import("@/pages/WishList"),
      },
      {
        path: "/pages/checkout",
        name: "Checkout",
        component: () => import("@/pages/checkout"),
      },
    ],
  },
  {
    path: "*",
    name: "not-found",
    component: () => import("@/pages/404"),
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
router.beforeEach((to, from, next) => {
  Store.commit("display/setLoading", true);
  setTimeout(() => {
    Store.commit("display/setLoading", false);
  }, 500);
  next();
});

export default router;
