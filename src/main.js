import Vue from 'vue';
import App from './App.vue';
import { store } from './store/store';

new Vue({
  el: '#app',
  render: h => h(App),
  store
})

var socket = io();

window.socket = socket;

socket.on('connect', () => {
  console.log('connected to server');
});

socket.on('serverMessage', (message) => {
  console.log(message);
});

socket.on('userJoin', (message) => {
});
