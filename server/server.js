const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const { Users } = require('./chat/users');

const publicPath = path.join(__dirname, '../');

console.log(publicPath);

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

var users = new Users();

app.use(express.static(publicPath));

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

io.on('connection', (socket) => {
  console.log('new user connected');

  // send an individual message to the current logged in user - welcome message
  socket.emit('serverMessage', {
    from: 'Admin',
    message: 'Welcome to that chat app'
  });

  users.addUser();

  // send a message to all logged in users, except current new logged user, that
  // a new user has been joined
  socket.broadcast.emit('userJoin', {
    from: 'Admin',
    message: 'New user has been joined to the chat'
  });

  // listen to the client messages, and send them to all of the user, except of them
  // current logged in user
  socket.on('clientMessage', (message) => {
    socket.broadcast.emit('serverMessage', {
      from: 'Admin',
      message: message.message
    });
  });

});
