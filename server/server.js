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

  socket.on('disconnect', () => {

    // removes the user from the users list, after the socket has been disconnected
    var user = users.removeUserBySocketId(socket.id);

    // send all the other users, the user who left
    socket.broadcast.emit('userLeft', user);

  });

  var user = {
    name: 'SomeUser',
    socketId: socket.id
  };

  // adds a new user, when a new socket connection has been established
  users.addUser(user);

  // send an individual message to the current logged in user - welcome message
  socket.emit('initServerMessage', {
    from: 'Admin',
    message: 'Welcome to that chat app',
    users: users.users
  });

  // send a message to all logged in users, except current new logged user, that
  // a new user has been joined
  socket.broadcast.emit('userJoin', {
    from: 'Admin',
    message: 'New user has been joined to the chat',
    user
  });

  // listen to the client messages, and send them to all of the user, except of them
  // current logged in user
  socket.on('clientMessage', (message, callback) => {
    socket.broadcast.emit('serverMessage', {
      from: 'Admin',
      message: message.message
    });
    callback(true);
  });

});
