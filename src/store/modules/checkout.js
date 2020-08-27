const state = {
  step: 1,
};
const mutations = {
  nextStep(state) {
    console.log(state.step);
    state.step = state.step + 1;
  },
};
const actions = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
