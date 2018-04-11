import { store } from './store/store';

class socketManager {

  constructor() {
    this.socket = io();
    this.initSocket();
  }

  initSocket() {

    this.socket.on('connect', () => {
      console.log('connected to server');
    });

    this.socket.on('initServerMessage', (message) => {
      console.log('initServerMessage', message);
      // sets the user list from the server
      store.commit('setUsers', message.users);
    });

    this.socket.on('serverMessage', (message) => {
      store.commit('addMessage', message);
    });

    this.socket.on('userJoin', (message) => {
      console.log('userJoin', message);
      store.commit('addUser', message.user);
    });

    this.socket.on('userLeft', (user) => {
      console.log('userLeft', user);
      store.commit('removeUser', user);
    });

  }

  sendMessage(message) {
    return new Promise((resolve, reject) => {
      this.socket.emit('clientMessage', message, (result) => {
        if (result)
          resolve();
        else
          reject();
      });
    });
  }

}

export default socketManager;
