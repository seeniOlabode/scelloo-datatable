import { createStore } from "vuex";
import MOCK_DATA from "@/data/MOCK_DATA.json";
import { sortArray } from "@/helpers/helpers";

export default createStore({
  state: {
    users: [],
    selectedUsers: new Map(),
  },
  getters: {
    getQueriedData: (state) => (callback, sort) => {
      // A getter to query the Users
      // Users are filtered using a callback that is sent from the Data Table Component
      let filteredList = state.users.filter((user) => callback(user));

      // Sort Array with sortArray Helper
      filteredList = sortArray(filteredList, sort);
      return filteredList;
    },
    getUnpaidTotal: (state) => {
      // Store Users in a local variable
      let users = state.users;

      // Use Reduce to calculate the unpaid balance
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
    addUser(state, payload) {
      state.selectedUsers.set(payload.id, payload);
    },
    removeUser(state, payload) {
      state.selectedUsers.delete(payload.id);
    },
    paySelectedDues(state) {
      let selectedUsers = state.selectedUsers;
      selectedUsers.forEach((user) => {
        let temp = user;
        temp.payment = "paid";
        // Change the datePaid property of the user
        let timeElapsed = Date.now();
        let today = new Date(timeElapsed);
        user.datePaid = today.toLocaleDateString();
        user = temp;
      });
      state.selectedUsers = new Map();
    },
  },
  actions: {
    fetchAndStoreUsers({ commit }) {
      commit("storeUsers", MOCK_DATA);
    },
  },
});
