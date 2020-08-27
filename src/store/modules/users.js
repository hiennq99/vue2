const state = {
  listUsers: [
    {
      gmail: "abcd@gmail.com",
      passwords: "123",
      country: "Viet Nam",
      companyName: "LTT",
      city: "ha noi",
      state: "VN",
      postZip: "100000",
      phone: "0123456789",
      isLogged: "1",
    },
  ],
  currentUser: {},
};
const getters = {};
const mutations = {
  setCurrentUser(state, user) {
    state.currentUser = user;
    // console.log(state.currentUser);
  },
};
const actions = {
  login(ctx, user) {
    let findUser = ctx.state.listUsers.find(
      (item) => item.gmail === user.gmail && item.passwords === user.passwords
    );
    if (findUser !== undefined) {
      ctx.commit("setCurrentUser", findUser);
    } else {
      ctx.commit("setCurrentUser", { isLogged: "0" });
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
