const state = {
  isLoading: false
};
const getters = {};
const mutations = {
  setLoading(state, value) {
    state.isLoading = value;
  }
};
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
