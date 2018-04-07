
const state = {

  users: []

}

const getters = {

  users(state) {
    return state.users;
  }

}

const mutations = {

  addUser(state, user) {
    state.users.push(user);
  }

}

const actions = {

}
