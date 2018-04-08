


const state = {

  users: [],

  messages: []

}

const getters = {

  users(state) {
    return state.users;
  },

  messages(state) {
    return state.messages;
  }

}

const mutations = {

  setUsers(state, users) {

    state.users = users;

  },

  addUser(state, user) {
    state.users.push(user);
  },

  removeUser(state, payload) {

    var userToRemoveIndex = state.users.findIndex((user) => {
      return user.socketId == payload.socketId;
    });
    if (userToRemoveIndex != -1)
      state.users.splice(userToRemoveIndex, 1);

  },

  addMessage(state, message) {
    debugger;
    state.messages.push(message);
  }

}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
