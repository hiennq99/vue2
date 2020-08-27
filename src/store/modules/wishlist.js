const state = {
  wishList: [],
};
const getters = {};
const mutations = {
  pushProduct(state, item) {
    state.wishList.push(item);
  },
  removeProduct(state, index) {
    state.wishList.splice(index, 1);
  },
};
const actions = {
  addToWishList(ctx, item) {
    let findId = ctx.state.wishList.find((product) => {
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
