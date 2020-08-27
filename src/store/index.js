import Vue from "vue";
import Vuex from "vuex";
import VueSweetalert2 from "vue-sweetalert2";

import product from "./modules/product";
import icons from "./modules/icons";
import cart from "./modules/cart";
import wishlist from "./modules/wishlist";
import display from "./modules/display";
import checkout from "./modules/checkout";
import users from "./modules/users";

Vue.use(Vuex);
Vue.use(VueSweetalert2);
const Store = new Vuex.Store({
  modules: {
    product,
    icons,
    cart,
    wishlist,
    display,
    checkout,
    users,
  },
});

export default Store;
