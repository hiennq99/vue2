const state = {
  cart: [],
};
const getters = {};
const mutations = {
  pushProduct(state, item) {
    state.cart.push(item);
  },
  removeProduct(state, index) {
    state.cart.splice(index, 1);
  },
  changeAmount(state, item) {
    let product = state.cart.find((itemm) => {
      return itemm.id === item.id;
    });
    if (item.method === "asc") {
      product.amount = product.amount + 1;
    } else {
      if (product.amount <= 0) {
        product.amount = 0;
      } else product.amount = product.amount - 1;
    }
  },
};
const actions = {
  addToCart(ctx, item) {
    let findId = ctx.state.cart.find((product) => {
      return product.id === item.id;
    });
    if (findId !== undefined) {
      ctx.commit("changeAmount", { id: findId.id, method: "asc" });
    } else {
      ctx.commit("pushProduct", item);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
