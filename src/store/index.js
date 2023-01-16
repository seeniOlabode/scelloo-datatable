import { createStore } from "vuex";
import MOCK_DATA from "@/data/MOCK_DATA.json";

export default createStore({
  state: {
    users: [],
  },
  getters: {
    // An array that contains the queried data (from search and filter features);
    getQueriedData: (state) => (callback) => {
      const filteredList = state.users.filter((user) => callback(user));
      return filteredList;
    },
    getUnpaidTotal: (state) => {
      let users = state.users;
      return users.reduce((unpaidBalance, currentUser) => {
        if (
          currentUser.payment == "unpaid" ||
          currentUser.payment == "overdue"
        ) {
          return (unpaidBalance =
            Number(unpaidBalance) + Number(currentUser.amount));
        }
        return unpaidBalance;
      }, 0);
    },
  },
  mutations: {
    storeUsers(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    fetchAndStoreUsers({ commit }) {
      commit("storeUsers", MOCK_DATA);
    },
  },
});

console.log(MOCK_DATA);
