import * as data from "../../../db.json";

const state = {
  products: data.products,
  categories: data.categories,
  childrenCategory: data.childrenCategory,
  interestedProduct: [
    {
      img: "bg-gray-img",
      title: "Denim Classy Short",
      price: "$35.00–$89.99",
      isSale: false,
      isNew: false
    },
    {
      img: "bg-gray-img",
      title: "Golden Heels",
      price: "$89.99",
      isSale: true,
      isNew: true
    },
    {
      img: "bg-gray-img",
      title: "Black Impression",
      price: "$259.99",
      isSale: false,
      isNew: false
    },
    {
      img: "bg-gray-img",
      title: "Denim Classy Shorts",
      price: "$35.00–$89.99",
      isSale: false,
      isNew: false
    },
    {
      img: "bg-gray-img",
      title: "Denim Classy Short",
      price: "$259.99",
      isSale: false,
      isNew: false
    },
    {
      img: "bg-gray-img",
      title: "Denim Classy Short",
      price: "$259.99",
      isSale: false,
      isNew: false
    }
  ]
};
console.log(data);
const getters = {};

const mutations = {};

const actions = {
  likedProduct(ctx, id) {
    let item = state.products.findIndex(finder => finder.id === id);
    console.log(item);
    state.products[item].isLiked = !state.products[item].isLiked;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
