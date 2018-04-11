import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import userModule from './modules/user';
import loginModule from './modules/login';

export const store = new Vuex.Store({

  modules: {
    userModule,
    loginModule
  }

});
